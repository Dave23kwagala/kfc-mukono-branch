import React from 'react';

function AboutUs() {
  const aboutUsStyle = {
    maxWidth: '7000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    color: '#333',
  };

  const titleStyle = {
    color: '#c70000',
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const sectionTitleStyle = {
    color: '#c70000',
    fontSize: '1.5rem',
    marginTop: '30px',
    marginBottom: '10px',
  };

  const valuesListStyle = {
    listStyleType: 'square',
    marginLeft: '20px',
  };

  return (
    <div style={aboutUsStyle}>
      <h2 style={titleStyle}>About KFC</h2>
      <p style={descriptionStyle}>
        KFC, an acronym for Kentucky Fried Chicken, is a fast food restaurant chain specializing in fried chicken. It is the world's most popular fried chicken restaurant chain, with over 24,000 restaurants in over 145 countries and territories around the world.
      </p>

      <h3 style={sectionTitleStyle}>History</h3>
      <p style={descriptionStyle}>
        KFC was founded in 1930 by Harland Sanders, who began selling fried chicken from his roadside restaurant in Corbin, Kentucky. Sanders' chicken was so popular that he began franchising his restaurant, and by the 1960s, KFC was a global brand.
      </p>

      <h3 style={sectionTitleStyle}>Mission</h3>
      <p style={descriptionStyle}>
        KFCs mission is to offer finger-lickin good food to people all over the world. The company is committed to using fresh ingredients and traditional cooking methods to create delicious and satisfying meals.
      </p>

      <h3 style={sectionTitleStyle}>Values</h3>
      <p style={descriptionStyle}>
        KFCs core values are:
        <ul style={valuesListStyle}>
          <li>Integrity</li>
          <li>Teamwork</li>
          <li>Innovation</li>
          <li>Customer focus</li>
          <li>Community</li>
        </ul>
      </p>

      <h3 style={sectionTitleStyle}>Social Responsibility</h3>
      <p style={descriptionStyle}>
        KFC is committed to giving back to the communities it serves. The company supports a variety of charities, including the KFC Foundation, which provides scholarships to students who are pursuing careers in the food industry.
      </p>
    </div>
  );
}

export default AboutUs;
