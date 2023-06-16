import { Bounce, Fade } from "react-reveal";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import Section from "../../Elements/section/Section";
import linkedin from "../../assets/images/social/linkedin.png";
import github from "../../assets/images/social/github.png";
import facebook from "../../assets/images/social/facebook.png";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section title={"Contact"}>
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/Rupali97"
            target="_blank"
            rel="noopener noreferrer"
            className={"m-r-16"}
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/rupali-doke-472b09b9/"
            target="_blank"
            rel="noopener noreferrer"
            className={"m-r-16"}
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>
        </div>
      </Bounce>
      <Fade>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MailOutlineIcon /> &nbsp; <div>+91-8286618197</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhoneIphoneIcon /> &nbsp; <div>rupalidoke97@gmail.com</div>
        </div>
      </Fade>
    </Section>
  );
}
