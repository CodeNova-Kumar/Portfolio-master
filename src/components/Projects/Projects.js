import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Resume from "../../Assets/Projects/Resume.png";
import EDS from "../../Assets/Projects/EDS.png";
import landing from "../../Assets/Projects/landing.png";
import Loginp from "../../Assets/Projects/Loginp.png";
import Meal from "../../Assets/Projects/Meal.png";
import Lfashion from "../../Assets/Projects/Lfashion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Loginp}
              isBlog={false}
              title="Animated Login Page"
              description="The Front-End Animated Login Page project is a dynamic and visually engaging login page designed to enhance the user experience on websites and web applications.It's fully responsive for all the platforms using React."
              ghLink="https://github.com/CodeNova-Kumar/Animated-Login-Page"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lfashion}
              isBlog={false}
              title="Lucknow Fashion"
              description="My personal site Lucknow Fashion page build with HTML, CSS and JavaScript, Responsive for all devices"
              ghLink="https://github.com/CodeNova-Kumar/Lucknow-Fashion-Site"
              demoLink="https://codenova-kumar.github.io/Lucknow-Fashion-Site/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Landing Page"
              description="This gorgeous responsive website is a static landing page built with React, react-router, and react hooks. All the components are reusable and can be used for any dynamic content. It's fully responsive for all the platforms and hosted using Netlify"
              ghLink="https://github.com/CodeNova-Kumar/Landing-Page"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Resume"
              description="What is known as resume? A resume is a document summarizing your education, work experience, and skills. The length of a resume may depend upon how many years of work experience you have."
              ghLink="https://github.com/CodeNova-Kumar/Resume"
              demoLink="https://codenova-kumar.github.io/Resume/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meal}
              isBlog={false}
              title="Meal Finder"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/CodeNova-Kumar/Meal_Finder?tab=readme-ov-file"
              demoLink="https://codenova-kumar.github.io/Meal_Finder/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EDS}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="In emergency situations, such as sudden cardiac arrest or other
              critical medical events, immediate access to specialized medical
              care can be a matter of life and death.This project is a revolutionary web development
              project aimed at addressing the critical issue of accessing timely
              medical assistance, particularly in emergency situations requiring
              CPR specialists etc."
              ghLink="https://github.com/CodeNova-Kumar/EDS"
              demoLink="https://hover-delta-two.vercel.app/main/home" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
