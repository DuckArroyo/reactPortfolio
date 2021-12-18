import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

//! Install on MAC.
//npm install express cors nodemailer

export default function Contact() {

  //! Should I have a separate useState for handle submit?
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // Leave console log active until form is actually functional
  console.log(formState);

  //Changes the form label
  const [status, setStatus] = useState("Submit");

  function handleSubmit = async (e) => {
    e.preventDefault();

    //Sets error on page
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }

    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

  }

  return (
    <section>
      <h1>Message me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <p>
          The contact form has front end functionality only at the moment, I
          will add backend functionality as time allows. The form does console
          log user input. The fields are validated.
        </p>
        <br />
        <p>To contact me, click the Email me link in the footer.</p>
        <br />
        <div>
          <label htmlFor="name">Name: </label>
          <br />
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address: </label>
          <br />
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <br />

          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button id="contact-form" type="submit">
          Send {status}
        </button>
      </form>
    </section>
  );
}
