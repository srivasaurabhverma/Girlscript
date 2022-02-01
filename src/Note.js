import React from "react";
import "./Note.css";
const Note = () => {
  return (
    <div className="note_container">
      <div className="left">
        <h1 className="title">A FEW THINGS TO NOTE.</h1>
      </div>

      <div className="right">
        <div className="box__">
          <div className="title1">
            <h3 className="titlee_">Common mail ID</h3>
            <p className="descreption">
              Make sure you use a common mail id through out the process
            </p>
          </div>
          <br />

          <hr />
          <div className="title1">
            <h3 className="titlee_">Not Again</h3>
            <p className="descreption">
              Incase you have already recieved a Certificate Voucher from our
              Previous Programs in any one of the Above Tracks , You won't be
              eligible for this Certification
            </p>
          </div>
          <br />

          <hr />
          <div className="title1">
            <h3 className="titlee_">Only One Voucher</h3>
            <p className="descreption">
            We will give only one Certification Voucher per Student so choose your course wisely
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
