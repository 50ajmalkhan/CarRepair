import React from "react";
const Shop = () => {
  return (
    <div>
      <section className="page-title v2 clearfix parallax parallax6">
        <div className="overlay"></div>
        <div className="container">
          <div className="wrap-page-title">
            <div className="page-title-heading text-center v2">
              <h1>
                <a href="#" className="hover-text">
                  SHOP PAGE
                </a>
              </h1>
            </div>

            <div className="breakcrums text-center v2">
              <ul>
                <li>
                  <a href="#" className="hover-text">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    Shopping
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap-content">
        <div className="main-shop-grid-sidebar ">
          <div
            className="flat-spacer clearfix"
            data-desktop="130"
            data-mobile="60"
            data-smobile="60"
          ></div>
          <div className="container clearfix">
            <div className="sidebar-left shop-grid-v1">
              <div className="widget widget-search">
                <form action="#" className="search-form" method="get">
                  <input
                    type="search"
                    name="search"
                    className="search-text"
                    title="Search ..."
                    placeholder="Search"
                  />
                  <button
                    className="search-submit"
                    type="submit"
                    title="Search"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div
                className="flat-spacer clearfix"
                data-desktop="52"
                data-mobile="52"
                data-smobile="52"
              ></div>
              <div className="widget widget-categories widget-links v3">
                <h5 className="widget-title">CATEGORIES </h5>
                <ul>
                  <li>
                    <a href="#" className="hover-text">
                      Fluids
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-text">
                      Diagnostic
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-text">
                      Filters
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-text">
                      Electrical
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-text">
                      Certified
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="flat-spacer clearfix"
                data-desktop="51"
                data-mobile="50"
                data-smobile="50"
              ></div>

              <div className="widget widget-filter">
                <h5 className="widget-title">PRICE FILTER</h5>
                <div className="flat-price-filter">
                  <div id="slider-range"></div>
                  <p className="clearfix">
                    <span className="title-amount">Price:</span>
                    <span id="amount"></span>
                  </p>
                  <button type="submit" className="btn-effect bg-filter">
                    Filter
                  </button>
                </div>
              </div>

              <div className="widget widget-top-products">
                <h5 className="widget-title">TOP PRODUCTS</h5>
                <ul className="list-products-top">
                  <li className="clearfix">
                    <div className="img">
                      <a href="#">
                        <img
                          src="/assets/images/shop/shop-grid-sidebar-v1/product-top-1.png"
                          alt="AutoMov"
                        />
                      </a>
                      <div className="overlay">
                        <a href="#">
                          <span className="arrow_right hover-text"></span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="heading">
                        <a href="#">Advance blue oil cans</a>
                      </h6>
                      <div className="list-star">
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                      </div>
                      <p className="price">$ 235</p>
                    </div>
                  </li>

                  <li className="clearfix">
                    <div className="img">
                      <a href="#">
                        <img
                          src="/assets/images/shop/shop-grid-sidebar-v1/product-top-2.png"
                          alt="AutoMov"
                        />
                      </a>
                      <div className="overlay">
                        <a href="#">
                          <span className="arrow_right hover-text"></span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="heading">
                        <a href="#">Advance blue oil cans</a>
                      </h6>
                      <div className="list-star">
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                      </div>
                      <p className="price">$ 235</p>
                    </div>
                  </li>

                  <li className="clearfix">
                    <div className="img">
                      <a href="#">
                        <img
                          src="/assets/images/shop/shop-grid-sidebar-v1/product-top-3.png"
                          alt="AutoMov"
                        />
                      </a>
                      <div className="overlay">
                        <a href="#">
                          <span className="arrow_right hover-text"></span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="heading">
                        <a href="#">Advance blue oil cans</a>
                      </h6>
                      <div className="list-star">
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                      </div>
                      <p className="price">$ 235</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="widget widget-tags v2">
                <h5 className="widget-title">TAG CLOUDS</h5>
                <ul>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Warranties
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Diagnostic
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Filters
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Certified
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Electrical
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" flat-button bg-action v2">
                      Brakes
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="wrap-shop shop-grid-v1 content-page-wrap">
              <div
                className="flat-spacer clearfix"
                data-desktop="0"
                data-mobile="60"
                data-smobile="60"
              ></div>
              <div className="shop-content">
                <ul className="products fix-float-box shop-grid-v1">
                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-1.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          DCH333X2-XE Car wheels
                        </a>
                      </h5>
                      <div className="product-info clearfix">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-2.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content clearfix">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          DEWALT 2,5 Plier
                        </a>
                      </h5>
                      <div className="product-info">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-3.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content clearfix">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          Akom - Automotive Battery
                        </a>
                      </h5>
                      <div className="product-info">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-4.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content clearfix">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          Engine 8 Machines - Covette
                        </a>
                      </h5>
                      <div className="product-info">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-5.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content clearfix">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          Akom - Automotive Battery
                        </a>
                      </h5>
                      <div className="product-info">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="product-item one-of-two">
                    <div className="product-img">
                      <img
                        src="/assets/images/shop/shop-grid-sidebar-v1/product-6.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                      <span className="discount font-Rajdhani">- 15%</span>
                      <ul className="list-icon">
                        <li>
                          <a href="#">
                            <span className=" icon_search"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className=" icon_cart_alt"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon_tags_alt"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content clearfix">
                      <h5 className="product-title">
                        <a href="#" className="hover-text">
                          Engine 8 Machines - Covette
                        </a>
                      </h5>
                      <div className="product-info">
                        <span className="price-sale font-Rajdhani">$ 115</span>
                        <span className="price">$ 205</span>
                        <div className="list-star">
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                          <i className="icon_star"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="flat-paginations v2">
                  <ul className="paginations">
                    <li>
                      <a href="#">
                        <span className=" arrow_carrot-left"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="arrow_carrot-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flat-spacer clearfix"
            data-desktop="98"
            data-mobile="60"
            data-smobile="60"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
