// src/components/FullContactForm.tsx
import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import styles from './ContactForm.module.css';

const FullContactForm: React.FC = () => {
  // Wir holen ALLE notwendigen Werte aus dem Hook
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
    phone: '', 
    address: '', 
    message: '' 
  });

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      {/* ========================================================== */}
      {/* == DIESER BLOCK WURDE HINZUGEFÜGT, UM submitStatus ZU NUTZEN == */}
      {/* ========================================================== */}
      {submitStatus === 'success' && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet und wird bearbeitet.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </div>
      )}

      {/* Grid für die oberen Felder */}
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`${styles.input} ${errors.name ? styles.inputError : ''}`} required />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>E-Mail</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`${styles.input} ${errors.email ? styles.inputError : ''}`} required />
          {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Telefon (Optional)</label>
          <input type="tel" id="phone" name="phone" value={formData.phone || ''} onChange={handleChange} className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} />
          {errors.phone && <p className={styles.errorMessage}>{errors.phone}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>Adresse (Optional)</label>
          <input type="text" id="address" name="address" value={formData.address || ''} onChange={handleChange} className={styles.input} />
        </div>
      </div>

      {/* Nachrichtenfeld */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Nachricht</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`} required />
        {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
      </div>

      {/* ========================================================== */}
      {/* == DIESER BLOCK WURDE ANGEPASST, UM isSubmitting ZU NUTZEN == */}
      {/* ========================================================== */}
      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
};

export default FullContactForm;