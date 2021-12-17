import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">About me</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                completar
              </p>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>
    </>
  );
};

export default About;
