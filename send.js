import fetch from "node-fetch";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    const { content } = req.body;

    if (!content) return res.status(400).json({ error: "Missing content" });

    try {
        await fetch("https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content })
        });

        res.status(200).json({ message: "Message sent!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to send message" });
    }
}
