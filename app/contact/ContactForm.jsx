"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm({
  onSubmit,
  subjects = [
    "General Inquiry",
    "Technical Support",
    "Sales",
    "Partnership",
    "Feedback",
  ],
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // todo: remove mock functionality - simulated delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formData);
      }

      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 lg:p-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
        Send us a Message
      </h2>

      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <p className="text-emerald-500 text-sm">
            Thank you! Your message has been sent successfully. We&apos;ll get back to
            you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-300"
            >
              Full Name <span className="text-emerald-500">*</span>
            </label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={`h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-500 focus:bg-white/10 ${errors.fullName ? "border-red-500" : ""
                }`}
              data-testid="input-fullname"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email Address <span className="text-emerald-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-500 focus:bg-white/10 ${errors.email ? "border-red-500" : ""
                }`}
              data-testid="input-email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-300"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-500 focus:bg-white/10"
              data-testid="input-phone"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-gray-300"
            >
              Subject <span className="text-emerald-500">*</span>
            </label>
            <Select
              value={formData.subject}
              onValueChange={(value) => handleChange("subject", value)}
            >
              <SelectTrigger
                id="subject"
                className={`h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-500 focus:bg-white/10 ${errors.subject ? "border-red-500" : ""
                  }`}
                data-testid="select-subject"
              >
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800 text-white">
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject} className="focus:bg-gray-800 focus:text-white">
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-red-500 text-xs">{errors.subject}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Message <span className="text-emerald-500">*</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us how we can help you..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            rows={5}
            className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:border-emerald-500 focus:bg-white/10 resize-none ${errors.message ? "border-red-500" : ""
              }`}
            data-testid="textarea-message"
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-12 text-white font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md transition-all duration-300 disabled:opacity-70 ${isSubmitting
                ? 'shadow-[0_0_80px_rgba(255,255,255,0.8)] border-white'
                : 'shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]'
              }`}
            data-testid="button-submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
