import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaCommentDots,
  FaUser,
} from "react-icons/fa";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      detail: "support@kid-venture.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      detail: "+1 (800) 555-1234",
      subtext: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      detail: "123 Adventure Lane",
      subtext: "San Francisco, CA 94107",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <title>Contact | KidVenture</title>

      <section className="py-10">
        <Container>
          <div className="text-center mb-10">
            <Title>Contact Kid-Venture Support</Title>
            <p>Get help with the app, ask questions, or share feedback</p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-8">
            <div className="card bg-base-100 shadow-lg flex-1">
              <div className="card-body p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <FaCheckCircle className="text-6xl text-success mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-3">Message Sent!</h2>
                    <p className="text-base-content/70 mb-6">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
                      <FaCommentDots className="text-primary" />
                      Send Us a Message
                    </h2>
                    <p className="text-base-content/70 mb-6">
                      Fill out the form below and we'll respond as soon as
                      possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1.5">
                        <Label>Your Name</Label>
                        <Input
                          name="name"
                          holder="Parent or guardian name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          name="email"
                          holder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label className="label">Your Message</Label>
                        <textarea
                          name="message"
                          placeholder="How can we help you today?"
                          className="textarea textarea-bordered w-full bg-transparent outline-primary/35 border-primary/35"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="btn btn-primary w-full"
                        >
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card bg-base-100 shadow">
                    <div className="card-body p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <div className="text-xl text-primary">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">
                            {info.title}
                          </h3>
                          <p className="text-base-content/80 font-medium">
                            {info.detail}
                          </p>
                          <p className="text-sm text-base-content/60 mt-1">
                            {info.subtext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
