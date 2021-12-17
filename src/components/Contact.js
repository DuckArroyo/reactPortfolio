import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
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

  function handleSubmit(e) {
    //!Form submission code goes here
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }

  return (
    <section>
      <h1>Message me</h1>
      <form id="contact-form">
        <p>
        The contact form has front end functionality only at the moment, I will add backend functionality as time allows. 
        The form does console log user input. 
        The fields are validated.
        </p>
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
        <button id="contact-form" onSubmit={handleSubmit}>
          Send
        </button>
      </form>
    </section>
  );
}
