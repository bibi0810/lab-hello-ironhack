import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const nav = (
  <div className="navbar">
    <img src="/images/ironhack-logo.svg" />
    <img src="/images/menu-top.svg" />
  </div>
);

const headers = (
  <div className="headers">
    <h1 id="headerOne">Say hello to ReactJS</h1>
    <h2 id="headerTwo">
      You will learn a Frontend framework from scratch, to become an Ninka
      Developer
    </h2>
    <button id="awesomeButton">Awesome!</button>
  </div>
);

const icons = (
  <div className="icons">
    <div id="one">
      <img src="/images/icon1.png" />
      <h1>Declarative</h1>
      <p>React makes it painless to create interactive UIs</p>
    </div>
    <div id="two">
      <img src="/images/icon2.png" />
      <h1>Components</h1>
      <p>Use encapsulated components that manage their state</p>
    </div>
    <div id="three">
      <img src="/images/icon3.png" />
      <h1>Single-Way</h1>
      <p>A set of immutable values are passed to the components</p>
    </div>
    <div id="four">
      <img src="/images/icon4.png" />
      <h1>JSX</h1>
      <p>Statically-typed, designed to run on modern browsers</p>
    </div>
  </div>
);
const page = (
  <div>
    {nav}
    {headers}
    {icons}
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
