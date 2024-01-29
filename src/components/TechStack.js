import reactIcon from "../assets/img/react.png"
import nextIcon from "../assets/img/next.png"
import angularIcon from "../assets/img/angular.png"
import gatsbyIcon from "../assets/img/gatsby.png"
import htmlIcon from "../assets/img/html.png"
import gitIcon from "../assets/img/git.png"
import cssIcon from "../assets/img/css.png"
import javascriptIcon from "../assets/img/javascript.png"
import typescriptIcon from "../assets/img/typescript.png"
import javaIcon from "../assets/img/java.png"
import rubyIcon from "../assets/img/ruby.png"
import phpIcon from "../assets/img/php.png"
import goIcon from "../assets/img/go.png"
import cIcon from "../assets/img/c.png"
import cppIcon from "../assets/img/cpp.png"
import csharpIcon from "../assets/img/csharp.png"
import sqlIcon from "../assets/img/sql.png"
import mongodbIcon from "../assets/img/mongodb.png"
import mysqlIcon from "../assets/img/mysql.png"
import awsIcon from "../assets/img/aws.png"
import firebaseIcon from "../assets/img/firebase.png"
import unrealIcon from "../assets/img/unreal.png"
import unityIcon from "../assets/img/unity.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import TrackVisibility from "react-on-screen"

export const TechStack = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 2,
    },
  }
  const CustomLeftArrow = () => null
  const CustomRightArrow = () => null
  return (
    <section className="skill" id="tech-stack">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility once>
                {({ isVisible }) => (
                  <>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__flipInY"
                          : "animate__animated animate__flipOutY"
                      }
                    >
                      <h2>Tech Stack</h2>
                    </div>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__flipInX"
                          : "animate__animated animate__flipOutX"
                      }
                    >
                      <p>
                        Throughout my academic and professional career, I have
                        acquired a diverse set of skills and knowledge.
                      </p>
                    </div>
                    <div
                      className={
                        isVisible
                          ? "animate__animated animate__zoomIn"
                          : "animate__animated animate__zoomOut"
                      }
                    >
                      <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1800}
                        className="owl-carousel owl-theme skill-slider"
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        pauseOnHover={false}
                      >
                        <div className="item">
                          <img src={reactIcon} alt="React icon" />
                          <h5>React</h5>
                        </div>
                        <div className="item">
                          <img src={nextIcon} alt="Next.js icon" />
                          <h5>Next.js</h5>
                        </div>
                        <div className="item">
                          <img src={angularIcon} alt="Angular icon" />
                          <h5>Angular</h5>
                        </div>
                        <div className="item">
                          <img src={gatsbyIcon} alt="gatsby icon" />
                          <h5>Gatsby</h5>
                        </div>
                        <div className="item">
                          <img src={gitIcon} alt="git icon" />
                          <h5>Git</h5>
                        </div>
                        <div className="item">
                          <img src={htmlIcon} alt="html icon" />
                          <h5>HTML</h5>
                        </div>
                        <div className="item">
                          <img src={cssIcon} alt="css icon" />
                          <h5>CSS</h5>
                        </div>
                        <div className="item">
                          <img src={phpIcon} alt="php icon" />
                          <h5>PHP</h5>
                        </div>
                        <div className="item">
                          <img src={typescriptIcon} alt="typescript icon" />
                          <h5>Typescript</h5>
                        </div>
                        <div className="item">
                          <img src={javascriptIcon} alt="javascript icon" />
                          <h5>Javascript</h5>
                        </div>
                        <div className="item">
                          <img src={javaIcon} alt="java icon" />
                          <h5>Java</h5>
                        </div>
                        <div className="item">
                          <img src={rubyIcon} alt="ruby icon" />
                          <h5>Ruby</h5>
                        </div>
                        <div className="item">
                          <img src={goIcon} alt="go icon" />
                          <h5>Go</h5>
                        </div>
                        <div className="item">
                          <img src={cIcon} alt="c icon" />
                          <h5>C</h5>
                        </div>
                        <div className="item">
                          <img src={cppIcon} alt="cpp icon" />
                          <h5>C++</h5>
                        </div>
                        <div className="item">
                          <img src={csharpIcon} alt="csharp icon" />
                          <h5>C#</h5>
                        </div>
                        <div className="item">
                          <img src={sqlIcon} alt="sql icon" />
                          <h5>SQL</h5>
                        </div>
                        <div className="item">
                          <img src={mongodbIcon} alt="mongodb icon" />
                          <h5>MongoDB</h5>
                        </div>
                        <div className="item">
                          <img src={mysqlIcon} alt="mysql icon" />
                          <h5>MySQL</h5>
                        </div>
                        <div className="item">
                          <img src={awsIcon} alt="aws icon" />
                          <h5>AWS</h5>
                        </div>
                        <div className="item">
                          <img src={firebaseIcon} alt="firebase icon" />
                          <h5>Firebase</h5>
                        </div>
                        <div className="item">
                          <img src={unrealIcon} alt="unreal icon" />
                          <h5>Unreal Engine</h5>
                        </div>
                        <div className="item">
                          <img src={unityIcon} alt="unity icon" />
                          <h5>Unity</h5>
                        </div>
                      </Carousel>
                    </div>
                  </>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
