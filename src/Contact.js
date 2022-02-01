import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./Contact.css";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#ffffff",
  },

  left: {
    backgroundColor: "#47ABFC",
    height: "103.5vh",
    width: "50%",
  },
  right: {
    height: "103.5vh",
    width: "50%",
    
  },

  title: {
    marginTop: "30px",
    marginLeft:"300px",
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    fontWeight: "600",
    letterSpacing: 0,
    marginBottom: "0vh",
    lineHeight: "220%",
    fontFamily: "Candal",
    color: "white",
  },
  subhead: {
    marginLeft: "40px",
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "150%",
  },
  button: {
    backgroundColor: "white",
    color: "teal",
    height: "50px",
    width: "200px",
    border: "none",
    marginTop: 30,
    marginLeft:100,
     '&:hover':{
        backgroundColor:"white"
    }
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    // '&:hover':{
    //     backgroundColor:"blue"
    // }
  },
  titler: {
    width:"100%",
    marginTop: "30px",
    marginLeft: "150px",
    fontSize: "2.5rem",
    fontWeight: "600",
    letterSpacing: 0,
    marginBottom: "0vh",
    lineHeight: "220%",
    fontFamily: "Candal",
    color: "black",
  },
  subheadr: {
    marginTop: "0vh",
    marginLeft: "40px",
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: "120%",
  },
  bluehead: {
    marginTop: "0vh",
    marginLeft: "95px",
    lineHeight: "100%",
    justifyItems: "center",
    justifyContent: "center",
    color: "#47ABFC",
    fontSize: "110%",
    marginBottom: "0vh",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="__container">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <div className={classes.left}>
            <Grid xs={6} item>
              <div className={classes.title}>
                <h1>
                  JOIN OUR <br /> TELEGRAM <br /> GROUP
                </h1>
              </div>
              <div className={classes.subhead}>
                <h6>
                  {" "}
                  Got any queries, join the chat and <br /> ask anything you
                  want.
                </h6>
              </div>
              <div className={classes.btn}>
                <Button
                  className={classes.button}
                  href="https://t.me/+MgKROtPf989kYWU1"
                >
                  Join the Group --
                </Button>
              </div>
            </Grid>
          </div>

          <div className={classes.right}>
            <Grid xs={6} item>
              <div className={classes.titler}>
                <h1>REACH OUT</h1>
                <h1>TO US</h1>
              </div>

              <div className={classes.bluehead}>
                <h4>📞Call Us at</h4>
                <h6 className="imp">
                  {" "}
                  +91 9552809927 <br /> +91 78885 72592{" "}
                </h6>
              </div>
              <div className={classes.bluehead}>
                <h4>📧Send an e-mail</h4>
                <h6 className="imp">
 
                  girlscriptmsprogram@gmail.com{" "}
                </h6>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
