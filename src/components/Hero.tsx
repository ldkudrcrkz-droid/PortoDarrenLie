import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import profilePhoto from "../photo/darren.jpeg";
import { useCursorSpotlight } from "../hooks/useCursorSpotlight";

type HeroProps = {
  scrollTo: (id: string) => void;
};

function Hero({ scrollTo }: HeroProps) {
  const heroRef = useCursorSpotlight<HTMLElement>();

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-spot" />

      <div className="hero-copy">
        <div className="eyebrow">[ 001 // PORTFOLIO ]</div>

        <h1 className="hero-title">
          <span>LIE DARREN</span>
          <br />
          <span>KEEFE UTOMO</span>
        </h1>

        <p className="hero-lede">
          Computer Science student focused on{" "}
          <b>software development</b>, AI, frontend engineering, backend
          systems, and creative technology.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-solid" onClick={() => scrollTo("projects")}>
            VIEW PROJECTS
            <ArrowUpRight size={16} />
          </button>

          <button className="btn btn-outline" onClick={() => scrollTo("about")}>
            ABOUT ME
            <ArrowDown size={16} />
          </button>

          <a
            className="btn btn-outline"
            href="/cv/LieDarrenKeefeUtomo_CV.pdf"
            download="LieDarrenKeefeUtomo_CV.pdf"
          >
            DOWNLOAD CV
            <Download size={16} />
          </a>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-photo">
          <img src={profilePhoto} alt="Portrait of Darren" />
        </div>

        <div className="hero-terminal">
          <div className="terminal-head">
            <span>TERMINAL // DARREN.EXE</span>
            <span className="terminal-dots">● ● ●</span>
          </div>

          <div className="terminal-body">
            <div className="terminal-status">ONLINE</div>
            <div className="terminal-rule" />

            <dl className="terminal-lines">
              <div>
                <dt>STATUS</dt>
                <dd>ACTIVE</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>CS STUDENT</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>SOFTWARE / AI</dd>
              </div>
              <div>
                <dt>STACK</dt>
                <dd>TS / C# / PYTHON</dd>
              </div>
            </dl>

            <div className="terminal-cursor">&gt; awaiting next project_</div>
          </div>
        </div>
      </div>

      <button className="down" onClick={() => scrollTo("about")}>
        SCROLL TO EXPLORE ↓
      </button>
    </section>
  );
}

export default Hero;
