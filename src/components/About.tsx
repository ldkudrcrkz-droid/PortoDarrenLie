function About() {
  return (
    <section id="about" className="panel">
      <div className="section-top">
        <span>01</span>
        <b>ABOUT</b>
        <em>IDENTITY FILE</em>
      </div>

      <div className="about-grid">
        <div>
          <h2>
            WHO
            <br />
            <i>AM I?</i>
          </h2>

          <div className="stamp">
            COMPUTER SCIENCE
            <br />
            BINUS UNIVERSITY
          </div>
        </div>

        <div>
          <p className="body-text">
            I am a Computer Science undergraduate student with an interest
            in building software that combines functionality, technology,
            and creative design.
          </p>

          <p className="body-text">
            My experience ranges from frontend and backend development to
            machine learning, computer vision, audio processing, and game
            development.
          </p>

          <div className="stats">
            <div>
              <strong>2024</strong>
              <small>STARTED CS</small>
            </div>
            <div>
              <strong>07+</strong>
              <small>PROJECTS</small>
            </div>
            <div>
              <strong>05</strong>
              <small>CORE AREAS</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
