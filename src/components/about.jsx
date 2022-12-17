import React, { useState, ues } from "react";
import photoMe from "../photoMe.jpeg";
import stanley from "../Stanley.jpeg";
import fremantleLogo from "../FremantleLogo.png";
import { CSSTransition } from "react-transition-group";

function About(props) {
  const [hello, setHello] = useState(true);
  const [interests, setInterests] = useState(false);
  const [contact, setContact] = useState(false);

  const helloHandler = () => {
    setHello(true);
    setInterests(false);
    setContact(false);
  };

  const interestsHandler = () => {
    setHello(false);
    setInterests(true);
    setContact(false);
  };

  const contactHandler = () => {
    setHello(false);
    setInterests(false);
    setContact(true);
  };

  return (
    <React.Fragment>
      <div className="container">
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
                timeout={100000}
                classNames="imgAnimation"
                unmountOnExit
              >
                <img
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
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button onClick={helloHandler} className="page-link">
                Hello
              </button>
            </li>{" "}
            <li className="page-item">
              <button onClick={interestsHandler} className="page-link">
                Interests
              </button>
            </li>{" "}
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
