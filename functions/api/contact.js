export const onRequestPost = async ({ request }) => {
    // Check if the request method is POST
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: "Invalid method" }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Get the request body as JSON
    let contactInfo;
    try {
        contactInfo = await request.json();
    } catch (e) {
        console.error("Failed to parse JSON:", e);  // Debugging log
        return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Check for required fields
    if (!contactInfo.name || !contactInfo.email || !contactInfo.message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Prepare the Discord webhook payload
    const discordPayload = {
        content: `New contact information received:\n- Name: ${contactInfo.name}\n- Email: ${contactInfo.email}\n- Message: ${contactInfo.message}`
    };

    // Send a POST request to the Discord webhook
    const webhookUrl = "https://discord.com/api/webhooks/1292519304386052157/T7ruLjhRgGvIYZu93mpSFDeM5grbdtxdMoBbJt_PyDFQJHmyrTB3xbtVDg-U2Q9o6mCd"; // Replace with your actual Discord webhook URL
    try {
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discordPayload),
        });

        if (!webhookResponse.ok) {
            return new Response(JSON.stringify({ error: "Failed to send to Discord" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error sending to Discord" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Return a success JSON response
    return new Response(JSON.stringify({ success: true, message: "Contact information sent to Discord" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};
