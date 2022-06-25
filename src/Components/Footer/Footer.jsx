import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import {Nav} from 'react-bootstrap'

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer-info">
        <div className="info">
          <Nav.Link as={NavLink} to="/contactus" className="nav">
            Contact us
          </Nav.Link> |
          <Nav.Link as={NavLink} to="/about" className="nav">
            About Us
          </Nav.Link>
        </div>
        <div className="media">
          Follow us on Social Media:
          <span style={{ flexDirection: "row" }}>
            <FontAwesomeIcon icon={faInstagram} className="icon" />

            <FontAwesomeIcon icon={faFacebook} className="icon" />

            <FontAwesomeIcon icon={faTwitter} className="icon" />

            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </span>
        </div>
      </div>
      <div style={{marginLeft: '15px'}}>© 2020 Copyright: indiannews.com</div>
    </div>
  );
}

export default Footer;
