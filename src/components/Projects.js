import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import costsquad from "../assets/img/costsquad.jpg"
import vrProject from "../assets/img/vr-project.png"
import heatmap from "../assets/img/heatmap.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
  const projects = [
    {
      title: "CostSquad",
      description: "Save Time and Split Costs Effortlessly",
      imgUrl: costsquad,
    },
    {
      title: "VR Ship Control Room",
      description:
        "Explore a virtual ship control room, managing notifications.",
      imgUrl: vrProject,
    },
    {
      title: "EcoFriendly",
      description:
        "A heatmap of your journeys, analyzing modes of transport and environmental impact.",
      imgUrl: heatmap,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <>
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__zoomIn"
                        : "animate__animated animate__zoomOut"
                    }
                  >
                    <h2>Top Projects</h2>
                  </div>
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__bounceIn"
                        : "animate__animated animate__bounceOut"
                    }
                  >
                    <p>
                      Discover my best work in the section below. These are the
                      projects I'm most proud of, showcasing my skills and
                      passion. Each one tells a unique story of creativity and
                      dedication.
                    </p>
                  </div>
                </>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" id="pills-tab"></Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
