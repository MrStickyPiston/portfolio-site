export const onRequestPost = async (data) => {

    const request = data.request

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
    if (!contactInfo.name || !contactInfo.email || !contactInfo.message || !contactInfo.subject) {
        return new Response(JSON.stringify({ error: "Missing required fields or fields are empty" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Prepare the Discord webhook payload
    const discordPayload = {
        "content": null,
        "embeds": [
            {
                "color": 4054148,
                "fields": [
                    {
                        "name": "Name",
                        "value": `${contactInfo.name}`
                    },
                    {
                        "name": "Email",
                        "value": `${contactInfo.email}`
                    },
                    {
                        "name": "Subject",
                        "value": `${contactInfo.subject}`
                    },
                    {
                        "name": "Message",
                        "value": `${contactInfo.message}`
                    }
                ],
                "timestamp": new Date().toISOString()
            }
        ],
        "username": `${contactInfo.name} (contact)`,
        "attachments": []
    }

    const webhookUrl = data.env.CONTACT_WEBHOOK;

    try {
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discordPayload),
        });

        if (!webhookResponse.ok) {
            return new Response(JSON.stringify({ error: "Message could not be delivered: error response" }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: "Message could not be delivered: An unexpected error occured" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Return a success JSON response
    return new Response(JSON.stringify({}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};
