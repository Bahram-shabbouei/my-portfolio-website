// src/hooks/useContactForm.ts
import { useState } from 'react';

// Typ für die Formulardaten erweitern
export interface FormState {
  name: string;
  email: string;
  message: string;
  phone?: string; // Optionales Feld
  address?: string; // Optionales Feld
}

// Typ für die Fehler erweitern
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

// Der Custom Hook
export const useContactForm = (initialState: FormState) => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    // Pflichtfelder
    if (!formData.name.trim()) newErrors.name = 'Name ist ein Pflichtfeld.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist ein Pflichtfeld.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    // Nachricht ist nur im vollständigen Formular ein Pflichtfeld
    if (initialState.message !== undefined && !formData.message.trim()) {
        newErrors.message = 'Nachricht ist ein Pflichtfeld.';
    }
    // Optionale Validierung für Telefonnummer (einfaches Beispiel)
    if (formData.phone && !/^[0-9+\s()-]+$/.test(formData.phone)) {
        newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fehler beim Senden der Nachricht.');
        }
        
        setSubmitStatus('success');
        setFormData(initialState); // Formular auf den Anfangszustand zurücksetzen
      } catch (error) {
        console.error('Fehler beim Senden des Formulars:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return { formData, errors, isSubmitting, submitStatus, handleChange, handleSubmit };
};