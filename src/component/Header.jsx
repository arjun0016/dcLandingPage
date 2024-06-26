import React from "react";
import "../styles/header.css";
import printer0 from "../assets/printers1.png";
import printer1 from "../assets/printers2.png";
import printer2 from "../assets/KUDI.png";
import hp from "../assets/hp.avif";
import dc from "../assets/dc.png";
import gif from "../assets/specialoffer.gif";
import OfferSlide from "./OfferSlide";

const Header = () => {
  return (
    <>
      <div className="gray-bg">
        <div className="printer-img child1">
          <img className="logo" src={dc} alt="" />

          <div className="bg-printer">
            <img className="printer-image img1" src={printer0} alt="" />
            <img className="printer-image img2" src={printer2} alt="" />
          </div>
          <h3 className="offer-price">Monthly expense <br /> Konica printer AED 100</h3>

            {/* <img className="printer-img" src={hp} alt="" /> */}

          <h3 className="offer-price price2">Monthly expense <br /> Inkjet printer AED 250</h3>

        </div>

        <div className="printer-content child2">
          <img className="offer-gif" src={gif} alt="" />
          <div className="offer-flex">
            <h1>
              <span className="weight">Save 60% On</span>
              <br />
              Total Monthly Cost
            </h1>
          </div>
          {/* <OfferSlide/> */}
          <h2 className="offer-details">
            Are you currently shelling out AED 250 for toners, you're aiming to
            slash that expense in half down to AED 100.
          </h2>
          <p>
            Experience the pinnacle of cost-effective efficiency with our
            exclusive printer rental offer, which includes not only the printer
            but also toner, spare parts, consumables, and full maintenance
            services, all for the incredible price of 100 AED. Elevate your
            workplace dynamics with our printers' dependability and performance,
            guaranteeing that every document is generated with precision and
            clarity while staying within your budget.
          </p>
        </div>

        <div className="printer-img  child3">
          <div className="bg-printer">
            <img className="printer-img" src={hp} alt="" />
          </div>
          <h3 className="offer-price">Monthly expense <br /> Inkjet printer AED 250</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
