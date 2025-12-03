import React, { useState } from "react";
import { contactAPI } from "@/services/contact";
import { validateForm } from "@/utils/validation";
import { ContactFormData, ContactFormErrors } from "@/types/contact";
import comment from "@/assets/home/comment-2.png";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    try {
      // API CALL HERE
      const response = await contactAPI.submitContactForm(formData);
      
      if (response) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setSubmitStatus("success");
        // Reset form on successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        setErrors({});
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage(
        error instanceof Error 
          ? `Failed to send message: ${error.message}`
          : "Something went wrong. Please try again later."
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function for input classes
  const getInputClasses = (fieldName: keyof ContactFormErrors) => {
    const baseClasses = "w-full rounded-md border-1 px-4 py-3 bg-transparent text-gray-300 placeholder-gray-500 outline-none focus:border-cyan-500";
    const errorClasses = errors[fieldName] ? "border-red-500" : "border-white";
    const disabledClasses = isSubmitting ? "opacity-50 cursor-not-allowed" : "";
    
    return `${baseClasses} ${errorClasses} ${disabledClasses}`;
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-black px-4 ${className}`}>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-10">
        {/* Left Form Section */}
        <form onSubmit={handleSubmit} className="bg-[#1F2022] rounded-lg p-8 w-full max-w-3xl space-y-5">
          <h2 className="text-white font-semibold text-xl mb-4">Get In Touch</h2>
          
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={getInputClasses("name")}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClasses("email")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mobile Field */}
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={getInputClasses("mobile")}
              disabled={isSubmitting}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={`${getInputClasses("message")} resize-none`}
              rows={5}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-rose-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Now"
            )}
          </button>

          {/* Submission Message */}
          {submitMessage && (
            <div className={`p-3 rounded-md text-center ${
              submitStatus === "success" 
                ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}>
              {submitMessage}
            </div>
          )}
        </form>

        {/* Right Image Section */}
        <div className="relative w-[350px] md:w-auto flex flex-col items-center justify-center">
          <div className="w-full h-64 bg-gray-700 rounded-md flex items-center justify-center text-white">
          <img
            src={comment.src}
            alt="Girl looking at phone"
            className="relative z-10 rounded-md"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;