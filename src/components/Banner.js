import { Container, Row, Col } from "react-bootstrap"
import "animate.css"
import { Canvas } from "react-three-fiber"
import SpaceScene from "./SpaceScene"
import { RotatingPlanetCanvas } from "./canvas/"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
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
                      <span className="tagline">Welcome to my Portfolio</span>
                    </div>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__zoomInLeft"
                          : "animate__animated animate__zoomOutRight"
                      }
                    >
                      <h1>{`Konstantinos Gkagiannis`}</h1>
                    </div>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__zoomInRight"
                          : "animate__animated animate__zoomOutLeft"
                      }
                    >
                      <p>
                        Hello, my name is Konstantinos, but feel free to call me
                        Kostas! I hold a Master’s degree in Computer Engineering
                        and Informatics and have worked across both Front End
                        and Full Stack development. This experience has given me
                        a well-rounded skill set and a deep understanding of
                        building robust, user-focused applications. I’m driven
                        by the challenge of using technology to create meaningful
                        and efficient solutions.
                      </p>
                    </div>
                  </>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className={"animate__animated animate__fadeIn"}>
                <div className="planet-container">
                  <RotatingPlanetCanvas />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
