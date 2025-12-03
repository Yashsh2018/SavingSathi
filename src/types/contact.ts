export interface ContactFormData {
    name: string;
    email: string;
    mobile: string;
    message: string;
  }
  
  export interface ContactFormErrors {
    name?: string;
    email?: string;
    mobile?: string;
    message?: string;
  }
  
  export interface ContactApiResponse {
    success: boolean;
    message: string;
    data?: any;
    error?: string;
  }