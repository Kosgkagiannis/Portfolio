import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import linkedinIcon from "../assets/img/linkedin.svg"
import cvIcon from "../assets/img/cv.webp"
import githubIcon from "../assets/img/github.svg"
import { HashLink } from "react-router-hash-link"
import { BrowserRouter as Router } from "react-router-dom"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
    setCollapsed(true)
  }

  const downloadFile = () => {
    const fileUrl = process.env.PUBLIC_URL + "/CV_GKAGIANNIS_Konstantinos.pdf"

    const link = document.createElement("a")
    link.href = fileUrl
    link.download = "CV_GKAGIANNIS_Konstantinos.pdf"

    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
  }

  return (
    <Router>
      <Navbar
        expand="md"
        className={scrolled ? "scrolled" : ""}
        expanded={!collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#tech-stack"
                className={
                  activeLink === "tech-stack"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("tech-stack")}
              >
                Tech Stack
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Top Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/konstantinos-gkagiannis-924b60172"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn icon" />
                </a>
                <a
                  href="https://github.com/kosgkagiannis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="" onClick={downloadFile}>
                  <img src={cvIcon} alt="CV icon" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Contact Me</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
