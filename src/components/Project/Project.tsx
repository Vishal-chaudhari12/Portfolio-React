import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

// Background images for projects
const projectBackgrounds = {
  0: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Employee Management
  1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Ecommerce
  2: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Banking
};

export function Project() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  return (
    <Container id="project">
      <ScrollAnimation animateIn="fadeInUp">
        <h2>My Projects</h2>
      </ScrollAnimation>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div 
            className="project"
            onMouseEnter={() => handleProjectHover(0)}
            onMouseLeave={handleProjectLeave}
            style={{
              transform: hoveredProject === 0 ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%), url(${projectBackgrounds[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredProject === 0 ? "#23ce6b" : "#23ce6b"}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: hoveredProject === 0 ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  transition: 'all 0.4s ease'
                }}
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Vishal-chaudhari12/Employee-Management-Angular"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://appemployee.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3 style={{ color: hoveredProject === 0 ? 'var(--green)' : '#FFF' }}>
                Employee Management System
              </h3>
              <p>
                {" "}
                Technology Used : Angular,Express,Node,MongoDb,Boostrap etc.{" "}
              </p>
              <p>
                {" "}
                I have developed a Employee management system offers comprehensive features including employee registration with email OTP
                confirmation, secure forgot password mechanism with email authentication, seamless login functionality, detailed
                employee profile management, efficient check-in/check-out system, robust leave management capabilities, and admin
                istrative tools for leave approval/rejection and comprehensive employee record management.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Interactive</li><li>Angular</li><li>Express</li>{" "}
              </ul>{" "}
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Node</li><li>MongoDb</li> <li>Bootstrap</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div 
            className="project"
            onMouseEnter={() => handleProjectHover(1)}
            onMouseLeave={handleProjectLeave}
            style={{
              transform: hoveredProject === 1 ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%), url(${projectBackgrounds[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredProject === 1 ? "#23ce6b" : "#23ce6b"}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: hoveredProject === 1 ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  transition: 'all 0.4s ease'
                }}
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/Vishal-chaudhari12/Angular-Ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://ecommerce-app-flax-nu.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3 style={{ color: hoveredProject === 1 ? 'var(--green)' : '#FFF' }}>
                Ecommerce Website Using MEAN Stack
              </h3>
              <p>
                {" "}
                Technology Used : Angular,Express,Node,MongoDb,Boostrap etc.{" "}
              </p>
              <p>
                I developed a full-stack eCommerce website using the MEAN stack. The frontend was built using Angular, providing
                a responsive and dynamic user interface. For the backend, I utilized Node.js and Express to handle server-side
                logic and API integration. MongoDB served as the database, ensuring efficient data storage and retrieval. The
                website features include product catalog management, user authentication, shopping cart functionality, and ensuring
                a seamless shopping experience for customers
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div 
            className="project"
            onMouseEnter={() => handleProjectHover(2)}
            onMouseLeave={handleProjectLeave}
            style={{
              transform: hoveredProject === 2 ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%), url(${projectBackgrounds[2]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredProject === 2 ? "#23ce6b" : "#23ce6b"}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: hoveredProject === 2 ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                  transition: 'all 0.4s ease'
                }}
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href=""
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href=""
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3 style={{ color: hoveredProject === 2 ? 'var(--green)' : '#FFF' }}>
                Bank Application System
              </h3>
              <p>
                Technology Used : Java , SQL , JSP,Spring MVC etc
              </p>
              <p>
                I developed a comprehensive banking application using Java,
                SQL, JSP, and Spring MVC. The application supports essential banking operations such as depositing funds, viewing
                account balances, mobile recharges, and secure fund transfers. Implemented a user-friendly interface and ensured
                robust backend processing for seamless transaction management, focusing on performance, reliability, and scalability
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>Spring MVC</li>
                <li>JDBC</li>
                <li>SQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}
