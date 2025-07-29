// src/components/ContactForm.tsx
import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  // Nutze unseren Custom Hook, um die Logik zu erhalten
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useContactForm({
    name: '',
    email: '',
    message: ''
  });

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      {submitStatus === 'success' && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          required
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          required
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          required
        />
        {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
};

export default ContactForm;