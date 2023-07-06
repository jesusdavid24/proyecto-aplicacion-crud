import React, { useState } from "react";
import "./form.scss";

const Form = ({ onAddProduct, viewForm }) => {
  const [product, setProduct] = useState({
    product_name: "",
    color: "",
    category: "Home",
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
    event.preventDefault();

    if (product.product_name && product.color && product.price) {
      const newProduct = {
        ...product,
        id: Date.now(),
      };

      onAddProduct(newProduct);

      setProduct({
        product_name: "",
        color: "",
        category: "Home",
        price: "",
      });
    } else {
      alert("Debes llenar todos los campos");
    }
  };

  if (viewForm == true) {
    return (
      <form className="form-container" onSubmit={handleAdd}>
        <h1 className="form__title">Add Product</h1>

        <aside className="form">
          <label htmlFor="product_name">PRODUCT NAME</label>
          <input
            type="text"
            name="product_name"
            className="form__product-name"
            onChange={handleChange}
            placeholder="your product name"
            value={product.product_name}
            autoComplete="off"
          />

          <label htmlFor="color">COLOR</label>
          <input
            type="text"
            name="color"
            className="form__product-color"
            onChange={handleChange}
            placeholder="silver, black, white, etc"
            value={product.color}
            autoComplete="off"
          />

          <label htmlFor="category">CATEGORY</label>
          <select
            name="category"
            className="form__product-category"
            onChange={handleChange}
            value={product.category}
          >
            <option value="Home">Home</option>
            <option value="Music">Music</option>
            <option value="Baby">Baby</option>
            <option value="Books">Books</option>
          </select>

          <label htmlFor="price">PRICE</label>
          <input
            type="number"
            name="price"
            className="form__product-price"
            onChange={handleChange}
            placeholder="$1999.99"
            value={product.price}
          />

          <button type="submit" className="form__add-button">
            Add
          </button>
        </aside>
      </form>
    );
  } else if (viewForm == "edit") {
    return (
      <form className="form-container" onSubmit={handleAdd}>
        <h1 className="form__title">Edit Product</h1>

        <aside className="form">
          <label htmlFor="product_name">PRODUCT NAME</label>
          <input
            type="text"
            name="product_name"
            className="form__product-name"
            onChange={handleChange}
            value={product.product_name}
            autoComplete="off"
          />

          <label htmlFor="color">COLOR</label>
          <input
            type="text"
            name="color"
            className="form__product-color"
            onChange={handleChange}
            value={product.color}
            autoComplete="off"
          />

          <label htmlFor="category">CATEGORY</label>
          <select
            name="category"
            className="form__product-category"
            onChange={handleChange}
            value={product.category}
          >
            <option value="Home">Home</option>
            <option value="Music">Music</option>
            <option value="Baby">Baby</option>
            <option value="Books">Books</option>
          </select>

          <label htmlFor="price">PRICE</label>
          <input
            type="number"
            name="price"
            className="form__product-price"
            onChange={handleChange}
            value={product.price}
          />

          <div className="edit-buttons-container">
            <button type="button" className="form__cancel-button">
              Cancel
            </button>

            <button type="button" className="form__update-button">
              Update
            </button>
          </div>
        </aside>
      </form>
    );
  }
};

export default Form;
