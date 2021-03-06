import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  //Error message
  const [errorMessage, setErrorMessage] = useState('');

  //Submit label in form
  const [status, setStatus] = useState('Submit');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Sets error on page
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log('Form', formState);
    }

    setStatus('Sending...');
    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log('========details at handleSubmit:', details);

    console.log('========name.value at handleSubmit:', name.value);
    console.log('========email.value at handleSubmit:', email.value);
    console.log('========message.value at handleSubmit:', message.value);
    let response = await fetch('/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    // console.log('---------Did it reach this?');
    setStatus('Submited');
    let result = await response.json();
    console.log(result);

    console.log('---------Did it reach this?');

    alert(result.status);
  };

  return (
    <section>
      <h1>Message me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <p>
          click the Email me link on the footer.

          I am currently developing the route to send the email through the Heroku server.
        </p>
        <br />
        <div>
          <label htmlFor='name'>Name: </label>
          <br />
          <input
            type='text'
            defaultValue={name}
            onBlur={handleChange}
            name='name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email address: </label>
          <br />
          <input
            type='email'
            defaultValue={email}
            onBlur={handleChange}
            name='email'
          />
        </div>
        <div>
          <label htmlFor='message'>Message: </label>
          <br />

          <textarea
            name='message'
            defaultValue={message}
            onBlur={handleChange}
            rows='5'
          />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button className='btn' id='contact-form' type='submit'>
          {status}
        </button>
      </form>
    </section>
  );
}
