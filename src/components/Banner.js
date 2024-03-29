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
                        Hello, my name is Konstantinos but feel free to call me
                        Kostas! I hold a Master's degree in Computer Engineering
                        and Informatics, specializing in various programming
                        languages. My experience as a Front End Developer has
                        provided me with a solid foundation, and hands-on work
                        has enhanced my ability to adapt and innovate. I am
                        enthusiastic about using technology to tackle real-world
                        challenges.
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
