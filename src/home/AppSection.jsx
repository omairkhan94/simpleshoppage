import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign Up Free";
const title = "Shop from anywhere";
const desc =
  "Mobile application will be launch soon.";

const AppSection = () => {
  return (
    <div className="apps-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="section-wrapper" style={{ flexDirection: 'row', alignItems: 'center' }}>
    <ul className="lab-ul">
     
      <li>
        <a href="#">
          <img src="/src/assets/images/app/02.jpg" alt="" />
        </a>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default AppSection;
