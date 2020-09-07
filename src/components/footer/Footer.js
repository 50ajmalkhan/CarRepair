import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className=" style2 pd-bottom-40">
        <div
          className="flat-spacer clearfix"
          data-desktop="53"
          data-mobile="60"
          data-smobile="60"
        ></div>
        <div className="container">
          <div className="widget widget-info text-center v2">
            <div className="flat-iconbox style2 v2 clearfix">
              <div className="iconbox v2 style2 one-of-three">
                <div className="iconbox-icon">
                  <span className="icon_pin_alt"></span>
                </div>
                <div className="iconbox-content">
                  <Link to="#" className="hover-text">
                    <p>1379 Shoreline Parkway, United States</p>
                  </Link>
                </div>
              </div>

              <div className="iconbox v2 style2 one-of-three">
                <div className="iconbox-icon">
                  <span className="icon_mobile"></span>
                </div>
                <div className="iconbox-content">
                  <a href="#" className="hover-text">
                    <p>+100 2521-888-39151</p>
                  </a>
                  <a href="#" className="hover-text">
                    <p>+800 718-999-3939</p>
                  </a>
                </div>
              </div>

              <div className="iconbox v2 style2 one-of-three">
                <div className="iconbox-icon">
                  <span className="icon_mail_alt"></span>
                </div>
                <div className="iconbox-content">
                  <a href="#" className="hover-text">
                    <p>contact@automov.com</p>
                  </a>
                  <a href="#" className="hover-text">
                    <p>automov@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flat-spacer clearfix"
            data-desktop="80"
            data-mobile="0"
            data-smobile="0"
          ></div>
          <div className="flat-widget-ft fix-float-box">
            <div className="widget widget-about">
              <div id="logo-ft">
                <a href="#">
                  <img
                    src="/assets/images/logo-ft.png"
                    alt="logo-ft"
                    width="183"
                    height="55"
                    data-retina="/assets/images/logo-ft-2x.png"
                    data-width="183"
                    data-height="55"
                  />
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
              </p>
              <h6>
                <a href="#" className="hover-text">
                  Our history
                </a>
              </h6>
            </div>

            <div className="widget widget-links">
              <h4 className="widget-title">USEFUL LINKS </h4>
              <ul>
                <li>
                  <a href="#" className="hover-text">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    Latest News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div className="widget widget-info">
              <h4 className="widget-title"> CONTACT INFO </h4>
              <div className="flat-iconbox style3">
                <div className="iconbox clearfix style3">
                  <div className="iconbox-icon">
                    <span className="icon_pin_alt"></span>
                  </div>
                  <div className="iconbox-content">
                    <p>
                      <a href="#" className="hover-text">
                        1379 Shoreline Parkway, United States
                      </a>
                    </p>
                  </div>
                </div>

                <div className="iconbox clearfix style3">
                  <div className="iconbox-icon">
                    <span className="icon_mobile"></span>
                  </div>
                  <div className="iconbox-content">
                    <p>
                      <a href="#" className="hover-text">
                        +100 2521-888-39151
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover-text">
                        +800 718-999-3939
                      </a>
                    </p>
                  </div>
                </div>

                <div className="iconbox clearfix style3">
                  <div className="iconbox-icon">
                    <span className="icon_mail_alt"></span>
                  </div>
                  <div className="iconbox-content">
                    <p>
                      <a href="#" className="hover-text">
                        contact@automov.com
                      </a>
                    </p>
                    <p>
                      <a href="#" className="hover-text">
                        automov@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget widget-last-news">
              <h4 className="widget-title"> LATEST NEWS </h4>
              <ul className="list-last-news">
                <li className="  clearfix">
                  <div className=" img">
                    <img
                      src="/assets/images/last-news-1-ft.png"
                      alt="last-news"
                    />
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h6 className="heading">
                      <a href="#" className="hover-text">
                        Sustainable Construction
                      </a>
                    </h6>
                    <p>
                      <a href="#" className="hover-text">
                        August 08, 2018
                      </a>
                    </p>
                  </div>
                </li>

                <li className="  clearfix">
                  <div className=" img">
                    <img
                      src="/assets/images/last-news-2-ft.png"
                      alt="last-news"
                    />
                    <div className="overlay"></div>
                  </div>
                  <div className=" content">
                    <h6 className="heading">
                      <a href="#" className="hover-text">
                        Storefront Installations
                      </a>
                    </h6>
                    <p>
                      <a href="#" className="hover-text">
                        August 08, 2018
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flat-spacer clearfix"
            data-desktop="60"
            data-mobile="60"
            data-smobile="60"
          ></div>
          <div className="bottom style3 clearfix">
            <div className="flat-copy-right">
              <p>
                © Automov - Design by @Digital Perception. All Rights Reserved.
              </p>
            </div>
            <div className="flat-socails text-right">
              <ul>
                <li>
                  <Link to="#">
                    <span className="fa fa-youtube"></span>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <span className="social_googleplus"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="social_pinterest"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="social_twitter "></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" social_facebook "></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <span className="gotop">
        <img src="/assets/images/goto-automov.png" alt="AutoMov" />
      </span>
    </div>
  );
};

export default Footer;
