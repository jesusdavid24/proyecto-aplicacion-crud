import React, { useState } from "react";
import "./header.scss";

const Header = ({ handleViewPage }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = (event) => {
    setMenu(!menu);
  };

  const handleContactPage = (event) => {
    handleViewPage("contact");
    setMenu(!menu);
  };

  const handleProductsPage = (event) => {
    handleViewPage("products");
    setMenu(!menu);
  };

  if (menu == false) {
    return (
      <header className="header">
        <div className="name-logo">
          <img src="../../../public/logo.svg" className="header__logo" />
          <h1 className="header__title">My Site</h1>
        </div>
        <div className="menu-container">
          <h2 className="header__message">Get started</h2>
          <button className="open-menu" onClick={handleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="name-logo">
          <img src="../../../public/logo.svg" className="header__logo" />
          <h1 className="header__title">My Site</h1>
        </div>
        <div className="menu-container">
          <h2>Get started</h2>
          <nav className="nav">
            <ul className="nav-ul">
              <button className="close-menu" onClick={handleMenu}>
                <i className="bi bi-list"></i>
              </button>
              <li onClick={handleProductsPage}>Products</li>
              <li onClick={handleContactPage}>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};

export default Header;