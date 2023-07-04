import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Contact from "./components/Contact/Contact";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [viewPage, setViewPage] = useState("products");

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (dele) => {
    setProducts(dele);
  };

  const handleViewForm = (newViewForm) => {
    setViewForm(newViewForm);
  };

  const handleViewPage = (newViewPage) => {
    setViewPage(newViewPage);
  };

  if (viewPage == "products") {
    return (
      <div className="container">
        <div className="app-header">
          <Header handleViewPage={handleViewPage} />
        </div>
        <div className="app-form">
          <Table
            products={products}
            onDeleteProduct={handleDeleteProduct}
            viewForm={viewForm}
            handleViewForm={handleViewForm}
          />
          <Form onAddProduct={handleAddProduct} viewForm={viewForm} />
        </div>
      </div>
    );
  } else if (viewPage == "contact") {
    return (
      <div className="container">
        <div className="app-header">
          <Header handleViewPage={handleViewPage} />
        </div>

        <Contact />
      </div>
    );
  }
}

export default App;
