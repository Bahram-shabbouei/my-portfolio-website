// src/hooks/useContactForm.ts

import { useState } from 'react';

// Definiert die Struktur der Formulardaten.
// Optionale Felder sind mit '?' markiert.
interface FormState {
  name: string;
  email: string;
  message: string;
  phone?: string;
  address?: string;
}

// Definiert die Struktur für mögliche Validierungsfehler.
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

// ==================================================================
// DER CUSTOM HOOK
// ==================================================================
export const useContactForm = (initialState: FormState) => {
  // === ZUSTÄNDE (STATES) ===
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // === FUNKTIONEN ===

  /**
   * Wird bei jeder Änderung eines Eingabefeldes aufgerufen.
   * Aktualisiert den formData-Zustand.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Setzt den Fehler für das aktuelle Feld zurück, sobald der Benutzer tippt.
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Überprüft die Formulardaten auf Gültigkeit.
   * Setzt den errors-Zustand.
   * @returns {boolean} - True, wenn das Formular gültig ist, ansonsten false.
   */
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Namens-Validierung
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist ein Pflichtfeld.';
    }

    // E-Mail-Validierung
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist ein Pflichtfeld.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }

    // Nachrichten-Validierung (nur für das vollständige Formular)
    // Wenn `initialState.message` leer ist, wissen wir, dass es das große Formular ist.
    if (initialState.message === '' && !formData.message.trim()) {
      newErrors.message = 'Nachricht ist ein Pflichtfeld.';
    } else if (initialState.message === '' && formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
    }
    
    setErrors(newErrors);
    // Das Formular ist gültig, wenn das `newErrors`-Objekt keine Schlüssel hat (leer ist).
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Wird beim Absenden des Formulars aufgerufen.
   * Führt die Validierung aus und sendet die Daten an das Backend.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    setSubmitStatus(null); // Setzt vorherige Erfolgs-/Fehlermeldungen zurück
    
    // Führe die Anfrage nur aus, wenn die Validierung erfolgreich ist
    if (!validate()) {
      console.log("Validierung fehlgeschlagen. Senden abgebrochen.");
      return;
    }
    
    setIsSubmitting(true); // Deaktiviert den Senden-Button

    try {
      // Die URL unseres Backend-API-Endpunkts
      const apiUrl = 'http://localhost:3001/api/contact';

      // Sende die Daten an das Backend mit der 'fetch' API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Wandelt das JavaScript-Objekt in einen JSON-Text um
      });

      // Prüfe, ob die Server-Antwort einen Fehler anzeigt (z.B. Status 400 oder 500)
      if (!response.ok) {
        const errorData = await response.json();
        // Wirft einen Fehler, der im 'catch'-Block aufgefangen wird
        throw new Error(errorData.error || 'Ein Serverfehler ist aufgetreten.');
      }
      
      // Wenn die Anfrage erfolgreich war
      const result = await response.json();
      console.log('Erfolgreiche Antwort vom Backend:', result);
      
      setSubmitStatus('success');
      setFormData(initialState); // Setzt das Formular auf seinen ursprünglichen Zustand zurück

    } catch (error) {
      // Fängt alle Fehler ab (Netzwerkprobleme oder vom Server geworfene Fehler)
      console.error('Fehler beim Senden des Formulars:', error);
      setSubmitStatus('error');
    
    } finally {
      // Dieser Block wird immer ausgeführt, egal ob Erfolg oder Fehler
      setIsSubmitting(false); // Aktiviert den Senden-Button wieder
    }
  };

  // Der Hook gibt alle Zustände und Funktionen zurück, die die UI-Komponenten benötigen
  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  };
};