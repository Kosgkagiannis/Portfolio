import React, { useState } from "react"
import { Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isTxtVisible, setIsTxtVisible] = useState(false)

  const handleMouseEnter = () => {
    setIsTxtVisible(true)
  }

  const handleMouseLeave = () => {
    setIsTxtVisible(false)
  }

  const handleButtonClick = () => {
    if (isTxtVisible) {
      const destinationUrl = getDestinationUrl(title)

      window.open(destinationUrl, "_blank")
    }
  }

  const getDestinationUrl = (projectTitle) => {
    switch (projectTitle.toLowerCase()) {
      case "costsquad":
        return "https://github.com/Kosgkagiannis/cost-squad"
      case "vr ship control room":
        return "https://github.com/Kosgkagiannis/VR-Ship-Control-Room"
      case "ecofriendly":
        return "https://github.com/Kosgkagiannis/EcoFriendly"
      case "cryptodeets":
        return "https://github.com/Kosgkagiannis/CryptoDeets"
      case "dutydart":
        return "https://github.com/Kosgkagiannis/DutyDart"
      default:
        return "/"
    }
  }

  return (
    <Col size={12} sm={6} md={4}>
      <TrackVisibility once>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "animate__animated animate__zoomIn" : "invisible"
            }
          >
            <div
              className="proj-imgbx"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={imgUrl} alt={`Project: ${title}`} />
              <div className={`proj-txtx ${isTxtVisible ? "visible" : ""}`}>
                <h4>{title}</h4>
                <span>{description}</span>
                <button className="prj-button" onClick={handleButtonClick}>
                  Go to project
                </button>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  )
}
