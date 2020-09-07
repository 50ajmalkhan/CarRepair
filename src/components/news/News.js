import React from "react";
const News = () => {
  return (
    <section className="flat-news">
      <div className="container">
        <div className="news-wrap">
          <div
            className="flat-spacer clearfix"
            data-desktop="100"
            data-mobile="60"
            data-smobile="60"
          ></div>
          <div className="flat-title text-center">
            <h2>UPDATE NEWS</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>
          <div
            className="flat-spacer clearfix"
            data-desktop="66"
            data-mobile="40"
            data-smobile="40"
          ></div>
          <div className="flat-post clearfix">
            <div className="post one-of-one blog-list-v2">
              <div className="border-post clearfix fix-float-box">
                <div className="container-post-img">
                  <div className="post-img">
                    <div className="overlay">
                      <a href="#">
                        <span className="arrow_right hover-text"></span>
                      </a>
                    </div>
                    <img
                      src="/assets/images/blog/blog-list-v2/post-1.png"
                      alt="AutoMov"
                    />
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <a href="#">Useful tips for your Car</a>
                  </h3>
                  <div className="meta">
                    <ul>
                      <li className="user">
                        <a href="#" className="hover-text">
                          Admin
                        </a>
                      </li>
                      <li className="comment">
                        <a href="#" className="hover-text">
                          25 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    ed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore
                  </p>
                  <div className="wrap-btn">
                    <a
                      href="#"
                      className="flat-button btn-read-more bg-read-more"
                    >
                      {" "}
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="post one-of-one blog-list-v2">
              <div className="border-post clearfix fix-float-box">
                <div className="container-post-img">
                  <div className="post-img">
                    <div className="overlay">
                      <a href="#">
                        <span className="arrow_right hover-text"></span>
                      </a>
                    </div>
                    <img
                      src="/assets/images/blog/blog-list-v2/post-2.png"
                      alt="AutoMov"
                    />
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <a href="#">We have Moved to our new Garage</a>
                  </h3>
                  <div className="meta">
                    <ul>
                      <li className="user">
                        <a href="#" className="hover-text">
                          Admin
                        </a>
                      </li>
                      <li className="comment">
                        <a href="#" className="hover-text">
                          25 Comments
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    ed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore
                  </p>
                  <div className="wrap-btn">
                    <a
                      href="#"
                      className="flat-button btn-read-more bg-read-more"
                    >
                      {" "}
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
