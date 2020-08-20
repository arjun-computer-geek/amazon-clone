import React from 'react';
import data from './data';

console.log(data)

function App() {
  const openMenu = () =>{
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  const closeMenu = () =>{
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html">Amazon Clone</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>

        </div>
      </header>

      <aside id="sidebar" className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-btn" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>

            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
      </aside>

      <main id="main" className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">
                    <img className="product-image" src={product.image} alt="product" />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a> 
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price"> &#8377;{product.price}</div>
                    <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                  </div>
                </li>
              )
            }
            

          </ul> 
        </div>
      </main>

        <footer className="footer">
            All Right Reserved.
        </footer>
    </div>
  );
}

export default App;
