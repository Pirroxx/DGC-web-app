import React from "react";
import "./Faq.css";

const FAQs = () => {
  const handleCollapse = (event) => {
    const collapsible = event.target;
    const content = collapsible.nextElementSibling;

    collapsible.classList.toggle("active");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.visibility = "hidden";
      content.style.margin = "0 2%";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.visibility = "visible";
      content.style.margin = "12px 2%";
    }
  }; 

  return (
    <div className="faq-wrapper">
      <section id="FAQ" className="main-section">
        <div id="faqs" className="faq-container">
          <h2 className="line-heading">Frequently Asked Questions</h2>
          <h1 className="large-heading">
            Some of the most common questions asked about Digital Generation
            Club.
          </h1>
          <div id="faqSection" className="fullwidth-container">
            <div>
              <button className="collapsible" onClick={handleCollapse}>
                What Is DGC?
              </button>
              <div className="faq-content">
                <p>
                  The Digital Generation Club is an exclusive club built on the
                  Ethereum blockchain for Web3 enthusiasts to connect, share
                  ideas, gain knowledge, make informed decisions and build
                  projects.
                </p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                What Is the mint date for DGC?
              </button>
              <div className="faq-content">
                <p>
                  The mint date will be announced to whitelisted members
                  beforehand.
                </p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                What is the total supply of NFTs?
              </button>
              <div className="faq-content">
                <p>TBA...</p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                Will there be a second mint?
              </button>
              <div className="faq-content">
                <p>
                  No. To secure an exclusivity to the club, there will only be
                  one mint which will only be available to whitelisted members.
                </p>
              </div>
            </div>
            <div>
              <button className="collapsible" onClick={handleCollapse}>
                How do memberships work?
              </button>
              <div className="faq-content">
                <p>
                  Here is four levels of membership; Silver members, Gold
                  members, Diamond members and Diamond+ members. Every
                  membership can be achieved with the initial bought package
                  except the Diamond+, which you can earn through hard work and
                  value you bring to the community.
                </p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                Why do I have to take an interview?
              </button>
              <div className="faq-content">
                <p>
                  To ensure that our members match our values and mission, we
                  will be conducting a number of interviews for whitelist spots.
                  We will make sure that the environment we build on the
                  exclusive discord is beneficial to every member of the club.
                </p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                How do I access the exclusive discord?
              </button>
              <div className="faq-content">
                <p>
                  We have a whitelisting process in which you will apply, be
                  interviewed and finally if you are accepted you will be told
                  by the DGC staff, at the same time you will be on the
                  whitelisted member list, which is publicly available on the
                  whitelisting stage, any private information will stay private
                  and you will be announced as a new member along with the
                  reason on why.
                </p>
              </div>
              <button className="collapsible" onClick={handleCollapse}>
                What if I need changes. Can I edit it myself?
              </button>
              <div className="faq-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  consequat neque eu odio convallis, porta consequat erat
                  rhoncus. Curabitur vulputate porttitor lectus, vitae tincidunt
                  dolor eleifend vitae. Praesent sollicitudin eros in finibus
                  posuere. Quisque at turpis arcu. Sed condimentum elit ac elit
                  rhoncus, volutpat feugiat orci accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
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