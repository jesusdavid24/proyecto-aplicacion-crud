export const postProduct = async (body) => {
    const response = await fetch('http://localhost:3001/product/createProduct', 
    {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        return await response.json()
    }

    throw new Error('Ha ocurrido un error')
}

