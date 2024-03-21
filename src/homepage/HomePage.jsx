import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import img from "../assets/image.png";
import box1 from "../assets/imgFeatures/box1.png";
import box2 from "../assets/imgFeatures/box2.png";
import box3 from "../assets/imgFeatures/box3.png";
import box4 from "../assets/imgFeatures/box4.png";
import imgtest from "../assets/imgtest.png";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in");
  };
  return (
    <div className="container">
      <div className="area-contents">
        <img className="image" src={img} alt="" />
        <span className="round"></span>
        <span className="height"></span>
        <button onClick={handleClick} className="btn">
          Sign In
        </button>
        <div className="contents">
          <div className="item">
            <h1>Save your data storage here.</h1>
            <h4>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </h4>
            <button>
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="title">
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="box1">
          <span className="session1"></span>
          <div className="elip1"></div>
          <div className="elipn"></div>
          <img className="image1" src={box1} alt="" />
          <h2 className="title1">Search Data</h2>
          <span className="text1">
            Don’t worry if your data is very large, the Data Warehoue provides a
            search engine, which is useful for making it easier to find data
            effectively saving time.
          </span>
          <div className="group">
            <div className="group-items">
              <div className="items">
                <span className="deg"></span>
                <span className="poly"></span>
              </div>
              <span className="btn-learn">Learn more </span>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="elip3"></div>

          <span className="session3"></span>
          <img className="image3" src={box3} alt="" />
          <h2 className="title3">Print Out</h2>
          <span className="text3">
            Print out service gives you convenience if someday you need print
            data, just edit it all and just print it.
          </span>
          <div className="group">
            <div className="group-items">
              <div className="items">
                <span className="deg"></span>
                <span className="poly"></span>
              </div>
              <span className="btn-learn">Learn more </span>
            </div>
          </div>
        </div>
        <div className="box2">
          <span className="session2"></span>
          <img className="image2" src={box2} alt="" />
          <div className="elip2"></div>
          <h2 className="title2">24 Hours Access</h2>
          <span className="text2">
            Access is given 24 hours a full morning to night and meet again in
            the morning, giving you comfort when you need data when urgent.
          </span>
          <div className="group2">
            <div className="group-items2">
              <div className="items2">
                <span className="deg"></span>
                <span className="poly"></span>
              </div>
              <span className="btn-learn">Learn more </span>
            </div>
          </div>
        </div>
        <div className="box4">
          <span className="session4"></span>
          <img className="image4" src={box4} alt="" />
          <div className="elip4"></div>
          <h2 className="title4">Security Code</h2>
          <span className="text4">
            Data Security is one of our best facilities. Allows for your files
            to be safer. The file can be secured with a code or password that
            you created, so only you can open the file.
          </span>
          <div className="group4">
            <div className="group-items4">
              <div className="items4">
                <span className="deg"></span>
                <span className="poly"></span>
              </div>
              <span className="btn-learn">Learn more </span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="item-right">
          <span className="degright"></span>
          <span className="polyright"></span>
        </div>
        <div className="item-left">
          <span className="degleft"></span>
          <span className="polyleft"></span>
        </div>
        <p className="title">Testimonials</p>
        <div className="slide">
          <img src={imgtest} alt="" />
          <div className="portfo">
            <div className="lio">
              <p>John Fang</p>
              <p>wordfaang.com</p>
            </div>
            <p className="content-slide">
              Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
              enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
              laoreet nulla.
            </p>
          </div>
        </div>
        <div className="paginate">
          <span className="p1"></span>
          <span className="p2"></span>
          <span className="p3"></span>
          <span className="p4"></span>
        </div>
      </div>
      <div className="footer">
        <span className="footer-logo-pur"></span>
        <span className="footer-logo-pink"></span>
        <p className="nav-data">DataWarehouse</p>
        <p className="p-address">
          Warehouse Society, 234 Bahagia Ave Street PRBW 29281
        </p>
        <p className="p-info">info@warehouse.project 1-232-3434 (Main)</p>
        <p className="p-copyright">
          © Datawarehouse™, 2020. All rights reserved. Company Registration
          Number: 21479524.
        </p>
        <div className="about">
          <p className="about-title">About</p>
          <p className="about-text">Profile Features Careers DW News</p>
        </div>
        <div className="help">
          <p className="help-title">Help</p>
          <p className="help-text">Support Sign up Guide Reports Q&A</p>
        </div>
        <div className="social">
          <p className="social-text">Social Media</p>
          <span className="sm1"></span>
          <span className="sm2"></span>
          <span className="sm3"></span>
        </div>
        <div className="contact">
          <div className="contact-elip">
            <span className="tag42"></span>
            <span className="tag43"></span>
            <span className="dot1"></span>
            <span className="dot2"></span>
            <span className="dot3"></span>
          </div>
          <span className="contact-logo"></span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
