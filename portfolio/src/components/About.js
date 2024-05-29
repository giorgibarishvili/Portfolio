import "../styles/About.css";
function About() {
  return (
    <div className="container mt-5">
      <div className="d-flex mb-5">
        <div className="me-5 about-me">ABOUT ME</div>
        <div className="ms-5 ragaca-span">
          👋 I am a Student who is passionate about web development
          <br />
          <span>
            I discovered my passion for web development when I started
            university, where I primarily delve into front-end development using
            React and Next.js. However, I'm also eager to explore technologies
            outside of front-end.
          </span>
        </div>
      </div>
      <div className="d-flex">
        <div className="me-5 about-me">Tech Skills</div>
        <div className="ms-5 ragaca-span">
          While I'm constantly seeking to expand my skillset, these are the
          technologies where I possess expertise.
          <br />
          <span>
            HTML CSS JavaScript TypeScript ReactJS Redux Toolkit Formik Redux
            Thunk API Yup Framer Motion Firebase REST API Tailwind CSS MUI Git
            GitHub VS Code
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;
