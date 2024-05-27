import React from "react";
import "../styles/header.css";
import printer from "../assets/printers.png";
import printer2 from "../assets/konica22.png";
import printer3 from "../assets/hp.webp";
import dc from "../assets/dc.png";
import gif from "../assets/specialoffer.gif";

const Header = () => {
  return (
    <>
      <div className="gray-bg">
        <div className="printer-img child1">
          <img src={dc} alt="" />

          <div className="bg-printer">
            <img className="printer-img" src={printer} alt="" />
          </div>
          <h3 className="offer-price">Konica printer AED 100</h3>
        </div>

        <div className="printer-content child2">
          <img className="offer-gif" src={gif} alt="" />
          <div className="offer-flex">
            <h1>
              <span className="weight">Save 75% On</span>
              <br />
              Total Monthly Cost
            </h1>
          </div>
          <h2 className="offer-details">
            Are you currently shelling out AED 200 for toners, you're aiming to
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
            <img className="printer-img" src={printer3} alt="" />
          </div>
          <h3 className="offer-price">Inkjet printer AED 250</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
