import React from "react";
import { Link } from "react-router-dom";
const title = "About ShopCart";
const desc =
  "This is a brief and helpful set of links about this web page.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "Nasir Bagh road, Peshawar",
  },
  {
    iconName: "icofont-phone",
    text: "+923435873184",
  },
  {
    iconName: "icofont-envelope",
    text: "omairyahya55@gmail.com",
  },
];

const socialList = [

  // {
  //   iconName: "icofont-linkedin",
  //   siteLink: "https://www.linkedin.com/in/omair-yahya55/",
  //   className: "linkedin",
  // },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: "icofont-linkedin",
    desc: (
      <p>
        Let's Connect <a href="https://www.linkedin.com/in/omair-yahya55/">@Omair Greetings!</a> On linkdin
      </p>
    ),
  },
  {
    iconName: "icofont-instagram",
    desc: (
      <p>
        OmairKhan <a href="https://www.instagram.com/omairkhan_55/?hl=en">@omair Hey!</a>
      </p>
    ),
  },
];

const footerbottomList = [


  {
    text: "proud parents",
    link: "#",
  },
  
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top bg-white  padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 style={{ color: "white" }}>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            <a href={val.siteLink} className={val.className}>
                              {val.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, i) => (
                          <li key={i}>
                            <a href="#" className={val.className}>
                              <i className={val.iconName}>{val.text}</i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 style={{ color: "white" }}>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 style={{ color: "white" }}>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            <a href="#">{val.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 style={{ color: "white" }}>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((val, i) => (
                          <li key={i}>
                            <i className={val.iconName}></i>
                            <a href="#">{val.desc}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
                            {/* Footer bottom  */}

      <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p> 2023 <Link to="/">Shop Cart</Link>Desined By <a href="https://myprof-five.vercel.app/" target="_blank">Omair Yahya</a></p>
                <div className="footer-bottom-list">
                    {
                        footerbottomList.map((val, i)=>(
                            <a href="#" key={i} >{val.text}</a>
                        ))
                    }
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
