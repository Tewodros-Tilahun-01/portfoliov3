"use client";

import { Phone, Mail, MapPinned, Send } from "lucide-react";
import type { JSX } from "react";
import { FadeInView, TextReveal } from "@/components/animations";
import ScaleOnTap from "@/components/animations/ScaleOnHover";
import { useState } from "react";

function InfoCard({
  icon,
  label,
  value,
  delay,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <div>
      <div className="rounded-2xl p-6 flex items-center justify-between gap-6 bg-card border border-custom bg-gradient-to-br from-[rgba(var(--card-gradient),0.04)] to-[rgba(var(--card-gradient),0.0)]">
        <div className="flex items-center gap-4">
          <div className="size-12 grid place-items-center rounded-xl bg-card border border-custom text-accent">
            {icon}
          </div>
          <TextReveal delay={delay} className="text-primary text-lg">
            {label}
          </TextReveal>
        </div>
        <TextReveal
          delay={delay}
          className="text-secondary text-sm whitespace-nowrap"
        >
          {value}
        </TextReveal>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="px-6 sm:px-4 md:px-6 py-10 lg:pt-14 lg:px-14"
      id="contact"
    >
      <FadeInView delay={0.1}>
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-lg tracking-wider uppercase bg-card border border-custom text-secondary px-3 py-1 rounded-full">
            <span className="text-2xl">
              <Mail size={24} />
            </span>
            <span>Contact</span>
          </span>
        </div>
      </FadeInView>

      <TextReveal delay={0.3}>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
          Let's Get in Touch!
        </h2>
      </TextReveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <InfoCard
            delay={0.6}
            icon={<Phone className="size-8" />}
            label="Phone"
            value="+251 987 130 441"
          />
        </div>
        <div>
          <InfoCard
            delay={0.7}
            icon={<Mail className="size-8" />}
            label="Email"
            value="teddytilahun01@gmail.com"
          />
        </div>
        <div className="md:col-span-2">
          <InfoCard
            delay={0.8}
            icon={<MapPinned className="size-8" />}
            label="Address"
            value="Addis Ababa, Ethiopia"
          />
        </div>
      </div>

      <TextReveal delay={0.8}>
        <h3 className="mt-12 text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
          Let's make your project
          <br /> brilliant!
        </h3>
      </TextReveal>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-card border border-custom px-4 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 bg-gradient-to-br from-[rgba(var(--card-gradient),0.04)] to-[rgba(var(--card-gradient),0.0)]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-card border border-custom px-4 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 bg-gradient-to-br from-[rgba(var(--card-gradient),0.04)] to-[rgba(var(--card-gradient),0.0)]"
        />
        <div className="md:col-span-2">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={6}
            required
            disabled={isSubmitting}
            className="w-full rounded-xl bg-card border border-custom px-4 py-3 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 bg-gradient-to-br from-[rgba(var(--card-gradient),0.04)] to-[rgba(var(--card-gradient),0.0)] "
          />
        </div>

        {/* Status Message */}
        {submitStatus !== "idle" && (
          <div className="md:col-span-2">
            <div
              className={`p-3 rounded-lg text-sm ${
                submitStatus === "success"
                  ? " text-primary "
                  : "bg-primary text-red-800"
              }`}
            >
              {statusMessage}
            </div>
          </div>
        )}

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-accent text-accent-secondary hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="size-4" />
            <ScaleOnTap>
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </ScaleOnTap>
          </button>
        </div>
      </form>
    </section>
  );
}
