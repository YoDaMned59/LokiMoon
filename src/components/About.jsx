import React from 'react';
import aboutData from '../data/about.json';
import '../styles/components/about.scss';

const About = () => {
  const { title, description, content, quote } = aboutData.about;

  return (
    <section className="about">
      <div className="container">
        <h1 className="about-title">{title}</h1>
        <p className="about-description">{description}</p>
        
        <div className="about-content">
          {content.map((item) => (
            <div key={item.id} className="about-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="about-quote">
          <blockquote>{quote}</blockquote>
        </div>
      </div>
    </section>
  );
};

export default About; 