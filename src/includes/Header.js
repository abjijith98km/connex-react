import React from 'react'

const Header = () => {
  return (
    <>
    <header>
  <div className="container">
    <div className="header-inner">
      <div className="brand-logo">
        <a className="logo">Safqat</a>
      </div>
      <div className="filter-search">
        <form className="filter-search-form" role="search" aria-haspopup="listbox" aria-owns="list-menu" aria-expanded="true">
          <button className="filter">Supplier</button>
          <input className="form-control search-box" aria-autocomplete="list" aria-controls="list-menu" aria-labelledby="list-label" autocomplete="off" type="search" placeholder="What are you looking for…"/>
          <button className="search"></button>
          <div id="list-menu" role="listbox" aria-labelledby="list-label">
            <ul className="pixel-search-dropdown">
                <li role="option" aria-selected="false"><a href="#">apc back ups</a></li>
                <li role="option" aria-selected="false"><a href="#">apc smart ups</a></li>
                <li role="option" aria-selected="false"><a href="#">aperitif</a></li>
                <li role="option" aria-selected="false"><a href="#">apocalypse taco</a></li>
                <li role="option" aria-selected="false" ><a href="#">apollo</a></li>
                <li role="option" aria-selected="false" ><a href="#">apparel</a></li>
                <li role="option" aria-selected="false" ><a href="#">appetizer</a></li>
                <li role="option" aria-selected="false" ><a href="#">apparel</a></li>
                <button className="view-profile">Show all results</button> 
            </ul>
        </div>
        </form>
      </div>
      <div className="user-panel">
        <div className="left-wrapper">
          <div className="image-wrapper">
            <img src="./uploads/home/user.png" className="img-fluid" alt="demo" />
          </div>
          <div className="user-name">
            <div className="title">Hala!</div>
            <div className="name">Ali Ahamed</div>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="language-wrapper">
            <a className="lang-dropdown"></a>
            <div className="title">Language</div>
          </div>
          <div className="messages-box">
            <a className="message active"></a>
            <div className="title">Messages</div>
          </div>
          <div className="cart-items">
            <a className="cart"></a>
            <div className="title">Cart</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<section className="menu-header">
  <div className="container">
    <nav>
      <ul className="menu-list">
        <li className="all-categories">
          <a>All Categories</a>
        </li>
        <li>
          <a>Deals</a>
        </li>
        <li>
          <a>Best Sellers</a>
        </li>
        <li>
          <a>Samples</a>
        </li>
        <li>
          <a>Request for quotation</a>
        </li>
        <li>
          <a>Our services</a>
        </li>
        <li>
          <a>Sell with us</a>
        </li>
      </ul>
    </nav>
  </div>
</section>
    </>
  )
}

export default Header