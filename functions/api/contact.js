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

    const body = {
     "subject": `${contactInfo.subject} - ${contactInfo.email}`,
      "text": `From: ${contactInfo.name} (${contactInfo.email})` + `\nIp ${data.request.headers['x-real-ip']}` + "\n\n" + contactInfo.message
    }

    const Url = data.env.CONTACT_URL;

    try {
        const response = await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
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
