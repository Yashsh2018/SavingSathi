import { ContactFormErrors, ContactFormData } from '@/types/contact';

export const validateForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Mobile validation
  if (!formData.mobile.trim()) {
    errors.mobile = "Mobile number is required";
  } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.mobile.replace(/\s/g, ""))) {
    errors.mobile = "Please enter a valid mobile number";
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};