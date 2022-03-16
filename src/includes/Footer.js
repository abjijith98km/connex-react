import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer-links top-wrapper">
        <div className="link-list">
          <div className="title">About Safqat</div>
          <ul>
            <li><a>About Us</a></li>
            <li><a>Press Releases</a></li>
            <li><a>Careers</a></li>
          </ul>
        </div>
        <div className="link-list">
          <div className="title">Buy on Safqat</div>
          <ul>
            <li><a>All Categories</a></li>
            <li><a>All Brands</a></li>
            <li><a>Deals</a></li>
            <li><a>Samples</a></li>
          </ul>
        </div>
        <div className="link-list">
          <div className="title">Support</div>
          <ul>
            <li><a>FAQs</a></li>
            <li><a>Support</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
        <div className="link-list">
          <div className="title">Sellers</div>
          <ul>
            <li><a>Register as seller</a></li>
            <li><a>Sell with us</a></li>
            <li><a>Services</a></li>
          </ul>
        </div>
        <div className="link-list">
          <div className="title">Get the Mobile App</div>
          <div className="download-buttons">
            <a className="app-store"></a>
            <a className="play-store"></a>
          </div>
        </div>
      </div>
      <div className="middle-wrapper">
        <div className="privacy-policy">
          <a>Privacy policy</a>
          <a>Terms & Conditions</a>
          <a>Returns</a>
        </div>
        <div className="social-icons">
          <div className="title">Follow Us</div>
          <div className="icons">
            <a className="instagram"></a>
            <a className="twitter"></a>
            <a className="facebook"></a>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="copy-right">
          <div className="privacy">Privacy Policies & Terms and Conditions</div>
          <div className="copy-right">© 2020 Connex. All Rights Reserved.</div>
        </div>
        <div className="stay-updated">
          <div className="title">Stay Updated</div>
          <form>
            <input className="form-control" type="text" placeholder="Enter your email here"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;