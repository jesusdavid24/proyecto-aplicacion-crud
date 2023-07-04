import React, { useState } from "react";
import "./form.scss";

const Form = ({ onAddProduct, viewForm }) => {
  const [product, setProduct] = useState({
    product_name: "",
    color: "",
    category: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAdd = (event) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };

    onAddProduct(newProduct);

    setProduct({});
  };

  if (viewForm) {
    return (
      <div className="form-container">
        <aside className="form">
          <h1 className="form__title">Add Product</h1>
          <label htmlFor="product_name">PRODUCT NAME</label>
          <input type="text" name="product_name" onChange={handleChange} />
          <label htmlFor="color">COLOR</label>
          <input type="text" name="color" onChange={handleChange} />
          <label htmlFor="category">CATEGORY</label>
          <select name="category" defaultValue="Home" onChange={handleChange}>
            <option value="Home">Home</option>
            <option value="Music">Music</option>
            <option value="Baby">Baby</option>
            <option value="Books">Books</option>
          </select>
          <label htmlFor="price">PRICE</label>
          <input type="number" name="price" onChange={handleChange} />
          <button onClick={handleAdd}>Add</button>
        </aside>
      </div>
    );
  } else {
  }
};

export default Form;
