export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json({ message: "Missing fields" }, { status: 400 });
    }
    // TODO: Hook up to email provider or database.
    console.log("Contact message:", { name, email, message });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }
}
