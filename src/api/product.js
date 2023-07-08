export const getProduct = async () => {
   const response = await fetch("http://localhost:3001/product/", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("Ha ocurrido un error");
};

export const postProduct = async (body) => {
   const response = await fetch("http://localhost:3001/product/createProduct", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("Ha ocurrido un error");
};

export const editProduct = async (id, body) => {
   const response = await fetch(`http://localhost:3001/product/updateProduct/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("Ha ocurrido un error");
};

export const deleteProduct = async (id) => {
   const response = await fetch(`http://localhost:3001/product/deleteProduct/${id}`, {
      method: "DELETE",
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("Ha ocurrido un error");
};
