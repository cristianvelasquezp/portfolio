import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Cristian Velasquez</h3>
            <p className="job">
              International Web Developer based in Chicago. Over 8 years of experience..
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
