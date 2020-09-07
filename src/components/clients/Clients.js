import React from "react";
const Clients = () => {
  return (
    <div className="flat-client">
      <div className="container">
        <div
          className="flat-spacer clearfix"
          data-desktop="80"
          data-mobile="60"
          data-smobile="60"
        ></div>
        <div
          className="flat-carousel-not-numb"
          data-auto="true"
          data-column="5"
          data-column2="3"
          data-column3="2"
          data-gap=""
          data-dots="false"
          data-nav="false"
          data-loop="true"
        >
          <div className="client carousel-service owl-carousel owl-theme owl-loaded">
            <div className="client-item">
              <a href="#">
                <img src="/assets/images/home1/client-1.png" alt="AutoMov" />
                <img
                  src="assets/images/home1/client-1-hover.png"
                  alt="AutoMov"
                />
              </a>
            </div>
            <div className="client-item">
              <a href="#">
                <img src="/assets/images/home1/client-2.png" alt="AutoMov" />
                <img
                  src="/assets/images/home1/client-2-hover.png"
                  alt="AutoMov"
                />
              </a>
            </div>
            <div className="client-item">
              <a href="#">
                <img src="assets/images/home1/client-3.png" alt="AutoMov" />
                <img src="images/home1/client-3-hover.png" alt="AutoMov" />
              </a>
            </div>
            <div className="client-item">
              <a href="#">
                <img src="/assets/images/home1/client-4.png" alt="AutoMov" />
                <img
                  src="/assets/images/home1/client-4-hover.png"
                  alt="AutoMov"
                />
              </a>
            </div>
            <div className="client-item">
              <a href="#">
                <img src="/assets/images/home1/client-5.png" alt="AutoMov" />
                <img
                  src="/assets/images/home1/client-5-hover.png"
                  alt="AutoMov"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="flat-spacer clearfix"
          data-desktop="80"
          data-mobile="60"
          data-smobile="60"
        ></div>
      </div>
    </div>
  );
};

export default Clients;
