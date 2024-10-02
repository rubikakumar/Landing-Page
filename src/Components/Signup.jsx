import React, { useState, useRef } from 'react';
import mastheadImage from '../assets/images/masthead.jpg'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [showAlert, setShowAlert] = useState(false); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const emailRef = useRef(null); 
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowAlert(false); 

    if (!email) {
      setMessage('Email Address is required.\nEmail Address Email is not valid.');
      setShowAlert(true); 
    } else if (!validateEmail(email)) {
      setMessage('Email Address is not valid.'); 
      setShowAlert(true); 
    } else {
      setMessage('Form submission successful!');
      setShowSuccessMessage(true);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClickOutside = (e) => {
    if (
      emailRef.current &&
      buttonRef.current &&
      !emailRef.current.contains(e.target) &&
      !buttonRef.current.contains(e.target)
    ) {
      if (!email) {
        setMessage('Email Address is required.\nEmail Address Email is not valid.');
        setShowAlert(true); 
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setMessage(''); 
      setShowAlert(false); 
    } else if (!validateEmail(value)) {
      setMessage('Email Address is not valid.'); 
      setShowAlert(true); 
    } else {
      setMessage(''); 
      setShowAlert(false); 
    }
  };

  return (
    <section
      className="signup text-center position-relative"
      onClick={handleClickOutside}
    >
      <img
        src={mastheadImage}
        alt="Masthead"
        className="img-fluid w-100"
        style={{ height: '50vh', objectFit: 'cover' }} 
      />
      <div className="content-overlay position-absolute top-50 start-50 translate-middle">
        <h2 className="text-white">Ready to get started? Sign up now!</h2>
        <form className="d-flex justify-content-center mt-4" onSubmit={handleSubmit}>
          <div className="position-relative">
            <input
              type="email"
              ref={emailRef} 
              className={`form-control fs-4 me-3 ${showAlert ? 'border-danger' : ''}`} 
              placeholder="Email Address"
              value={email}
              onChange={handleChange} 
              style={{ padding: '15px', width: '550px' }}
            />
            {showAlert && (
              <i
                className="bi bi-exclamation-circle text-danger position-absolute"
                style={{ top: '15px', right: '30px', fontSize: '1.5rem' }}
              ></i>
            )}
          </div>
          {!showSuccessMessage && ( 
            <button
              type="submit"
              ref={buttonRef} 
              className="btn btn-primary" 
              style={{ padding: '5px 10px', fontSize: '1.2rem', width: '100px' }} 
              disabled={!email} 
            >
              Submit
            </button>
          )}
        </form>
        {message && (
          <div
            className="text-white mt-2 text-center"
            style={{ width: '500px', margin: '0 auto' }}
          >
            {message.split('\n').map((line, index) => (
              <div key={index}>{line}</div> 
            ))}
            {message === 'Form submission successful!' && (
              <div>
                To activate this form, sign up at:
                <br />
                <br />
                <a
                  href="https://startbootstrap.com/solution/contact-forms"
                  className="text-light"
                >
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
