import { Link } from "react-router";
import Container from "../Container/Container";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <Container className="footer sm:footer-horizontal text-base-content">
        <aside>
          <Link
            to="/"
            className="text-2xl text-neutral font-extrabold font-['Raleway']"
          >
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
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">
            <SiFacebook className="inline-block mr-1.5" /> Facebook
          </a>
          <a className="link link-hover">
            <SiGithub className="inline-block mr-1.5" /> Github
          </a>
          <a className="link link-hover">
            <IoLogoTwitter className="inline-block mr-1.5" /> Twitter
          </a>
          <a className="link link-hover">
            <SiLinkedin className="inline-block mr-1.5" /> Linkedin
          </a>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
