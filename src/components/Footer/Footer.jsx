import { Link } from "react-router";
import Container from "../Container/Container";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary/25 py-10 mb-11 md:mb-0">
      <Container className="space-y-3.5">
        <div className="footer sm:footer-horizontal text-base-content">
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
            <h6 className="footer-title text-neutral font-bold opacity-100">
              Services
            </h6>
            <Link className="footer-link">Branding</Link>
            <Link className="footer-link">Design</Link>
            <Link className="footer-link">Marketing</Link>
            <Link className="footer-link">Advertisement</Link>
          </nav>

          <nav>
            <h6 className="footer-title text-neutral font-bold opacity-100">
              Legal
            </h6>
            <Link className="footer-link">Terms & Conditions</Link>
            <Link className="footer-link">Privacy Policy</Link>
            <Link className="footer-link">Cookie Policy</Link>
          </nav>

          <nav>
            <h6 className="footer-title text-neutral font-bold opacity-100">
              Social Links
            </h6>
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
        </div>

        <div className="pt-3.5 border-t-2 border-t-primary/13">
          <pre className="font-semibold text-center opacity-70">
            &copy; All Rights Reserved by <em>KidVenture</em>
          </pre>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
