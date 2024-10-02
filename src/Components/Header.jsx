import React, { useState, useRef, useEffect } from 'react';
import mastheadImage from '../assets/images/masthead.jpg'; 

const Header = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [showAlert, setShowAlert] = useState(false); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const emailRef = useRef(null); 
  const buttonRef = useRef(null); 

  const handleEmailSubmit = (e) => {
    e.preventDefault(); 
    setShowAlert(false); 
    setShowSuccessMessage(false); 

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
      setShowSuccessMessage(false); 
    } else if (!validateEmail(value)) {
      setMessage('Email Address is not valid.'); 
      setShowAlert(true); 
    } else {
      setMessage(''); 
      setShowAlert(false); 
      setShowSuccessMessage(false); 
    }
  };

 
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
     <div
        style={{
          width: '100%', 
          height: '2px', 
          backgroundColor: 'red', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 1, 
        }}
      ></div>
       <div
        className="d-flex justify-content-between p-2 align-items-center"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '90%', 
          margin: '0 auto',
        }}
      >
        <h6
          style={{
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.2rem',
            lineHeight: '2.2rem',
          }}
          onClick={() => console.log('Start Bootstrap Clicked')}
        >
          Start Bootstrap
        </h6>
        <button
          onClick={scrollToBottom}
          className="btn btn-primary"
          style={{
            padding: '12px 12px', 
            fontSize: '1rem', 
          }}
        >
          Sign Up
        </button>
      </div>
     <header
        className="masthead"
        style={{
          backgroundImage: `url(${mastheadImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '85vh',
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <h1
                className="text-white font-weight-bold"
                style={{ fontSize: '3rem' }} 
              >
                Generate more leads with a <br /> professional landing page!
              </h1>
              <br />
              <form className="d-flex justify-content-center mt-4" onSubmit={handleEmailSubmit}>
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
                      style={{
                        top: '50%',
                        right: '30px',
                        transform: 'translateY(-50%)',
                        fontSize: '1.5rem',
                      }} 
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
              {showSuccessMessage && (
                <div id="submitSuccessMessage" className="text-white text-center mt-1">
                  <div className="fw-bolder">Form submission successful!</div>
                  <p>To activate this form, sign up at:</p>
                  <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              )}
              {message && !showSuccessMessage && (
                <div
                  className="text-white mt-2 text-center"
                  style={{ width: '500px', margin: '0 auto' }}
                >
                  {message.split('\n').map((line, index) => (
                    <div key={index}>{line}</div> 
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
