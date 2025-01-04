import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div id="contact" className={styles.contactSection}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, Ningbo, China</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Services:</strong> International freight, container customization, supply chain logistics.</p>
      </div>
      <div className={styles.contactForm}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
