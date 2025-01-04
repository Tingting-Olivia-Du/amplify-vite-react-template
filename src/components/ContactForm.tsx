import React from 'react';

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Implement backend)');
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, Ningbo, China</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Services:</strong> International freight, container customization, supply chain logistics.</p>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
