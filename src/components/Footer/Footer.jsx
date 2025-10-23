import { Link } from "react-router";
import Container from "../Container/Container";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="nav-footer-linear py-10 mb-[43px] sm:mb-12 md:mb-0">
      <Container className="footer sm:footer-horizontal text-base-content">
        <aside>
          <Link to="/" className="logo">
            KidVenture
          </Link>

          <p className="max-w-sm opacity-80">
            Your premier destination for magical toys and creative adventures,
            offering carefully curated playthings that spark curiosity, foster
            development.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="footer-link">Branding</a>
          <a className="footer-link">Design</a>
          <a className="footer-link">Marketing</a>
          <a className="footer-link">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="footer-link">Terms & Conditions</a>
          <a className="footer-link">Privacy Policy</a>
          <a className="footer-link">Cookie Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>
          <Link
            to="https://www.facebook.com/programmerrakibul/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <SiFacebook className="footer-social-icon" /> Facebook
          </Link>

          <Link
            to="https://github.com/programmerrakibul"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <SiGithub className="footer-social-icon" /> Github
          </Link>

          <Link
            to="https://x.com/innocentboy206"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <IoLogoTwitter className="footer-social-icon" /> Twitter
          </Link>

          <Link
            to="https://www.linkedin.com/in/md-rakibul-islam-9399b3228/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <SiLinkedin className="footer-social-icon" /> Linkedin
          </Link>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
