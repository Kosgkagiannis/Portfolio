import React, { useRef, useState } from "react"
import { Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.webp"
import emailSent from "../assets/img/email-sent.gif"
import emailLoading from "../assets/img/email-loading.gif"
import "animate.css"
import TrackVisibility from "react-on-screen"
import emailjs from "@emailjs/browser"
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_API_KEY,
} from "../emailConfig"

export const ContactForm = () => {
  const form = useRef()
  const [formValid, setFormValid] = useState(true)
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  })
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isEmailLoading, setIsEmailLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    const isValid = validateForm()
    setFormValid(isValid)

    if (isValid) {
      try {
        setIsEmailLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        await emailjs.sendForm(
          EMAIL_SERVICE_ID,
          EMAIL_TEMPLATE_ID,
          form.current,
          EMAIL_API_KEY
        )
        console.log("Email sent successfully")

        setIsEmailLoading(false)

        setIsEmailSent(true)

        setTimeout(() => {
          setIsEmailSent(false)
        }, 3000)
      } catch (error) {
        console.error("Error sending email:", error)

        setIsEmailLoading(false)
      }

      e.target.reset()
    }
  }

  const validateForm = () => {
    const formData = new FormData(form.current)
    const errorsCopy = { ...errors }
    let isValid = true

    formData.forEach((value, key) => {
      if (!value.trim()) {
        errorsCopy[key] = `Please fill in your ${getFieldDisplayName(key)}`
        isValid = false
      } else {
        errorsCopy[key] = ""
      }
    })

    setErrors(errorsCopy)
    return isValid
  }

  const getFieldDisplayName = (fieldName) => {
    switch (fieldName) {
      case "user_name":
        return "name"
      case "user_email":
        return "email"
      case "message":
        return "message"
      default:
        return fieldName
    }
  }

  return (
    <section className="contact" >
      <Container>
        <TrackVisibility once>
          {({ isVisible }) => (
            <div id="connect"
              className={
                isVisible
                  ? "animate__animated animate__zoomIn"
                  : "animate__animated animate__zoomOut"
              }
            >
              <h2 className="contact-header">Contact Me</h2>
            </div>
          )}
        </TrackVisibility>
        <Row className="align-items-center">
          <Row size={12} md={2}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomInDown"
                      : "animate__animated animate__zoomOutDown"
                  }
                >
                  <img src={contactImg} alt="Contact Us" />
                </div>
              )}
            </TrackVisibility>
            <Row>
              <form ref={form} onSubmit={sendEmail}>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__zoomInDown"
                            : "animate__animated animate__zoomOutDown"
                        }
                      >
                        <label>Your Name</label>

                        <input
                          type="text"
                          name="user_name"
                          onChange={() => setFormValid(true)}
                          maxLength={80}
                        />
                        <div className="error-message">{errors.user_name}</div>
                      </div>
                    </>
                  )}
                </TrackVisibility>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__zoomInDown"
                            : "animate__animated animate__zoomOutDown"
                        }
                      >
                        <label>Your Email</label>
                        <input
                          type="email"
                          name="user_email"
                          onChange={() => setFormValid(true)}
                          maxLength={80}
                        />
                        <div className="error-message">{errors.user_email}</div>
                      </div>
                    </>
                  )}
                </TrackVisibility>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__zoomInDown"
                            : "animate__animated animate__zoomOutDown"
                        }
                      >
                        <label>Your Message</label>
                        <textarea
                          name="message"
                          onChange={() => setFormValid(true)}
                        ></textarea>

                        <div className="error-message">{errors.message}</div>
                      </div>
                    </>
                  )}
                </TrackVisibility>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <>
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__zoomInDown"
                            : "animate__animated animate__zoomOutDown"
                        }
                      >
                        <input type="submit" value="Send" />
                      </div>
                    </>
                  )}
                </TrackVisibility>
              </form>

              {isEmailLoading && (
                <div className="email-loading">
                  <p>Sending email...</p>
                  <img
                    src={emailLoading}
                    alt="Email Sent"
                    width="64"
                    height="64"
                    className="tick-mark"
                  />
                </div>
              )}
              {isEmailSent && (
                <div className="email-sent">
                  <p>Email sent!</p>
                  <img
                    src={emailSent}
                    alt="Email Sent"
                    width="64"
                    height="64"
                    className="tick-mark"
                  />
                </div>
              )}
            </Row>
          </Row>
        </Row>
      </Container>
    </section>
  )
}
