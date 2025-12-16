export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "No content provided" });
  }

  const webhookURL = "https://discord.com/api/webhooks/1450474160961749032/PltKT95wh6WIAGQryoWQt0J3qTxliephjkol8c3wkSaEgfXBMriSxY6BLA9-ufpHTbx0";

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send webhook" });
  }
}

