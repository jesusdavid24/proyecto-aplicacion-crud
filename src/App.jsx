import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Contact from "./components/Contact/Contact";
import { getProduct, postProduct, editProduct, deleteProduct } from "./api/product";
import "./App.scss";

function App() {
   const [viewPage, setViewPage] = useState("products");
   const [showForm, setShowForm] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
   const [products, setProducts] = useState([]);
   const [productToEdit, setProductToEdit] = useState(null);

   useEffect(() => {
      getProduct().then((response) => setProducts(response.data));
   }, []);

   const handleAddButtonClick = () => {
      !showForm && (setIsEdit(false), setProductToEdit(null));

      setShowForm(!showForm);
   };

   const handleViewPage = (newViewPage) => {
      setViewPage(newViewPage);
   };

   const handleAddProduct = async (newProduct) => {
      const { id } = newProduct;
      if (isEdit) {
         const data = await editProduct(id, newProduct);

         const editedProductsList = products.map((product) =>
            product.id === data.data.id ? data.data : product
         );

         setProducts(editedProductsList);
      } else {
         const data = await postProduct(newProduct);
         setProducts([...products, data]);
      }
   };

   const handleDeleteProduct = async (id) => {
      const response = window.confirm("Are you sure to delete this product?");

      response &&
         (await deleteProduct(id), setProducts(products.filter((product) => product.id !== id)));
   };

   const handleEditProduct = (productToEdit) => {
      setProductToEdit(productToEdit);
      setIsEdit(true);
      setShowForm(true);
   };

   return (
      <div className="container">
         <Header handleViewPage={handleViewPage} />

         {viewPage === "products" ? (
            <div className="app-form">
               <div className="table-container">
                  <div className="presentation">
                     <h1 className="presentation__title">Products List</h1>
                     <button className="presentation__add-button" onClick={handleAddButtonClick}>
                        {showForm ? "Hide" : "Add"}
                     </button>
                  </div>

                  <Table
                     products={products}
                     onDeleteProduct={handleDeleteProduct}
                     onEditProduct={handleEditProduct}
                  />
               </div>

               {showForm && (
                  <ProductForm
                     title={isEdit ? "Edit Product" : "Add Product"}
                     products={products}
                     isEdit={isEdit}
                     onAddProduct={handleAddProduct}
                     onEditProduct={handleEditProduct}
                     productToEdit={productToEdit}>
                     {isEdit ? (
                        <div className="edit-buttons-container">
                           <button
                              type="button"
                              className="form__cancel-button"
                              onClick={() => setShowForm(false)}>
                              Cancel
                           </button>
                           <button type="submit" className="form__update-button">
                              Update
                           </button>
                        </div>
                     ) : (
                        <button type="submit" className="form__add-button">
                           Add
                        </button>
                     )}
                  </ProductForm>
               )}
            </div>
         ) : (
            <Contact />
         )}
      </div>
   );
}
export default App;
