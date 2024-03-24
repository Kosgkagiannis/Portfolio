import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import costsquad from "../assets/img/costsquad.webp"
import vrProject from "../assets/img/vr-project.webp"
import dutydart from "../assets/img/DutyDart.webp"
import heatmap from "../assets/img/heatmap.webp"
import cryptodeets from "../assets/img/CryptoDeets.png"
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
    {
      title: "CryptoDeets",
      description:
        "Displaying cryptocurrency details and highlighting current prices.",
      imgUrl: cryptodeets,
    },
    {
      title: "DutyDart",
      description:
        "Optimizing tasks, prioritizing productivity, and managing workflows effortlessly.",
      imgUrl: dutydart,
    },
  ]

  const handleTabSelect = (key) => {
    if (key === "second") {
      setTimeout(() => {
        window.scrollBy(0, 1)
      }, 100)
      window.scrollBy(0, -1)
    }
  }
  return (
    <section className="project">
      <Container>
        <Row>
          <Col size={12} id="projects">
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

            <Tab.Container
              id="projects-tabs"
              defaultActiveKey="first"
              onSelect={handleTabSelect}
            >
              <TrackVisibility once>
                {({ isVisible }) => (
                  <>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__bounceIn"
                          : "animate__animated animate__bounceOut"
                      }
                    >
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center cursor-pointer"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">2</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </>
                )}
              </TrackVisibility>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 3).map((project, index) => {
                      return <ProjectCard key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(3, 6).map((project, index) => {
                      return <ProjectCard key={index + 3} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
