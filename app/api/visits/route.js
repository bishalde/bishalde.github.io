// Proxies counterapi.dev so the API token stays on the server.
const BASE = "https://api.counterapi.dev/v2";
const { COUNTER_API_TOKEN, COUNTER_API_WORKSPACE, COUNTER_API_NAME } = process.env;

export const dynamic = "force-dynamic";

async function counter(path) {
  if (!COUNTER_API_TOKEN || !COUNTER_API_WORKSPACE || !COUNTER_API_NAME) {
    return Response.json({ ok: false }, { status: 503 });
  }
  try {
    const res = await fetch(`${BASE}/${COUNTER_API_WORKSPACE}/${COUNTER_API_NAME}${path}`, {
      headers: { Authorization: `Bearer ${COUNTER_API_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return Response.json({ ok: false }, { status: 502 });
    const { data } = await res.json();
    return Response.json({ total: Number(data?.up_count ?? data?.count) || 0 });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}

export const GET = () => counter("");
export const POST = () => counter("/up");
