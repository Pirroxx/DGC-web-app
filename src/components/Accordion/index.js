import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";

export default function BasicAccordion() {
  return (
    <div className="footer">
      <div className="accordion-row">
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>What Is DGC?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Digital Generation Club is an exclusive club built on the
              Ethereum blockchain for Web3 enthusiasts to connect, share ideas,
              gain knowledge, make informed decisions and build projects.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              What Is the mint date for DGC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The mint date will be announced to whitelisted members beforehand.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              What is the total supply of NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>TBA... </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              Will there be a second mint?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No. To secure an exclusivity to the club, there will only be one
              mint which will only be available to whitelisted members.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="accordion-row">
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              How do memberships work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here is four levels of membership; Silver members, Gold members,
              Diamond members and Diamond+ members. Every membership can be
              achieved with the initial bought package except the Diamond+,
              which you can earn through hard work and value you bring to the
              community.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              Why do I have to take an interview?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To ensure that our members match our values and mission, we will
              be conducting a number of interviews for whitelist spots. We will
              make sure that the environment we build on the exclusive discord
              is beneficial to every member of the club.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="main"
          disableGutters
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              How do I access the exclusive discord?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We have a whitelisting process in which you will apply, be
              interviewed and finally if you are accepted you will be told by
              the DGC staff, at the same time you will be on the whitelisted
              member list, which is publicly available on the whitelisting
              stage, any private information will stay private and you will be
              announced as a new member along with the reason on why.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          className="new-new"
          style={{
            margin: "10px 0",
            color: "#fff",
            backgroundColor: "#000",
            border: "1px solid white",
            borderRadius: "8px",
            border: "2px solid hsla(0, 10%, 51.4%, 0.26)",
            boxShadow: "0 10px 30px -15px rgb(0 0 0)",
            transition: "box-shadow 1.2s ease 0s",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ color: "#ccd6f6" }}>
              What if I need changes. Can I edit it myself?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: "##c2c2c2" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consequat neque eu odio convallis, porta consequat erat rhoncus.
              Curabitur vulputate porttitor lectus, vitae tincidunt dolor
              eleifend vitae. Praesent sollicitudin eros in finibus posuere.
              Quisque at turpis arcu. Sed condimentum elit ac elit rhoncus,
              volutpat feugiat orci accumsan.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
