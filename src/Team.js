import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import dummy from "./images/dummy.jpg";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import kamini from "./images/kamini.jpg";
import muskan from "./images/muskan.jpg";
import manas from "./images/manas.jpg";
import harsha from "./images/harsha.jpg";
import tejasi from "./images/tejasi.jpeg";
import "./Team.css";
const Team = () => {
  return (
    <>
      <h1 className="ourteam">OUR TEAM</h1>
      <div class="main">
        <div class="profile-card">
          <div class="img">
            <img src={tejasi} />
          </div>
          <div class="caption">
            <h3>Tejasi</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="https://twitter.com/Tejasi7?t=ichfZ-yswKOUN9jzicLXlg&s=08">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/tejasi-mangale-15a0821a9">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="@tejasi_17">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={manas} />
          </div>
          <div class="caption">
            <h3>Manas</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={harsha} />
          </div>
          <div class="caption">
            <h3>Harsha</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={muskan} />
          </div>
          <div class="caption">
            <h3>Muskan</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src={kamini} />
          </div>
          <div class="caption">
            <h3>Kamini</h3>
            <p>Program Coordinator</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
