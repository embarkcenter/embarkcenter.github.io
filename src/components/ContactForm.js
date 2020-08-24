import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import '../assets/css/styles.css';
import Axios from 'axios';

const ContactForm = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      setInterval(() => setShowSuccess(false), 5000);
    }
  }, [showSuccess]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = e => {
    e.preventDefault();
    clearForm();
    setShowSuccess(true);
  }

  return (
    <form action="#" class="bg-light p-4 p-md-5 contact-form" onSubmit={handleSubmit}>
      
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your Name" value={name} required onChange={e => setName(e.target.value)}/>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Your Email" value={email} required onChange={e => setEmail(e.target.value)}/>
      </div>
      <div class="form-group">
        <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" required value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </div>
      {
        showSuccess && (
          <Alert color="success">
            Thank you. We have received your message. We will contact you as soon as possible.
          </Alert>
        )
      }
      <div class="form-group">
        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
      </div>
    </form>
  )
}

export default ContactForm;