import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactPage() {
  document.title = 'Contact | E-shop';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError('');
    setEmailError('');
    setSubjectError('');
    setMessageError('');

    let valid = true;

    if (name.length < 3) {
      setNameError('Name must be at least 3 characters long.');
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (subject.length < 3) {
      setSubjectError('Subject must be at least 3 characters long.');
      valid = false;
    }

    if (message.length < 3) {
      setMessageError('Message must be at least 3 characters long.');
      valid = false;
    }

    if (!valid) {
      return;
    }
    console.log('Form submitted:', { name, email, subject, message });
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>Contact Us</h1>
          {submitted ? (
            <div>
              <div className="alert alert-success" role="alert">
                Thank you for your message! We will get back to you soon.
              </div>
              <Link to="/" className="btn btn-primary m-3">
                « Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <div className="text-danger">{nameError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                {subjectError && <div className="text-danger">{subjectError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                {messageError && <div className="text-danger">{messageError}</div>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
