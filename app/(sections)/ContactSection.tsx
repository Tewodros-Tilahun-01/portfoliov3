import { Phone, Mail, MapPinned, Send } from "lucide-react";
import type { JSX } from "react";

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-secondary  p-6 flex items-center justify-between gap-6 bg-[#1a1a1a] border border-custom">
      <div className="flex items-center gap-4">
        <div className="size-12 grid place-items-center rounded-xl bg-[#1a1a1a] border border-custom text-accent">
          {icon}
        </div>
        <div className="text-primary text-lg">{label}</div>
      </div>
      <div className="text-secondary text-sm whitespace-nowrap">{value}</div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="px-2 sm:px-4 md:px-6 py-10" id="contact">
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 text-lg tracking-wider uppercase bg-[#1a1a1a] border border-custom text-secondary px-3 py-1 rounded-full">
          <span className="text-2xl">✉️</span>
          <span>Contact</span>
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
        Let's Get in Touch!
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          icon={<Phone className="size-8" />}
          label="Phone"
          value="+251 987 130 441"
        />
        <InfoCard
          icon={<Mail className="size-8" />}
          label="Email"
          value="teddytilahun01@gamil.com"
        />
        <div className="md:col-span-2">
          <InfoCard
            icon={<MapPinned className="size-8" />}
            label="Address"
            value="Addis Ababa, Ethiopia"
          />
        </div>
      </div>

      <h3 className="mt-12 text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary">
        Let's make your project
        <br /> brilliant!
      </h3>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="h-12 w-full rounded-xl bg-[#1a1a1a] border border-custom  px-4 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="h-12 w-full rounded-xl bg-[#1a1a1a] border border-custom px-4 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <div className="md:col-span-2">
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full rounded-xl bg-[#1a1a1a] border border-custom  px-4 py-3 text-primary placeholder:text-tertiary focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-accent text-accent-secondary hover:opacity-90 transition-opacity"
          >
            <Send className="size-4" />
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </section>
  );
}
