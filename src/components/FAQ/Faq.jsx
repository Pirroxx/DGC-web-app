import React from "react";
import "./Faq.css";
import BasicAccordion from "../Accordion";

const FAQs = () => {
  return (
    <div className="faq-wrapper">
      <section id="FAQ" className="main-section">
        <div id="faqs" className="faq-container">
          <h2 className="line-heading">Frequently Asked Questions</h2>
          <h1 className="large-heading">
            Some of the most common questions asked about Digital Generation
            Club.
          </h1>
        </div>
        <BasicAccordion />
        <div className="myFooter">
          <p>
            Visit Us On{" "}
            <a
              href="https://twitter.com/DGClub_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
