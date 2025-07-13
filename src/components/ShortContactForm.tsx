// src/components/ShortContactForm.tsx
import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import styles from './ContactForm.module.css';

const ShortContactForm: React.FC = () => {
  const { 
    formData, 
    errors, 
    isSubmitting,  // Wird jetzt verwendet
    submitStatus,  // Wird jetzt verwendet
    handleChange, 
    handleSubmit 
  } = useContactForm({ 
    name: '', 
    email: '',
    message: 'Kurze Anfrage via Short-Form.' // Wir senden eine Standard-Nachricht
  });

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      {/* Statusmeldungen */}
      {submitStatus === 'success' && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          Vielen Dank! Ich habe Ihre Anfrage erhalten und melde mich in Kürze.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </div>
      )}

      {/* Felder */}
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="short-name" className={styles.label}>Name</label>
          <input type="text" id="short-name" name="name" value={formData.name} onChange={handleChange} className={`${styles.input} ${errors.name ? styles.inputError : ''}`} required />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="short-email" className={styles.label}>E-Mail</label>
          <input type="email" id="short-email" name="email" value={formData.email} onChange={handleChange} className={`${styles.input} ${errors.email ? styles.inputError : ''}`} required />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>
      </div>
      
      {/* Senden-Button */}
      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
      </button>
    </form>
  );
};

export default ShortContactForm;