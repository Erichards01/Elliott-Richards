import React, { useState } from "react";
import photoMe from "../photoMe.jpeg";
import stanley from "../Stanley.jpeg";
import fremantleLogo from "../FremantleLogo.png";

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

              {hello && <p>{props.hello}</p>}
              {interests && <p>{props.interests}</p>}
              {contact && (
                <p>
                  {props.contact} <br />
                  {props.email} <br />
                  <a href={props.linkedin} className="linkedin">
                    Linkedin: Elliott-Richards{" "}
                  </a>
                </p>
              )}
            </div>

            <div className="col2">
              {hello && (
                <img
                  src={photoMe}
                  alt="myself"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              )}
              {interests && (
                <img
                  src={fremantleLogo}
                  alt="sportTeam"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              )}
              {contact && (
                <img
                  src={stanley}
                  alt="pet"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "auto",

                    margin: "auto",
                  }}
                />
              )}
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
