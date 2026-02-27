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
    <div ref={ref} id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="glass p-10 md:p-16 rounded-3xl shadow-2xl shadow-green-500/10 border border-white/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Let's <span className="text-green-600">Connect</span>
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all duration-300 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all duration-300 placeholder:text-gray-400 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-green-600 shadow-xl shadow-black/10 hover:shadow-green-500/30 active:scale-95 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Talk;
