import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header id="header" className="header-v7">
      <div className="container-fluid clearfix">
        <div id="logo">
          <a href="index.html">
            <img
              src="/assets/images/logo3.png"
              alt="AutoMov"
              width="175"
              height="53"
              data-retina="/assets/images/logo3-2x.png"
              data-width="175"
              data-height="53"
            />
          </a>
        </div>

        <div className="mobile-button v2">
          <span></span>
        </div>

        <div className="nav-wrap text-center">
          <nav id="mainnav" className="mainnav header-v1">
            <ul className="menu">
              <li className="active">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/gallary">GALLERY</Link>
              </li>
              <li>
                <Link to="#">PAGE</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/about">About Company</Link>
                  </li>

                  <li>
                    <Link to="/ourteam">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/appoinment">APPOINTMENT</Link>
              </li>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flat-menu-extra clearfix">
          <ul>
            <li className="cart nav-top-cart-wrapper">
              <Link to="#">
                <span className="text">My cart is (0)</span>
              </Link>{" "}
              <span className="total-product">3</span>
              <div className="nav-shop-cart">
                <div className="widget_shopping_cart_content">
                  <div className="woocommerce-min-cart-wrap">
                    <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <Link to="#" className="remove">
                          <span className="fa fa-close"></span>
                        </Link>
                        <Link to="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-1.png"
                            alt="Image"
                          />
                          Advance Blue Oil Cans
                        </Link>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            65
                          </span>
                        </span>
                      </li>

                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <Link to="#" className="remove">
                          <span className="fa fa-close"></span>
                        </Link>
                        <Link to="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-2.png"
                            alt="Image"
                          />
                          Simple Blue Oil Cans
                        </Link>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            35
                          </span>
                        </span>
                      </li>

                      <li className="woocommerce-mini-cart-item mini_cart_item">
                        <Link to="#" className="remove">
                          <span className="fa fa-close"></span>
                        </Link>
                        <Link to="#">
                          <img
                            width="150"
                            height="150"
                            src="/assets/images/shop/shop-grid-sidebar-v1/product-top-3.png"
                            alt="Image"
                          />
                          Premium Blue Oil Cans
                        </Link>

                        <span className="quantity">
                          1 ×{" "}
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45
                          </span>
                        </span>
                      </li>
                    </ul>

                    <p className="woocommerce-mini-cart__total total">
                      <strong>Subtotal:</strong>{" "}
                      <span className="woocommerce-Price-amount amount">
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        145
                      </span>
                    </p>

                    <p className="woocommerce-mini-cart__buttons buttons">
                      <Link to="#" className="button wc-forward">
                        View cart
                      </Link>
                      <Link href="#" className="button checkout wc-forward">
                        Checkout
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
