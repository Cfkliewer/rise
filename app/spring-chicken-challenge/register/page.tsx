"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await axios.post("/api/send-mail", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        goals: 'Spring chicken challenge'
      });
      setSubmitStatus("success");
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage("Failed to submit registration. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-12">
      <div className="mx-auto max-w-md px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white">Register Now</h1>
          <p className="text-lg text-stone-300">
            Join the Spring Chicken Challenge and transform your life in 6 weeks!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-[#D83728] bg-stone-800 p-6 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border-stone-600 bg-stone-700 px-4 py-2 text-white placeholder-stone-400 focus:border-[#D83728] focus:ring-[#D83728]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border-stone-600 bg-stone-700 px-4 py-2 text-white placeholder-stone-400 focus:border-[#D83728] focus:ring-[#D83728]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border-stone-600 bg-stone-700 px-4 py-2 text-white placeholder-stone-400 focus:border-[#D83728] focus:ring-[#D83728]"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full rounded-md bg-[#D83728] py-3 text-white transition-colors hover:bg-[#c32d1f] disabled:bg-stone-600"
            >
              {isSubmitting ? (
                <FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" />
              ) : (
                "Register for the Challenge"
              )}
            </button>
          </form>

          {/* Success/Error Messages */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: submitStatus !== "idle" ? 1 : 0,
              height: submitStatus !== "idle" ? "auto" : 0,
            }}
            className="mt-4"
          >
            {submitStatus === "success" && (
              <div className="rounded-md bg-green-50 p-4 text-green-800">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  <p>Registration successful! We&apos;ll be in touch soon.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-md bg-red-50 p-4 text-red-800">
                <p>{errorMessage}</p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <a
            href="/spring-chicken-challenge"
            className="text-stone-400 hover:text-[#D83728]"
          >
            ← Back to Challenge Details
          </a>
        </div>
      </div>
    </div>
  );
}
