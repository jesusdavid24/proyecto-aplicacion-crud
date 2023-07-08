import React, { useState } from "react";
import "./table.scss";

const Table = ({ products = [], onDeleteProduct, onEditProduct }) => {
   const handleDelete = (id) => {
      onDeleteProduct(id);
   };

   const handleEdit = (id) => {
      onEditProduct(id);
   };

   return products.length == 0 ? (
      <h1 className="table__empty-products">
         There are no products to show. Please click Add button to start.
      </h1>
   ) : (
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

                     <td className="products-table__buttons-td">
                        <button
                           className="products-table__edit-button"
                           onClick={() => handleEdit(product.id)}>
                           Edit
                        </button>
                        <span>|</span>
                        <button
                           className="products-table__delete-button"
                           onClick={() => handleDelete(product.id)}>
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
