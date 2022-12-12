import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";

import About from "./components/about";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elliott-Richards</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
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
        />
      </main>
    </React.Fragment>
  );
}

export default App;
