import React, { useState } from "react";
import photoMe from "../photoMe.jpeg";
import stanley from "../Stanley.jpeg";
import fremantleLogo from "../FremantleLogo.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import footy from "../footy.jpeg";
import hike from "../hike.jpeg";
import jurienBay from "../jurienBay.jpeg";
import puppySchool from "../puppySchool.jpg";
import zurich from "../Zurich.jpg";

function About(props) {
  const [hello, setHello] = useState(true);
  const [interests, setInterests] = useState(false);
  const [contact, setContact] = useState(false);
  const [helloP2, setHelloP2] = useState(true);
  const [interestsP2, setInterestsP2] = useState(false);
  const [contactP2, setContactP2] = useState(false);

  const helloHandler = () => {
    setHello(true);
    setInterests(false);
    setContact(false);

    setHelloP2(true);
    setInterestsP2(false);
    setContactP2(false);
  };

  const interestsHandler = () => {
    setHello(false);
    setInterests(true);
    setContact(false);

    setHelloP2(false);
    setInterestsP2(true);
    setContactP2(false);
  };

  const contactHandler = () => {
    setHello(false);
    setInterests(false);

    setContact(true);
    setHelloP2(false);
    setInterestsP2(false);
    setContactP2(true);
  };

  const photos = [
    {
      src: footy,
      alt: "Man and woman at football game",
    },
    {
      src: hike,
      alt: "Man hiking bush trail with pet dog",
    },
    {
      src: jurienBay,
      alt: "Man walking dog on beach",
    },
    {
      src: puppySchool,
      alt: "Man holding puppy dog at dog training class",
    },
    {
      src: zurich,
      alt: "Man standing in snowd",
    },
  ];

  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "#222222" : "transparent",
  };

  function darkMode() {
    setDark((prevDark) => !prevDark);
  }
  return (
    <React.Fragment>
      <div className="container" style={styles}>
        <button onClick={darkMode} className="darkMode">
          DARK MODE
        </button>
        <div className="aboutHeader">
          <div className="row">
            <div className="col1">
              <h1>{props.headingOne}</h1>
              <h2>{props.headingTwo}</h2>

              <CSSTransition
                in={hello}
                timeout={100000}
                classNames="pAnimation"
                unmountOnExit
              >
                <p>{props.hello}</p>
              </CSSTransition>
              <CSSTransition
                in={interests}
                timeout={100000}
                classNames="pAnimation"
                unmountOnExit
              >
                <p>{props.interests}</p>
              </CSSTransition>
              <CSSTransition
                in={contact}
                timeout={100000}
                classNames="pAnimation"
                unmountOnExit
              >
                <p>
                  {props.contact} <br />
                  {props.email} <br />
                  <a href={props.linkedin} className="linkedin">
                    Linkedin: Elliott-Richards
                  </a>
                </p>
              </CSSTransition>
            </div>
            <div className="col2">
              <CSSTransition
                in={hello}
                timeout={100000}
                classNames="imgAnimation"
                unmountOnExit
              >
                <img
                  src={photoMe}
                  id="topBox"
                  alt="myself"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              </CSSTransition>

              <CSSTransition
                in={interests}
                timeout={10000}
                classNames="imgAnimation"
                unmountOnExit
              >
                <img
                  id="topBox"
                  src={fremantleLogo}
                  alt="sportTeam"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              </CSSTransition>

              <CSSTransition
                in={contact}
                timeout={100000}
                classNames="imgAnimation"
                unmountOnExit
              >
                <img
                  id="topBox"
                  src={stanley}
                  alt="pet"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              </CSSTransition>
            </div>
          </div>
        </div>
        <div className="aboutHeader">
          <div className="row">
            <div className="col3">
              <CSSTransition
                in={helloP2}
                timeout={3000}
                classNames="p2Animation"
                unmountOnExit
              >
                <p>{props.helloP2}</p>
              </CSSTransition>

              <CSSTransition
                in={interestsP2}
                timeout={2500}
                classNames="imgBox2Animation"
                unmountOnExit
              >
                <div
                  className="pictures"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {photos.map((pic) => (
                    <img src={pic.src} alt={pic.alt} />
                  ))}
                </div>
              </CSSTransition>
              <CSSTransition
                in={contactP2}
                timeout={3000}
                classNames="p2Animation"
                unmountOnExit
              >
                <div>{props.contactP2}</div>
              </CSSTransition>
            </div>
          </div>
        </div>

        <nav className="navbar sticky-bottom bg-light" id="navBottom">
          <ul className="pagination">
            <li className="page-item">
              <button onClick={helloHandler} className="page-link">
                Hello
              </button>
            </li>
            <li className="page-item">
              <button onClick={interestsHandler} className="page-link">
                Interests
              </button>
            </li>
            <li className="page-item">
              <button onClick={contactHandler} className="page-link">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default About;
