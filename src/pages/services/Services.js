import React from "react";

import { useSelector } from "react-redux";
const Services = () => {
  const service = useSelector((state) => state.ServiceReducer);

  console.log("data come", service);
  return (
    <div>
      <section className="page-title  v3 clearfix parallax  parallax5">
        <div className="overlay"></div>
        <div className="container">
          <div className="wrap-page-title">
            <div className="breakcrums text-center v2">
              <ul>
                <li>
                  <a href="#" className="hover-text">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    PAGES
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    OUR SERVICES
                  </a>
                </li>
              </ul>
            </div>

            <div className="page-title-heading text-center v2">
              <h1>
                <a href="#" className="hover-text">
                  OUR SERVICES
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrap service-fullwidth-page">
        <div
          className="flat-spacer clearfix"
          data-desktop="98"
          data-mobile="60"
          data-smobile="60"
        ></div>
        <div className="flat-about pd-bottom-30 clearfix">
          <div className="container">
            <div className="img one-of-two pd-right-15 mg-top-5">
              <img
                src="/assets/images/services/our-services-fullwidth/about-service.png"
                alt="AutoMov"
              />
            </div>
            <div className="content one-of-two pd-left-15 ">
              <h5 className="title">
                In Addition to our commitment towards excellence our advantages
                are :
              </h5>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className=" video-list list clearfix">
                <ul className="list">
                  <li>
                    <a href="#">24 -Hours Emergency Services</a>
                  </li>
                  <li>
                    <a href="#">Uniformed, Licensed mechanic</a>
                  </li>
                  <li>
                    <a href="#">No Travel Charges</a>
                  </li>
                  <li>
                    <a href="#">Licensed and Insured</a>
                  </li>
                  <li>
                    <a href="#">Free Estimates</a>
                  </li>
                </ul>

                <ul className="list">
                  <li>
                    <a href="#">Management and supervision</a>
                  </li>
                  <li>
                    <a href="#">Quality construction</a>
                  </li>
                  <li>
                    <a href="#">Absolute safety</a>
                  </li>
                  <li>
                    <a href="#">Ensure the progress</a>
                  </li>
                  <li>
                    <a href="#">Timely supply</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="flat-our-services style2">
          <div
            className="flat-spacer clearfix"
            data-desktop="88"
            data-mobile="30"
            data-smobile="30"
          ></div>
          <div className="container">
            <div className="flat-title v4">
              <h2>OUR SERVICES</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
              <div
                className="flat-spacer clearfix"
                data-desktop="78"
                data-mobile="35"
                data-smobile="35"
              ></div>
            </div>
            <div
              className="flat-carousel-not-numb"
              data-column="4"
              data-column2="2"
              data-column3="1"
              data-gap="1"
              data-dots="false"
              data-loop="true"
            >
              <div className="flat-imgbox clearfix style3 owl-carousel">
                {service.map((item) => (
                  <div key={item.id} className="imgbox style3">
                    <div className="imgbox-img">
                      <img src={item.img} alt="automov" />
                      <div className="overlay">
                        <a href="#" className="hover-text">
                          <span className="arrow_right"></span>
                        </a>
                      </div>
                    </div>
                    <div className="imgbox-content text-center">
                      <h4>
                        {" "}
                        <a href="#">{item.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              {/* flat-imgbox  */}
            </div>
            <div
              className="flat-spacer clearfix"
              data-desktop="100"
              data-mobile="0"
              data-smobile="0"
            ></div>
          </div>
          {/* container */}
        </section>
        {/* flat-our-services  */}

        <section className="flat-countdown style2">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="flat-spacer clearfix"
              data-desktop="105"
              data-mobile="60"
              data-smobile="60"
            ></div>
            <div className="flat-counter clearfix">
              <div className="counter one-of-four ">
                <div className="counter-numb clearfix">
                  <div className="icon">
                    <img
                      src="/assets/images/home2/icon-count-1.png"
                      alt="AutoMov"
                    />
                  </div>
                  <div className="text-numb">
                    <span
                      className="numb"
                      data-from="0"
                      data-to="320"
                      data-speed="2000"
                      data-inviewport="yes"
                    >
                      320
                    </span>
                  </div>
                </div>
                <div className="counter-text text-center">
                  <h5>EXPERIENCED TECHNICIALS</h5>
                </div>
              </div>

              <div className="counter one-of-four ">
                <div className="counter-numb clearfix">
                  <div className="icon">
                    <img
                      src="/assets/images/home2/icon-count-2.png"
                      alt="AutoMov"
                    />
                  </div>
                  <div className="text-numb">
                    <span
                      className="numb"
                      data-from="0"
                      data-to="9580"
                      data-speed="2000"
                      data-inviewport="yes"
                    >
                      9580
                    </span>
                  </div>
                </div>
                <div className="counter-text text-center">
                  <h5>TRANSPARENCY MATTERS</h5>
                </div>
              </div>

              <div className="counter one-of-four ">
                <div className="counter-numb clearfix">
                  <div className="icon">
                    <img
                      src="/assets/images/home2/icon-count-3.png"
                      alt="AutoMov"
                    />
                  </div>
                  <div className="text-numb">
                    <span
                      className="numb"
                      data-from="0"
                      data-to="100"
                      data-speed="2000"
                      data-inviewport="yes"
                    >
                      100
                    </span>
                  </div>
                </div>
                <div className="counter-text text-center">
                  <h5>COMPLETED PROJECTS</h5>
                </div>
              </div>

              <div className="counter one-of-four plus ">
                <div className="counter-numb clearfix">
                  <div className="icon">
                    <img
                      src="/assets/images/home2/icon-count-4.png"
                      alt="AutoMov"
                    />
                  </div>
                  <div className="text-numb">
                    <span
                      className="numb"
                      data-from="0"
                      data-to="140"
                      data-speed="2000"
                      data-inviewport="yes"
                    >
                      140
                    </span>
                  </div>
                </div>
                <div className="counter-text text-center">
                  <h5>PROFESSIONAL AWARDS</h5>
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
        </section>

        <section className="flat-price-list">
          <div
            className="flat-spacer clearfix"
            data-desktop="88"
            data-mobile="80"
            data-smobile="80"
          ></div>
          <div className="container">
            <div className="flat-title v4">
              <h2>PRICE LIST</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
              <div
                className="flat-spacer clearfix"
                data-desktop="78"
                data-mobile="40"
                data-smobile="40"
              ></div>
            </div>

            <div
              className="flat-carousel-not-numb"
              data-column="4"
              data-column2="2"
              data-column3="1"
              data-gap="1"
              data-dots="false"
              data-loop="true"
            >
              <div className="list-price fix-float-box owl-carousel">
                <div className="price-item bg-f6f6f6">
                  <div className="title-wrap">
                    <div className="img">
                      <img
                        src="/assets/images/services/our-services-fullwidth/price-list-1.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                    </div>
                    <h3 className="title">
                      <a href="#">BASIC</a>
                    </h3>
                  </div>
                  <div className="price-wrap">
                    <p className="price">$29</p>
                    <p className="date">Mo</p>
                  </div>
                  <p className="text">
                    Outside wash Under body wash Rust inhibitor Whell cleaming
                  </p>
                  <div className="wrap-btn text-center">
                    <a href="#" className="flat-button bg-price">
                      GET STARTED
                    </a>
                  </div>
                </div>

                <div className="price-item bg-f6f6f6">
                  <div className="title-wrap">
                    <div className="img">
                      <img
                        src="/assets/images/services/our-services-fullwidth/price-list-2.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                    </div>
                    <h3 className="title">
                      <a href="#">PREMIUM</a>
                    </h3>
                  </div>
                  <div className="price-wrap">
                    <p className="price">$39</p>
                    <p className="date">Mo</p>
                  </div>
                  <p className="text">
                    Outside wash Under body wash Rust inhibitor Whell cleaming
                    Body polish
                  </p>
                  <div className="wrap-btn text-center">
                    <a href="#" className="flat-button bg-price">
                      GET STARTED
                    </a>
                  </div>
                </div>

                <div className="price-item bg-f6f6f6">
                  <div className="title-wrap">
                    <div className="img">
                      <img
                        src="/assets/images/services/our-services-fullwidth/price-list-3.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                    </div>
                    <h3 className="title">
                      <a href="#">DIAMOND</a>
                    </h3>
                  </div>
                  <div className="price-wrap">
                    <p className="price">$49</p>
                    <p className="date">Mo</p>
                  </div>
                  <p className="text">
                    Outside wash Under body wash Rust inhibitor Whell cleaming
                    Body polish Wheel ballancing
                  </p>
                  <div className="wrap-btn text-center">
                    <a href="#" className="flat-button bg-price">
                      GET STARTED
                    </a>
                  </div>
                </div>

                <div className="price-item bg-f6f6f6">
                  <div className="title-wrap">
                    <div className="img">
                      <img
                        src="/assets/images/services/our-services-fullwidth/price-list-4.png"
                        alt="AutoMov"
                      />
                      <div className="overlay"></div>
                    </div>
                    <h3 className="title">
                      <a href="#">EXTEND</a>
                    </h3>
                  </div>
                  <div className="price-wrap">
                    <p className="price">$59</p>
                    <p className="date">Mo</p>
                  </div>
                  <p className="text">
                    Outside wash Under body wash Rust inhibitor Whell cleaming
                    Body polish Wheel ballancing Minor works
                  </p>
                  <div className="wrap-btn text-center">
                    <a href="#" className="flat-button bg-price">
                      GET STARTED
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
