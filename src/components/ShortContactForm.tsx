// src/components/ShortContactForm.tsx
import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import styles from './ContactForm.module.css'; // Wir können die Stile des großen Formulars wiederverwenden!

const ShortContactForm: React.FC = () => {
  // Wir rufen den Hook mit den Feldern auf, die wir brauchen,
  // und setzen eine Standard-Nachricht.
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
    message: 'Kurze Anfrage via Portfolio-Seite.' // Diese Nachricht wird im Backend ankommen
  });

  return (
    <form onSubmit={handleSubmit} noValidate className={`${styles.form} ${styles.shortForm}`} >
      {submitStatus === 'success' && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          Vielen Dank, Ihre Anfrage wurde gesendet!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          Senden fehlgeschlagen. Bitte versuchen Sie es erneut.
        </div>
      )}

      {/* Wir zeigen nur die Felder für Name und E-Mail */}
      <div className={styles.formGroup}>
        <label htmlFor="short-name" className={styles.label}>Name</label>
        <input
          type="text"
          id="short-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          required
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="short-email" className={styles.label}>E-Mail</label>
        <input
          type="email"
          id="short-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          required
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
      </div>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
      </button>
    </form>
  );
};

export default ShortContactForm;