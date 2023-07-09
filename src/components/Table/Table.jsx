import React, { useState } from "react";
import Toast from "../../utils/Toast";
import "./table.scss";

const Table = ({ products = [], onDeleteProduct, onEditProduct }) => {
   const handleDeleteButton = (id) => {
      onDeleteProduct(id);
      Toast.fire({
         icon: "success",
         title: "Product deleted!",
      });
   };

   const handleEditButton = (productToEdit) => {
      onEditProduct(productToEdit);
   };

   return (
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
               {!products.length && (
                  <tr className="table-void">
                     <td className="table--void__td" colSpan="5">No se encontraron productos</td>
                  </tr>
               )}
               {products.map((product) => (
                  <tr key={product.id}>
                     <td>{product.product_name}</td>

                     <td>{product.color}</td>

                     <td>{product.category}</td>

                     <td>{`$${product.price}`}</td>

                     <td className="products-table__buttons-td">
                        <button
                           className="products-table__edit-button"
                           onClick={() => handleEditButton(product)}>
                           Edit
                        </button>
                        <span>|</span>
                        <button
                           className="products-table__delete-button"
                           onClick={() => handleDeleteButton(product.id)}>
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
