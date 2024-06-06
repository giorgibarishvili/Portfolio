import "../styles/About.css";
import { motion } from "framer-motion";
import Appear from "./animations/Appear";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};
function About() {
  return (
    <motion.div
      className="container mt-5"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex mb-5">
        <div className="me-5 about-me">ABOUT ME</div>
        <div className="ms-5 ragaca-span">
          <Appear>
            👋 I am a Student who is passionate about web development
          </Appear>
          <br />
          <span>
            <Appear>
              I discovered my passion for web development when I started
              university, where I primarily delve into front-end development
              using React and Next.js. However, I'm also eager to explore
              technologies outside of front-end.
            </Appear>
          </span>
        </div>
      </div>
      <div className="d-flex">
        <div className="me-5 about-me">Tech Skills</div>
        <div className="ms-5 ragaca-span">
          <Appear>
            While I'm constantly seeking to expand my skillset, these are the
            technologies where I possess expertise.
          </Appear>
          <br />
          <span>
            <Appear>
              HTML CSS JavaScript TypeScript ReactJS Redux Toolkit Formik Redux
              Thunk API Yup Framer Motion Firebase REST API Tailwind CSS MUI Git
              GitHub VS Code
            </Appear>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
