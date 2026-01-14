import React, { useState } from "react";
import { contactAPI } from "@/services/contact";
import { validateForm } from "@/utils/validation";
import { ContactFormData, ContactFormErrors } from "@/types/contact";
import comment from "@/assets/home/comment-2.png";
import { motion } from "framer-motion";

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
    <div className={`min-h-screen flex items-center justify-center bg-black px-4 py-8 md:py-0 ${className}`}>
      <motion.div 
        className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Form Section */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-[#1F2022] rounded-lg p-6 md:p-8 w-full max-w-3xl space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2 
            className="text-white font-semibold text-xl mb-4"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Get In Touch
          </motion.h2>
          
          {/* Name Field */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
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
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
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
          </motion.div>

          {/* Mobile Field */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
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
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
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
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-rose-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed w-full"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>

          {/* Submission Message */}
          {submitMessage && (
            <motion.div 
              className={`p-3 rounded-md text-center ${
                submitStatus === "success" 
                  ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {submitMessage}
            </motion.div>
          )}
        </motion.form>

        {/* Right Image Section */}
        <motion.div 
          className="relative w-full max-w-xs md:max-w-md lg:max-w-lg flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          {/* Image container with responsive sizing */}
          <div className="relative w-full h-68 sm:h-56 md:h-64 lg:h-82 xl:h-100 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={comment.src}
              alt="Girl looking at phone"
              className="w-full h-full object-contain"
            />
            
            {/* Optional decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/10 to-cyan-600/10 mix-blend-overlay"></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-600/20 to-cyan-600/20 blur-2xl opacity-30"></div>
          </div>
          
          {/* Optional caption for mobile */}
          <div className="mt-4 md:mt-6 text-center">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium">
              We're here to help!
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Send us your questions and feedback
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;