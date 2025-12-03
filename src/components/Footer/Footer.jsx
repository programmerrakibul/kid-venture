import { Link } from "react-router";
import Container from "../Container/Container";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import Logo from "../Logo/Logo";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { toast } from "react-toastify";

const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value.toLowerCase().trim();

    form.reset();
    toast.info(
      `You've successfully subscribed to our newsletter. We'll send emails to ${email}`
    );
  };

  return (
    <footer className="bg-primary/25 py-10 mb-11 md:mb-0">
      <Container className="space-y-3.5">
        <div className="footer sm:footer-horizontal text-base-content">
          <aside>
            <Logo />

            <p className="max-w-sm opacity-80">
              Your premier destination for magical toys and creative adventures,
              offering carefully curated playthings that spark curiosity, foster
              development.
            </p>
          </aside>

          <nav>
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/explore-toys" className="footer-link">
              Explore Toys
            </Link>
            <Link to="/offers" className="footer-link">
              Offers
            </Link>
            <Link to="/support" className="footer-link">
              Support
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
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

          <form onSubmit={handleNewsletter}>
            <h6 className="footer-title text-neutral font-bold opacity-100">
              Newsletter
            </h6>
            <fieldset className="w-80 space-y-1.5">
              <Label>Enter your email address</Label>
              <div className="join">
                <Input
                  type="email"
                  name="email"
                  holder="username@site.com"
                  className="join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
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
