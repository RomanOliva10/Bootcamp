import React, { Fragment } from "react";
import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "../presentational/about";
import Contact from "../presentational/contact";
import Values from "../presentational/values";
import Home from "../presentational/home";

export default function Nav() {
  return (
    <Fragment>
      <nav>
        <div className="container">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="nav">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/values">Values</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Values" element={<Values />} />
        </Routes>
      </main>
    </Fragment>
  );
}
