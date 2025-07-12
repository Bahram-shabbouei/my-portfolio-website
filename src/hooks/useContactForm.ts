// src/hooks/useContactForm.ts
import { useState } from 'react';

// Definiere die Typen für unsere Formulardaten und Fehler
interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Der Custom Hook
export const useContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Funktion zum Handhaben von Änderungen in den Eingabefeldern
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Fehler zurücksetzen, wenn der Benutzer tippt
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Validierungsfunktion
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist ein Pflichtfeld.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist ein Pflichtfeld.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist ein Pflichtfeld.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Gibt true zurück, wenn es keine Fehler gibt
  };

  // Funktion zum Absenden des Formulars
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (validate()) {
      setIsSubmitting(true);
      
      // --- HIER KOMMT SPÄTER DER API-AUFRUF (FETCH) ---
      console.log("Formulardaten werden gesendet:", formData);
      // Wir simulieren hier eine Netzwerkverzögerung
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Annahme: Der API-Aufruf war erfolgreich
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Formular leeren
      setIsSubmitting(false);

      // So würde der Fehlerfall aussehen:
      // setSubmitStatus('error');
      // setIsSubmitting(false);
    }
  };

  // Der Hook gibt alle Zustände und Funktionen zurück, die die Komponente benötigt
  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  };
};