import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="eyebrow">[ 005 // CONNECTION ]</div>

        <h2>
          LET'S
          <br />
          <i>CONNECT.</i>
        </h2>

        <p className="body-text">
          Have a project, collaboration, or opportunity? Send me a message
          and let's build something.
        </p>

        <a className="mail" href="mailto:ldkudrcrkz@gmail.com">
          <Mail size={17} />
          lie.utomo@binus.ac.id
        </a>

        <div className="socials">
          <a
            href="https://github.com/ldkudrcrkz-droid"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} />
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/lie-darren-keefe-utomo-606948386/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} />
            LINKEDIN
          </a>
        </div>
      </div>

      <div className="calling-card">
        DARREN
        <br />
        <span>COMPUTER SCIENCE // 2026</span>
      </div>
    </section>
  );
}

export default Contact;
