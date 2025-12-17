type Env = {
  N8N_WEBHOOK_URL?: string;
};

const json = (obj: unknown, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestGet() {
  // Simple health check in browser
  return new Response("OK - /api/lead is live", { status: 200 });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  // Only allow JSON
  const ct = request.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    return json({ ok: false, error: "Expected JSON" }, 415);
  }

  // Parse body
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON" }, 400);
  }

  // Honeypot check (bots)
  if (body?.website) {
    return json({ ok: true }, 200);
  }

  const fullName = String(body?.fullName || "").trim();
  const companyName = String(body?.companyName || "").trim();
  const email = String(body?.email || "").trim();
  const plan = String(body?.plan || "").trim();

  if (!fullName || !companyName || !email || !plan) {
    return json({ ok: false, error: "Missing fields" }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Invalid email" }, 400);
  }

  const n8nUrl = env?.N8N_WEBHOOK_URL;
  if (!n8nUrl) {
    return json({ ok: false, error: "Server not configured (N8N_WEBHOOK_URL missing)" }, 500);
  }

  // Forward to n8n (server-to-server)
  const payload = {
    fullName,
    companyName,
    email,
    plan,
    source: "verdant.autowork.cloud",
    ts: new Date().toISOString(),
    ip: request.headers.get("CF-Connecting-IP") || "",
    ua: request.headers.get("User-Agent") || "",
  };

  const resp = await fetch(n8nUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    return json({ ok: false, error: "Upstream error" }, 502);
  }

  return json({ ok: true }, 200);
}
