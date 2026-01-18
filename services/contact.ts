import { ContactFormData, ContactApiResponse } from '../types/contact';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.savingsathi.com/api/v1';

export const contactAPI = {
  submitContactForm: async (formData: ContactFormData): Promise<ContactApiResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/extraData/contact-support`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  },
};