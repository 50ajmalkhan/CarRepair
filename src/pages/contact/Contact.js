import React, { useState } from "react";
import useForm from "../../utils/useForm";

const Contact = () => {
  //distructuring
  const { handleSubmit } = useForm;
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
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
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="page-title-heading text-center v2">
              <h1>
                <a href="#" className="hover-text">
                  Contact Us
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="flat-map style3"></div>

      <div className="content-wrap contact-v1-page">
        <div
          className="flat-spacer clearfix"
          data-desktop="100"
          data-mobile="60"
          data-smobile="60"
        ></div>
        <div className="container clearfix">
          <div className="flat-contact-us contact-v1-page">
            <div className="flat-title">
              <h2>CONTACT US</h2>
            </div>
            <div className="flat-iconbox style2 v2 clearfix">
              <div className="iconbox v2 style2  ">
                <div className="iconbox-icon">
                  <span className="icon_pin_alt"></span>
                </div>
                <div className="iconbox-content">
                  <a href="#" className="hover-text">
                    <p>1379 Shoreline Parkway, United States</p>
                  </a>
                </div>
              </div>

              <div className="iconbox v2 style2  ">
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

              <div className="iconbox v2 style2  ">
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
          <div className="flat-form-contact contact-v1-page">
            <div className="flat-title">
              <h2>GET IN TOUCH</h2>
              <p>
                Get in touch with the professionals at AutoService Group for
                quality services at competitive prices.
              </p>
            </div>
            <div
              className="flat-spacer clearfix"
              data-desktop="40"
              data-mobile="40"
              data-smobile="40"
            ></div>
            <form onSubmit={handleSubmit}>
              <div className="wrap-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required=""
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="wrap-input">
                <input
                  type="email"
                  name="email"
                  required=""
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="wrap-input">
                <input
                  type="text"
                  name="subject"
                  required=""
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="wrap-textarea">
                <textarea
                  name="message"
                  required=""
                  placeholder="Messager"
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="wrap-btn">
                <button className="btn-effect btn-message" type="submit">
                  Send messages
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="flat-spacer clearfix"
          data-desktop="100"
          data-mobile="60"
          data-smobile="60"
        ></div>
      </div>

      <section className="flat-contact v1 clearfix">
        <div className="container">
          <div className="wrap-text">
            <h3 className="title">
              <a href="#">
                Have you question or need any help for work consulant?
              </a>
            </h3>
          </div>
          <div className="wrap-btn text-right">
            <a href="#" className="flat-button btn-contact bg-contact">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
