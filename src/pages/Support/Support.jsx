import { useState } from "react";
import {
  FaLifeRing,
  FaPhone,
  FaClock,
  FaUserFriends,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";
import MyButton from "../../components/MyButton/MyButton";
import { toast } from "react-toastify";

const Support = () => {
  const [helpStep, setHelpStep] = useState(0);
  const [issueType, setIssueType] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    issue: "",
    urgency: "normal",
  });

  const helpSteps = [
    {
      title: "What type of help do you need?",
      options: [
        { icon: "🔧", label: "Technical Issue", value: "technical" },
        { icon: "👶", label: "Child Account Setup", value: "account" },
        { icon: "💳", label: "Billing & Subscription", value: "billing" },
        { icon: "🔒", label: "Privacy & Safety", value: "privacy" },
        { icon: "🎮", label: "Feature Help", value: "feature" },
        { icon: "📱", label: "App Problems", value: "app" },
      ],
    },
    {
      title: "How urgent is your issue?",
      options: [
        { icon: "🟢", label: "Just curious", value: "low" },
        { icon: "🟡", label: "Need help soon", value: "normal" },
        { icon: "🔴", label: "Blocking use", value: "high" },
        { icon: "🚨", label: "Emergency - Can't use app", value: "emergency" },
      ],
    },
    {
      title: "Preferred contact method?",
      options: [
        { icon: "💬", label: "Live Chat", value: "chat" },
        { icon: "✉️", label: "Email", value: "email" },
        { icon: "📞", label: "Phone Call", value: "phone" },
        { icon: "⏰", label: "Schedule Call", value: "schedule" },
      ],
    },
  ];

  const quickSolutions = {
    technical: {
      title: "Technical Issues",
      steps: [
        "Restart the Kid-Venture app completely",
        "Check for app updates in your device's app store",
        "Clear app cache from device settings",
        "Ensure you have a stable internet connection",
      ],
    },
    account: {
      title: "Account Setup Help",
      steps: [
        "Verify you're using the parent account for setup",
        "Check age settings match your child's actual age",
        "Ensure all required permissions are granted",
        "Try setting up on a different device first",
      ],
    },
    billing: {
      title: "Billing Support",
      steps: [
        "Check your email for subscription confirmation",
        "Verify payment method is valid and not expired",
        "Look for subscription status in Account Settings",
        "Allow 24 hours for subscription to activate",
      ],
    },
  };

  const supportStatus = {
    liveChat: {
      available: true,
      waitTime: "< 2 min",
      agents: 8,
    },
    phone: {
      available: true,
      waitTime: "< 5 min",
      hours: "9AM-9PM EST",
    },
    email: {
      available: true,
      responseTime: "1-2 hours",
    },
  };

  const handleOptionSelect = (value) => {
    if (helpStep === 0) {
      setIssueType(value);
    }
    if (helpStep < helpSteps.length - 1) {
      setHelpStep(helpStep + 1);
    } else {
      setHelpStep(3);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    toast.info(
      `Support request submitted! We'll contact you at ${contactForm.email}`
    );

    setHelpStep(4);
  };

  const resetWizard = () => {
    setHelpStep(0);
    setIssueType("");
    setContactForm({
      name: "",
      email: "",
      issue: "",
      urgency: "normal",
    });
  };

  return (
    <>
      <title>Support | KidVenture</title>

      <section className="py-10 bg-base-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card bg-primary/5 shadow-2xl">
                <div className="card-body p-6 md:p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">
                        Step {helpStep + 1} of {helpSteps.length}
                      </span>
                      <button
                        onClick={resetWizard}
                        className="text-sm link link-primary"
                      >
                        Start Over
                      </button>
                    </div>

                    <div className="flex gap-2">
                      {helpSteps.map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                            index === helpStep
                              ? "bg-primary"
                              : index < helpStep
                              ? "bg-primary/50"
                              : "bg-base-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {helpStep < 3 && (
                    <>
                      <Title className="text-center mb-8">
                        {helpSteps[helpStep].title}
                      </Title>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {helpSteps[helpStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionSelect(option.value)}
                            className="p-6 bg-secondary/4 hover:bg-secondary/7 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group shadow-md hover:shadow-lg"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-xl md:text-3xl">
                                {option.icon}
                              </span>
                              <div className="text-left">
                                <h3 className="font-bold md:text-lg group-hover:text-primary transition-colors">
                                  {option.label}
                                </h3>
                              </div>
                              <FaArrowRight className="ml-auto text-base-content/30 group-hover:text-primary transition-colors" />
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => handleOptionSelect("skip")}
                          className="link link-hover"
                        >
                          Skip wizard and go to contact form
                        </button>
                      </div>
                    </>
                  )}

                  {helpStep === 3 && (
                    <div className="animate-fadeIn">
                      <Title className="mb-2">Contact Our Support Team</Title>
                      <p className="text-base-content/70 mb-8">
                        Fill out the form below and we'll get back to you
                        quickly.
                      </p>

                      {issueType && quickSolutions[issueType] && (
                        <div className="bg-primary/7 rounded-2xl p-6 mb-8">
                          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            Quick Solutions for{" "}
                            {quickSolutions[issueType].title}
                          </h3>
                          <ul className="space-y-2">
                            {quickSolutions[issueType].steps.map(
                              (step, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3"
                                >
                                  <FaCheckCircle className="text-success mt-1 shrink-0" />
                                  <span>{step}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      <form
                        onSubmit={handleContactSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <Label>Your Name</Label>
                            <Input
                              holder="Parent or guardian name"
                              value={contactForm.name}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="space-y-1.5">
                            <Label>Email Address</Label>
                            <Input
                              type="email"
                              holder="you@example.com"
                              value={contactForm.email}
                              onChange={(e) =>
                                setContactForm({
                                  ...contactForm,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label className="block">Describe Your Issue</Label>
                          <textarea
                            placeholder="Please provide details about what you're experiencing..."
                            className="textarea textarea-bordered w-full bg-transparent outline-primary/35 border-primary/35"
                            value={contactForm.issue}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                issue: e.target.value,
                              })
                            }
                            required
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label>How urgent is this?</Label>
                          <div className="flex gap-2 flex-wrap">
                            {["low", "normal", "high", "emergency"].map(
                              (level) => (
                                <button
                                  key={level}
                                  type="button"
                                  onClick={() =>
                                    setContactForm({
                                      ...contactForm,
                                      urgency: level,
                                    })
                                  }
                                  className={`btn ${
                                    contactForm.urgency === level
                                      ? ""
                                      : "btn-outline"
                                  } ${
                                    level === "emergency"
                                      ? "btn-error"
                                      : level === "high"
                                      ? "btn-warning"
                                      : level === "normal"
                                      ? "btn-primary"
                                      : "btn-ghost"
                                  }`}
                                >
                                  {level === "low" && "Low Priority"}
                                  {level === "normal" && "Normal"}
                                  {level === "high" && "High Priority"}
                                  {level === "emergency" && "🚨 Emergency"}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <MyButton type="submit" className="btn-block">
                            <FaPaperPlane className="mr-2" />
                            Send Support Request
                          </MyButton>
                        </div>

                        <div>
                          <Link
                            onClick={resetWizard}
                            className="link link-hover flex items-center gap-1.5 text-base"
                          >
                            <GoArrowLeft className="ml-1.5" />
                            <span>Back</span>
                          </Link>
                        </div>
                      </form>
                    </div>
                  )}

                  {helpStep === 4 && (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center p-4 bg-success/10 rounded-full mb-6">
                        <FaCheckCircle className="text-6xl text-success" />
                      </div>
                      <Title className="mb-2">Support Request Submitted!</Title>
                      <p className="text-lg mb-8 text-base-content/70">
                        We've received your request and will contact you at{" "}
                        {contactForm.email} shortly.
                      </p>

                      <div className="bg-secondary/7 rounded-2xl p-6 max-w-md mx-auto mb-8">
                        <h3 className="font-bold mb-3">What happens next?</h3>
                        <ul className="text-left space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
                            <span>You'll receive a confirmation email</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
                            <span>A support agent will review your case</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary/50 rounded-full"></div>
                            <span>
                              We'll contact you via your preferred method
                            </span>
                          </li>
                        </ul>
                      </div>
                      <MyButton handleClick={resetWizard}>
                        Submit Another Request
                      </MyButton>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="card bg-primary/5 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    <FaLifeRing className="mr-2" />
                    Immediate Help
                  </h2>

                  <div className="bg-secondary/5 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-secondary" />
                        <span className="font-semibold">Phone Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            supportStatus.phone.available
                              ? "bg-success"
                              : "bg-error"
                          }`}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70 mb-3">
                      Call us directly for immediate assistance
                    </p>
                    <div className="text-sm mb-4">
                      <div className="flex justify-between">
                        <span>Hours:</span>
                        <strong>{supportStatus.phone.hours}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Wait time:</span>
                        <strong>{supportStatus.phone.waitTime}</strong>
                      </div>
                    </div>
                    <a
                      href="mailto:rakibul00206@gmail.com"
                      className="btn btn-secondary btn-block"
                    >
                      Email Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Status */}
              <div className="bg-primary/5 rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <FaClock className="text-info" />
                  Current Support Status
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Response Time</span>
                    <div className="badge badge-success">Normal</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Status</span>
                    <div className="badge badge-success text-nowrap">
                      All Systems Operational
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Support Load</span>
                    <div className="badge badge-warning">Moderate</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-base-300">
                  <div className="flex items-center gap-3">
                    <FaUserFriends className="text-2xl text-primary" />
                    <div>
                      <p className="font-semibold">Premium Support</p>
                      <p className="text-sm text-base-content/70">
                        Get faster responses with premium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Support;
