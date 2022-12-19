import "./App.css";
import React from "react";

import About from "./components/about";

function App() {
  return (
    <main>
      <About
        headingOne="Hi, I'm Elliott Richards"
        headingTwo="A passionate coder!"
        hello=" I've enjoyed every bit of learning frontend development over my
        journey. I love the challenge and the endless learning."
        interests="  I have a dog called Stanley that keeps me busy. I love AFL, I'm a big
        Fremantle Dockers fan. I love catching up with friends and
        family."
        contact="Contact details below- "
        email=" Email: e.richards066@gmail.com "
        linkedin="https://www.linkedin.com/in/elliott-richards01"
        helloP2={
          <>
            <h2>Core Values</h2>
            <p>
              <strong>Honesty</strong> - Strive to be truthful and transparent
              in all interactions. <br />
              <strong> Integrity</strong> - Honest, moral principles and do the
              right thing.
              <br />
              <strong>Respect</strong> - Value someone's feelings and their
              views, even if you don't agree with them.
              <br />
              <strong>Reliability</strong> - Trustworthy and consistent. <br />
              <strong>Kindness</strong> - Friendly, generous, and considerate to
              others and yourself.
              <br />
            </p>
          </>
        }
      />
    </main>
  );
}

export default App;
