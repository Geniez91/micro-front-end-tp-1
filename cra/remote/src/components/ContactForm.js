// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <h2>Contactez-nous</h2>
      <form>
        <label>Nom:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default ContactForm;
