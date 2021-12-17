import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/caribbeanchic.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                {/* END EXTRA */}

                <h3 className="title">
                  My Caribbean Chic
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://github.com/cristianvelasquezp/mycaribbeanchic">
                    <span>Repository</span>
                    <img
                        className="svg"
                        src={`/assets/img/svg/social/github.svg`}
                        alt="social"
                    ></img>
                  </a>
                  <a href="https://www.mycaribbeanchic.com">
                    <span>Web Site</span>
                    <img
                        className="svg"
                        src={`/assets/img/svg/social/globe.svg`}
                        alt="Web Site"
                    ></img>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/2.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Brook Kennedy</a>
                    <span>22 March 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  Sony announced two new full frame cameras with zero fanfare
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  );
};

export default News;
