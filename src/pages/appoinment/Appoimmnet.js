import React, { useState } from "react";
import './appoinment.css';
const Appoinment = () => {
  const [appoinment, setAppoinment] = useState({
    vehicleYear: "",
    vehicleMake: "",
    vehicleMileage: "",
    appoinmentDate: "",
    preferTimeFrame: "",
    airConditioning: false,
    wheelAlignment: false,
    OilLubFilters: false,
    heatingCooling: false,
    brakeRepair: false,
    steeringSuspension: false,
    engineDiagnostic: false,
    transmissionRepair: false,
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",

  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {

    if (e.target.type === "checkbox") {
      setAppoinment({ ...appoinment, [e.target.name]: e.target.checked });
    }
    else {
      setAppoinment({ ...appoinment, [e.target.name]: e.target.value });
    }
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
                    APPOINTMENT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-text">
                    BOOK APPOINTMENT
                  </a>
                </li>
              </ul>
            </div>

            <div className="page-title-heading text-center v2">
              <h1>
                <a href="#" className="hover-text">
                  APPOINTMENT
                </a>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <article className="content-wrap book-calendar-page">
          <div className="flat-row bg-f0f0f0">
            <div className="container">
              <div className="sub-col clearfix">
                <div className="one-of-three">
                  <div className="vehicle-mileage-wrap pd-left-15">
                    <div className="flat-title v9">
                      <h5>VEHICLE YEAR</h5>
                    </div>
                    <div className="wrap-input">
                      <input
                        type="text"
                        className="form-control"
                        name="vehicleYear"
                        placeholder="2010"
                        value={appoinment.vehicleYear}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="one-of-three">
                  <div className="vehicle-mileage-wrap pd-left-15">
                    <div className="flat-title v9">
                      <h5>VEHICLE MAKE</h5>
                    </div>
                    <div className="wrap-input">
                      <input
                        type="text"
                        name="vehicleMake"
                        placeholder="Vehicle Make"
                        onChange={(e) => handleChange(e)}
                        value={appoinment.vehicleMake}
                      />
                    </div>
                  </div>
                </div>

                <div className="one-of-three">
                  <div className="vehicle-mileage-wrap pd-left-15">
                    <div className="flat-title v9">
                      <h5>VEHICLE MILEAGE</h5>
                    </div>
                    <div className="wrap-input">
                      <input
                        type="text"
                        name="vehicleMileage"
                        placeholder="Vehicle mileaga"
                        onChange={(e) => handleChange(e)}
                        value={appoinment.vehicleMileage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flat-row">
            <div className="container">
              <div
                className="flat-spacer clearfix"
                data-desktop="70"
                data-mobile="70"
                data-smobile="70"
              ></div>
              <div className="sub-col clearfix">
                <div className="one-of-two pd-right-15">
                  <div className="appointment-date-wrap">
                    <div className="flat-title v9">
                      <h5>APPOINTMENT DATE</h5>
                    </div>
                    <div className="wrap-input">
                      <input
                        type="text"
                        name="appoinmentDate"
                        placeholder="Tuesday, 2 July 2020 "
                        onChange={(e) => handleChange(e)}
                        value={appoinment.appoinmentDate}
                      />
                    </div>
                  </div>

                  <div className="preffered-time-wrap">
                    <div className="flat-title v9">
                      <h5>PREFFERED TIME FRAME</h5>
                    </div>
                    <div className="wrap-input">
                      <input
                        type="text"
                        name="preferTimeFrame"
                        placeholder="11:00 Am - 12:00 Pm"
                        onChange={(e) => handleChange(e)}
                        value={appoinment.preferTimeFrame}
                      />
                    </div>
                  </div>
                </div>
                <div className="one-of-two pd-left-15">
                  <div className="preffered-time-wrap">
                    <div className="flat-title v9">
                      <h5>SELECT SERVICES NEEDED</h5>
                    </div>
                    <div className="wrap-checked-all">
                      <div >
                        <label className="containerForCheckbox">Air-Conditioning
                      <input type="checkbox"
                            name="airConditioning"
                            checked={appoinment.airConditioning}
                            onChange={(e) => handleChange(e)}

                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>

                      <label className="containerForCheckbox">wheel-Alignment
                      <input type="checkbox"
                          name="wheelAlignment"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.wheelAlignment}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Oil-LubFilters
                      <input type="checkbox"
                          name="OilLubFilters"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.OilLubFilters}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Heating-Cooling
                      <input type="checkbox"
                          name="heatingCooling"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.heatingCooling}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Brake-Repair
                      <input type="checkbox"
                          name="brakeRepair"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.brakeRepair}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Steering-Suspension
                      <input type="checkbox"
                          name="steeringSuspension"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.steeringSuspension}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Engine-Diagnostic
                      <input type="checkbox"
                          name="engineDiagnostic"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.engineDiagnostic}

                        />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerForCheckbox">Transmission-Repair
                      <input type="checkbox"
                          name="transmissionRepair"
                          onChange={(e) => handleChange(e)}
                          checked={appoinment.transmissionRepair}

                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

              </div>
              <div
                className="flat-spacer clearfix"
                data-desktop="32"
                data-mobile="32"
                data-smobile="32"
              ></div>
            </div>
          </div>

          <div className="flat-row">
            <div className="container">
              <div className="contact-details-wrap flat-border-top">
                <div
                  className="flat-spacer clearfix"
                  data-desktop="34"
                  data-mobile="32"
                  data-smobile="32"
                ></div>
                <div className="flat-title v9">
                  <h5>CONTACT DETAILS</h5>
                </div>

                <div className="wrap-input-all clearfix">
                  <div className="wrap-input one-of-two pd-right-10 name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => handleChange(e)}
                      value={appoinment.name}
                    />
                  </div>
                  <div className="wrap-input one-of-two pd-left-10 phone">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      onChange={(e) => handleChange(e)}
                      value={appoinment.phone}
                    />
                  </div>
                  <div className="wrap-input one-of-two  pd-right-10 email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => handleChange(e)}
                      value={appoinment.email}
                    />
                  </div>
                  <div className="wrap-input one-of-two pd-left-10 subject">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={(e) => handleChange(e)}
                      value={appoinment.subject}
                    />
                  </div>
                </div>
                <div className="wrap-textarea">
                  <textarea
                    placeholder="Messages"
                    name="message"
                    onChange={(e) => handleChange(e)}
                    value={appoinment.message}
                  ></textarea>
                </div>
                <div className="wrap-btn">
                  <button type="submit" className="btn-effect btn-submit v2">
                    Submit now
                    </button>
                </div>

              </div>
              <div
                className="flat-spacer clearfix"
                data-desktop="80"
                data-mobile="80"
                data-smobile="80"
              ></div>
            </div>
          </div>

        </article>
      </form>
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

export default Appoinment;
