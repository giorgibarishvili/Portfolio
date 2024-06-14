import "../styles/About.css";
import { motion } from "framer-motion";
import Appear from "./animations/Appear";
import { useTranslation } from "react-i18next";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};
function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mt-5"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex mb-5 row">
        <div className="me-5 about-me col-2">{t("aboutMe")}</div>
        <div className="ms-5 ragaca-span">
          <Appear>მოგესალმებით, მე ვარ Junior Front end დეველოპერი</Appear>
          <br />
          <div>
            <Appear>
              პროგრამირების შესწავლისას არჩევანი შევაჩერე ვებ-პროგრამირებაზე,
              ჩემს უნარ-ჩვევებს რაც შეეხება - ვარ მიზანდასახული,
              პასუხისმგებლიანი, გუნდში მუშაობის უნარიანი, განვითარებისკენ
              მიმართული პიროვნება. 
            </Appear>
          </div>
        </div>
      </div>
      <div className="d-flex row">
        <div className="me-5 about-me col-2">ტექნიკური უნარები</div>
        <div className="ms-5 ragaca-span">
          <Appear>
            ასევე მაქვს "Waterfall" და "Agile" მეთოდოლოგიებთან მუშაობის გამოცდილება.
            ყოველდღიურად განვითარების მიუხედავად ამ მომენტზე ვფლობ შემდეგ პროგრამირების ენებს/ბიბლიოთეკებს
          </Appear>
          <br />
          <span>
            <Appear>
              HTML, CSS, JavaScript,  ReactJS, Redux,
               API, Framer Motion, REST API, BOOTSTRAP, Git,
              GitHub, VS Code, I18N, react-awesome-reveal, embla-carousel-react, SASS
            </Appear>
          </span>
        </div>
      </div>
      <div className="d-flex mb-5 row">
        <div className="me-5 about-me col-2">ganatleba</div>
        <div className="ms-5 ragaca-span">
          <Appear>მოგესალმებით, მე ვარ Junior Front end დეველოპერი</Appear>
          <br />
          <div>
            <Appear>
              პროგრამირების შესწავლისას არჩევანი შევაჩერე ვებ-პროგრამირებაზე,
              ჩემს უნარ-ჩვევებს რაც შეეხება - ვარ მიზანდასახული,
              პასუხისმგებლიანი, გუნდში მუშაობის უნარიანი, განვითარებისკენ
              მიმართული პიროვნება. 
            </Appear>
          </div>
        </div>
      </div>
      <div className="d-flex mb-5 row">
        <div className="me-5 about-me col-2">samushao gamocdileba</div>
        <div className="ms-5 ragaca-span">
          <Appear>მოგესალმებით, მე ვარ Junior Front end დეველოპერი</Appear>
          <br />
          <div>
            <Appear>
              პროგრამირების შესწავლისას არჩევანი შევაჩერე ვებ-პროგრამირებაზე,
              ჩემს უნარ-ჩვევებს რაც შეეხება - ვარ მიზანდასახული,
              პასუხისმგებლიანი, გუნდში მუშაობის უნარიანი, განვითარებისკენ
              მიმართული პიროვნება. 
            </Appear>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
