import React from "react";

const Accessories = () => {
  return (
    <section className="flat-accessories">
      <div className="overlay"></div>
      <div className="container">
        <div
          className="flat-spacer clearfix"
          data-desktop="110"
          data-mobile="60"
          data-smobile="60"
        ></div>
        <div className="accessories-wrap">
          <div className="sub-col clearfix">
            <div className="one-of-two">
              <div className="flat-title v8">
                <h2>BEST SELLING WHEEL ACCESSORIES</h2>
              </div>
            </div>
            <div className="one-of-two">
              <ul className="flat-filter style4 text-right clearfix">
                <li>
                  <a href="#" data-filter=".tires">
                    TIRES
                  </a>
                </li>
                <li className="active">
                  <a href="#" data-filter=".wheels">
                    {" "}
                    WHEELS{" "}
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".maintenance">
                    MAINTENANCE{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flat-spacer clearfix"
            data-desktop="70"
            data-mobile="70"
            data-smobile="70"
          ></div>
          <ul className="products clearfix isotope-product  shop-grid-v1 v2">
            <li className="product-item wheels maintenance   one-of-three">
              <div className="product-img">
                <img
                  src="/assets/images/home5/accessories-1.png"
                  alt="AutoMov"
                />
              </div>
              <div className="product-content">
                <div className="overlay"></div>
                <div className="content-wrap">
                  <h4 className="product-title">
                    <a href="#" className="hover-text3">
                      DCX2-XE Car wheels
                    </a>
                  </h4>
                  <div className="product-info clearfix">
                    <span className="title-price">Only:</span>
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
              </div>
            </li>

            <li className="product-item wheels tires one-of-three">
              <div className="product-img">
                <img
                  src="/assets/images/home5/accessories-2.png"
                  alt="AutoMov"
                />
              </div>
              <div className="product-content">
                <div className="overlay"></div>
                <div className="content-wrap">
                  <h4 className="product-title">
                    <a href="#" className="hover-text3">
                      Yellow Truck Wheels
                    </a>
                  </h4>
                  <div className="product-info">
                    <span className="title-price">Only:</span>
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
              </div>
            </li>

            <li className="product-item wheels  maintenance one-of-three">
              <div className="product-img">
                <img
                  src="/assets/images/home5/accessories-3.png"
                  alt="AutoMov"
                />
              </div>
              <div className="product-content">
                <div className="overlay"></div>
                <div className="content-wrap">
                  <h4 className="product-title">
                    <a href="#" className="hover-text3">
                      737V — Gear Alloy Wheels
                    </a>
                  </h4>
                  <div className="product-info">
                    <span className="title-price">Only:</span>
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
              </div>
            </li>
          </ul>
        </div>
        <div
          className="flat-spacer clearfix"
          data-desktop="74"
          data-mobile="20"
          data-smobile="20"
        ></div>
      </div>
    </section>
  );
};

export default Accessories;
