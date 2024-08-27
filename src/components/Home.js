import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of your website, where you can find the latest updates and featured content.</p>
        <Link className="cta-button" to="/contact">Get in Touch</Link>
      </div>
    </section>
  );
}

export default Home;
