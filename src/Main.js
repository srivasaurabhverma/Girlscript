import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Note from "./Note";
import Track from "./Track";
import Footer1 from "./Footer1";
import Contact1 from "./Contact1";
import Microsoft from "./Microsoft";
import Ideas from "./Ideas";
import Challenge from "./Challenge";

import Team from "./Team";
import Profile from "./Profile";
import Mock from "./Mock";

function Main() {
  return (
    <div>
      <Navbar />
      <Microsoft />
      <Ideas />
      <Home />
      <Note />
      <Track />
      <Profile />
      <Mock />

      <Contact1 />
      <Footer1 />
    </div>
  );
}

export default Main;
