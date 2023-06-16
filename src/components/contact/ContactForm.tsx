import React, { useState } from "react";
import "./ContactForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  email: {
    "& > *": {
      marginBottom: theme.spacing(2),
      backgroundColor: "#3b4353",
      color: "white",
      "&:hover": {
        backgroundColor: "#3b4353",
        color: "white",
      },
      "&.Mui-focused": {
        backgroundColor: "#3b4353",
        color: "white",
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "2px solid #6f7b9b",
      },
      "&.MuiFilledInput-underline:after": {
        borderBottom: "2px solid #258b9e",
      },
    },
  },
  message: {
    "& > *": {
      marginBottom: theme.spacing(2),
      backgroundColor: "#3b4353",
      color: "white",
      "&:hover": {
        backgroundColor: "#3b4353",
        color: "white",
      },
      "&.Mui-focused": {
        backgroundColor: "#3b4353",
        color: "white",
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "2px solid #6f7b9b",
      },
      "&.MuiFilledInput-underline:after": {
        borderBottom: "2px solid #258b9e",
      },
    },
  },
  submit: {
    "&": {
      backgroundColor: "#600743",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#3d0329",
        boxShadow: "none",
      },
    },
    "& > *": {
      color: "white",
      fontSize: "15px",
      fontWeight: "600",
    },
  },
}));

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const classes = useStyles();

  const submitForm = () => {
    setStatus("SUCCESS");
  };

  console.log("env", process.env.REACT_APP_GETFORM_ENDPOINT);

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action={process.env.REACT_APP_GETFORM_ENDPOINT}
        method="POST"
      >
        <TextField
          className={classes.email}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          variant="filled"
        />
        <TextField
          className={classes.message}
          type="text"
          name="message"
          label="Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          multiline
          minRows="5"
          variant="filled"
        />
        {status === "SUCCESS" ? (
          <p className="email-success">Thanks!</p>
        ) : (
          <input
            className={classes.submit}
            type="submit"
            style={{
              outline: "none",
              padding: 16,
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          />
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  );
};

export default ContactForm;
