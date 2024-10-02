import React from 'react';

const Testimonial = ({ name, message, imgSrc, isHTML }) => (
  <div className="col-lg-4 text-center testimonial">
    <img src={imgSrc} alt={name} className="rounded-circle mb-2" style={{ width: '200px' }} />
    <h3>{name}</h3>
    {isHTML ? (
      <p dangerouslySetInnerHTML={{ __html: message }}></p>
    ) : (
      <p>{message}</p>
    )}
  </div>
);

export default Testimonial;
