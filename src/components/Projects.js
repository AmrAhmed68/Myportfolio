import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Untitled design.png";
import projImg2 from "../assets/img/Untitled design1.png";
import projImg3 from "../assets/img/Untitled design2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React_Native",
      description: "E-Commerce App",
      imgUrl: projImg1,
    },
    {
      title: "Angular_Project",
      description: "E-Commerce website",
      imgUrl: projImg2,
    },
    {
      title: "React_Project",
      description: "E-Commerce website",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>
                  Here are some of my projects that I've worked on. You can
                  click on the image to view more details.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
