import React, { useState, forwardRef, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Talk = forwardRef((props, ref) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef(); // Create a ref for the form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceId = 'service_fipn288';
    const templateId = 'template_i8xu2ev';
    const publicKey = 'paE1QCxy9oBe97E90'; // Update with your EmailJS public key

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('Your message has been sent successfully!');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send email. Error:', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div ref={ref} id="contact" className="py-12 px-4 mb-10">
      <div className="max-w-4xl mx-auto bg-green-600 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email" // Updated to match emailjs field name
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email here"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message" // Updated to match emailjs field name
              id="message1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              placeholder="If you have any queries, doubts and concerns you can talk to us . . ."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
});

export default Talk;
