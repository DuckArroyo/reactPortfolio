import React from 'react';
import spiral from '../../assets/spiral.jpg';

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Where am I?</h1>
      <h2 id="about">Who am I?</h2>
      <h3 id="about">Why am I?</h3>
      <img src={spiral} className='my-2' style={{ width: '100%' }} alt='spiralimage' />
    </section>
  );
}

export default About;