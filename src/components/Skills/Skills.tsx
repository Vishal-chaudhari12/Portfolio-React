import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import angularIcon from "../../assets/angular.png";
import nodeIcon from "../../assets/node-icon.svg";
import expressIcon from "../../assets/express-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

export function Skills() {
  const skills: Skill[] = [
    // Frontend Skills
    { name: "HTML", icon: htmlIcon, category: "Frontend" },
    { name: "CSS", icon: cssIcon, category: "Frontend" },
    { name: "JavaScript", icon: jsIcon, category: "Frontend" },
    { name: "Angular", icon: angularIcon, category: "Frontend" },
    { name: "Bootstrap", icon: bootstrapIcon, category: "Frontend" },
    { name: "React", icon: reactIcon, category: "Frontend" },
    { name: "TypeScript", icon: typescriptIcon, category: "Frontend" },
    
    // Backend Skills
    { name: "Node.js", icon: nodeIcon, category: "Backend" },
    { name: "Express.js", icon: expressIcon, category: "Backend" },
    { name: "MongoDB", icon: mongodbIcon, category: "Backend" },
  ];

  const frontendSkills = skills.filter(skill => skill.category === "Frontend");
  const backendSkills = skills.filter(skill => skill.category === "Backend");

  return (
    <Container id="skills">
      <ScrollAnimation animateIn="fadeInUp">
        <h2>My Skills</h2>
      </ScrollAnimation>
      
      <div className="skills-section">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h3>Frontend Development</h3>
        </ScrollAnimation>
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.2 + index * 0.1) * 1000}>
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <h3>Backend Development</h3>
        </ScrollAnimation>
        <div className="skills-grid">
          {backendSkills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <ScrollAnimation animateIn="fadeInUp" delay={(0.4 + index * 0.1) * 1000}>
                <div className="skill-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
          <h3>Additional Technologies</h3>
        </ScrollAnimation>
        <div className="additional-skills">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <div className="skill-tag">Tailwind CSS</div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <div className="skill-tag">Ionic</div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
} 