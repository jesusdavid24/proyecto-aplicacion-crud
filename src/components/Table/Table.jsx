import React, { useState } from "react";
import "./table.scss";

const Table = ({
  products = [],
  onDeleteProduct,
  viewForm,
  handleViewForm,
}) => {
  const handleDelete = (event) => {
    const id = event.target.id;
    const dele = products.filter((product) => product.id != id);
    onDeleteProduct(dele);
    console.log(dele);
    console.log(id);
  };

  const handleForm = (event) => {
    handleViewForm(!viewForm);
  };

  return (
    <div className="main">
      <div className="title-button">
        <h1>Products list</h1>
        <button onClick={handleForm}>{!viewForm ? "Add" : "Hide"}</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr key="head">
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

                <td>{product.price}</td>

                <td>
                  <button>Edit</button>{" "}
                  <button id={product.id} onClick={handleDelete}>
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
