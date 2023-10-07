const baseUrl = 'http://localhost:8080/api-hackathon';

export const generateTicketOxxoPay = async (amount, customer_info) => {
    const url = `${baseUrl}/conekta/`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount,
                customer_email: customer_info?.customer_email,
                customer_name: customer_info?.customer_name,
                customer_phone: customer_info?.customer_phone
            }),
        });

        if (!response.ok) {
            // Si la respuesta no es exitosa (código de estado no es 200), manejar el error
            const errorData = await response.json();
            console.error("Error de respuesta:", response.status);
            console.error("Mensaje de error:", errorData);
            throw new Error(`Error de respuesta: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        // Manejar otros errores
        console.error("Error al realizar la solicitud:", error.message);
        throw error;
    }
}
