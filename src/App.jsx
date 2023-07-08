import { useState } from "react";
import ProductForm from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Contact from "./components/Contact/Contact";
import { postProduct, deleteProduct } from "./api/product";
import "./App.scss";

function App() {
   const [viewPage, setViewPage] = useState("products");
   const [showForm, setShowForm] = useState(false);
   const [products, setProducts] = useState([]);
   const [productToEdit, setProductToEdit] = useState(null);

   const [formTitle, setFormTitle] = useState("Agregar producto");
   const [isEdit, setIsEdit] = useState(false);

   const handleAddButtonClick = () => {
      if (!showForm) {
         setIsEdit(false);
         setFormTitle("Agregar producto");
         setProductToEdit(null);
      }

      setShowForm(!showForm);
   };

   const handleViewPage = (newViewPage) => {
      setViewPage(newViewPage);
   };

   const handleAddProduct = async (newProduct) => {
      // setProducts([...products, newProduct]);
      const data = await postProduct(newProduct);
      setProducts([...products, data]);
   };

   const handleDeleteProduct = async (id) => {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
   };

   const onEditProduct = (id) => {
      setFormTitle("Editar producto");
      setProductToEdit(products.find((x) => x.id === id));
      setIsEdit(true);
      setShowForm(true);
   };

   const handleEditProduct = (product) => {
      console.log("Producto editado", product);
      // setProducts();
   };

   return (
      <div className="container">
         <div className="app-header">
            <Header handleViewPage={handleViewPage} />
         </div>

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
                     showForm={showForm}
                     onEditProduct={onEditProduct}
                  />
               </div>

               {showForm && (
                  <ProductForm
                     title={formTitle}
                     isEdit={isEdit}
                     productToEdit={productToEdit}
                     onAddProduct={handleAddProduct}
                     onEditProduct={handleEditProduct}>
                     {isEdit ? (
                        <>
                           <button type="reset">Limpiar formulario</button>
                           <button type="submit">Actualizar</button>
                        </>
                     ) : (
                        <button type="submit">Agregar</button>
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
