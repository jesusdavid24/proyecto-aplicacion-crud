import React, { useState } from "react";
import "./table.scss";

const Table = ({
  products = [],
  onDeleteProduct,
  viewForm,
  handleViewForm,
}) => {
  const handleForm = (event) => {
    handleViewForm(!viewForm);
  };

  const handleDelete = (event) => {
    const id = event.target.id;
    const dele = products.filter((product) => product.id != id);
    onDeleteProduct(dele);
    console.log(dele);
    console.log(id);
  };

  const handleEdit = (event) => {
    handleViewForm("edit");
  };

  return (
    <div className="table-container">
      <div className="presentation">
        <h1 className="presentation__title">Products List</h1>
        <button className="presentation__add-button" onClick={handleForm}>
          {!viewForm ? "Add" : "Hide"}
        </button>
      </div>
      <div className="table">
        <table className="products-table">
          <thead>
            <tr key="table-head">
              <th>PRODUCT NAME</th>

              <th>COLOR</th>

              <th>CATEGORY</th>

              <th>PRICE</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.product_name}</td>

                <td>{product.color}</td>

                <td>{product.category}</td>

                <td>{`$${product.price}`}</td>

                <td>
                  <button
                    id={product.id}
                    className="products-table__edit"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <span>|</span>
                  <button
                    id={product.id}
                    className="products-table__delete"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
