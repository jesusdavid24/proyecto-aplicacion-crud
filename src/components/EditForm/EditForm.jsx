import React, { useState, useEffect } from "react";
import "./editForm.scss";

const EditForm = ({
  products,
  handleViewForm,
  viewForm,
  editProduct,
  handleEditedProducts,
}) => {
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    setEditedProduct(editProduct[0]);
  }, [editProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleCancel = (event) => {
    handleViewForm(!viewForm);
  };

  const handleUpdate = (event) => {
    const edited = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    handleEditedProducts(edited);

    console.log(editedProduct);
  };

  return (
    <form className="form-container">
      <h1 className="form__title">Edit Product</h1>

      <aside className="form">
        <label htmlFor="product_name">PRODUCT NAME</label>
        <input
          type="text"
          name="product_name"
          className="form__product-name"
          onChange={handleChange}
          value={editedProduct.product_name}
          autoComplete="off"
        />

        <label htmlFor="color">COLOR</label>
        <input
          type="text"
          name="color"
          className="form__product-color"
          onChange={handleChange}
          value={editedProduct.color}
          autoComplete="off"
        />

        <label htmlFor="category">CATEGORY</label>
        <select
          name="category"
          className="form__product-category"
          onChange={handleChange}
          value={editedProduct.category}
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
          value={editedProduct.price}
        />

        <div className="edit-buttons-container">
          <button
            type="button"
            className="form__cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="form__update-button"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </aside>
    </form>
  );
};

export default EditForm;
