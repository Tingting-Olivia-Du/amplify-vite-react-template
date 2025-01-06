import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productType: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // 状态反馈

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://3b220drlqi.execute-api.us-east-1.amazonaws.com/prod/send-email", // 替换为你的 API Gateway URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          productType: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 123 Main Street, Ningbo, China</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
        <p><strong>Services:</strong> International freight, container customization, supply chain logistics.</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Contact Us</h2> 
        <p>Please fill out the form below, and we will get back to you as soon as possible.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          required
        >
          <option value="">Select Product Type</option>
          <option value="20' Standard">20' Standard</option>
          <option value="20' Open Side">20' Open Side</option>
          <option value="40' High Cube">40' High Cube</option>
          <option value="40' High Cube Double Door">40' High Cube Double Door</option>
          <option value="40' High Cube Open Side 4 Doors">40' High Cube Open Side 4 Doors</option>
          <option value="40' High Cube Full Open Side">40' High Cube Full Open Side</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.submitButton}>Submit</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
