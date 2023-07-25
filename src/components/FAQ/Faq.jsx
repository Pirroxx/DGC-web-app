import React from "react";
import "./Faq.css";
import BasicAccordion from "../Accordion";

const FAQs = () => {
  // const handleCollapse = (event) => {
  //   const collapsible = event.target;
  //   const content = collapsible.nextElementSibling;

  //   collapsible.classList.toggle("active");

  //   if (content.style.maxHeight) {
  //     content.style.maxHeight = null;
  //     content.style.visibility = "hidden";
  //     content.style.margin = "0 2%";
  //   } else {
  //     content.style.maxHeight = content.scrollHeight + "px";
  //     content.style.visibility = "visible";
  //     content.style.margin = "12px 2%";
  //   }
  // };

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
