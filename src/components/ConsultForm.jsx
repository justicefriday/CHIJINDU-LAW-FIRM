import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  serviceOptions,
  contactMethods,
  urgencyOptions,
  sourceOptions,
  buildWhatsAppLink,
} from "../data/consult";

const STEP_COUNT = 3;

const initialForm = {
  service: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  preferredContact: "",
  propertyLocation: "",
  description: "",
  urgency: "",
  source: "",
};

export default function ConsultForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const goTo = (n) => {
    setError("");
    setStep(n);
  };

  const handleSubmit = () => {
    if (!form.email.trim() || !form.description.trim()) {
      setError("Please fill in at least your email address and a description of your matter.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Wire your real submission (email service / API / CRM) in here.
  };

  const reset = () => {
    setForm(initialForm);
    setStep(1);
    setSubmitted(false);
  };

  return (
    <section id="consult" className="bg-brand-ivory py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-brand-gold">
            Get Started
          </span>
          <div className="w-12 h-0.5 bg-brand-gold my-4 mx-auto" />
          <h2 className="font-display font-bold text-brand-navy text-[1.9rem] sm:text-[2.4rem]">
            Request a Consultation
          </h2>
        </div>

        <WhatsAppShortcut selectedService={form.service} />

        <div className="max-w-[840px] mx-auto bg-brand-white shadow-[0_12px_48px_rgba(13,31,60,0.16)]">
          {!submitted ? (
            <>
              <FormHeader step={step} onStepClick={goTo} />
              <div className="p-6 sm:p-10 lg:p-12">
                {step === 1 && (
                  <Step1 form={form} update={update} onNext={() => goTo(2)} />
                )}
                {step === 2 && (
                  <Step2
                    form={form}
                    update={update}
                    onBack={() => goTo(1)}
                    onNext={() => goTo(3)}
                  />
                )}
                {step === 3 && (
                  <Step3
                    form={form}
                    update={update}
                    onBack={() => goTo(2)}
                    onSubmit={handleSubmit}
                    error={error}
                  />
                )}
              </div>
            </>
          ) : (
            <SuccessScreen onReset={reset} />
          )}
        </div>
      </div>
    </section>
  );
}

function WhatsAppShortcut({ selectedService }) {
  return (
    <a
      href={buildWhatsAppLink(selectedService)}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[840px] mx-auto mb-6 flex items-center justify-center gap-3 bg-whatsapp/10 border border-whatsapp/30 text-brand-navy px-6 py-4 no-underline transition-all duration-300 hover:bg-whatsapp/15 hover:border-whatsapp"
    >
      <MessageCircle size={20} className="text-whatsapp shrink-0" />
      <span className="text-[0.85rem] sm:text-[0.9rem] font-medium text-center">
        In a hurry? <span className="font-semibold">Chat with us on WhatsApp</span> instead of filling the form.
      </span>
    </a>
  );
}

function FormHeader({ step, onStepClick }) {
  return (
    <div className="bg-brand-navy px-6 sm:px-10 lg:px-12 py-8 sm:py-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      <div>
        <h3 className="font-display text-[1.4rem] sm:text-[1.6rem] text-brand-ivory">
          Tell Us About Your Matter
        </h3>
        <p className="text-[0.8rem] sm:text-[0.83rem] text-brand-ivory/60 mt-1">
          Complete the form and a member of our team will contact you within 24 hours.
        </p>
      </div>
      <div className="flex gap-2 items-center self-start sm:self-auto">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => n < step && onStepClick(n)}
            aria-label={`Step ${n}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              n === step
                ? "w-6 bg-brand-gold"
                : n < step
                ? "w-2.5 bg-brand-gold/70 cursor-pointer"
                : "w-2.5 bg-brand-gold/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Step1({ form, update, onNext }) {
  return (
    <StepShell
      title="What brings you to us?"
      desc="Step 1 of 3 — Select the service that best describes your need"
      footer={
        <FormNav progress="Step 1 of 3">
          <PrimaryButton onClick={onNext}>Continue →</PrimaryButton>
        </FormNav>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {serviceOptions.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-3 px-5 py-4 border cursor-pointer transition-all duration-200 ${
              form.service === opt.value
                ? "border-brand-gold bg-brand-gold/10"
                : "border-brand-ivoryWarm hover:border-brand-navy hover:bg-brand-ivory"
            }`}
          >
            <input
              type="radio"
              name="service"
              value={opt.value}
              checked={form.service === opt.value}
              onChange={update("service")}
              className="hidden"
            />
            <span className="text-[1.4rem] shrink-0">{opt.icon}</span>
            <div>
              <div className="text-[0.84rem] font-medium text-brand-text">{opt.label}</div>
              <div className="text-[0.72rem] text-brand-textLt mt-0.5">{opt.sub}</div>
            </div>
          </label>
        ))}
      </div>
    </StepShell>
  );
}

function Step2({ form, update, onBack, onNext }) {
  return (
    <StepShell
      title="Your Contact Details"
      desc="Step 2 of 3 — So we can reach you"
      footer={
        <FormNav progress="Step 2 of 3">
          <OutlineButton onClick={onBack}>← Back</OutlineButton>
          <PrimaryButton onClick={onNext}>Continue →</PrimaryButton>
        </FormNav>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First Name *">
          <input type="text" placeholder="Firstname" value={form.firstName} onChange={update("firstName")} className={inputClass} />
        </Field>
        <Field label="Last Name *">
          <input type="text" placeholder="Lastname" value={form.lastName} onChange={update("lastName")} className={inputClass} />
        </Field>
        <Field label="Email Address *">
          <input type="email" placeholder="you@email.com" value={form.email} onChange={update("email")} className={inputClass} />
        </Field>
        <Field label="Phone / WhatsApp *">
          <input type="tel" placeholder="+234 or +1..." value={form.phone} onChange={update("phone")} className={inputClass} />
        </Field>
        <Field label="Location (City, Country)">
          <input type="text" placeholder="e.g. Lagos, Nigeria" value={form.location} onChange={update("location")} className={inputClass} />
        </Field>
        <Field label="Preferred Contact Method">
          <select value={form.preferredContact} onChange={update("preferredContact")} className={inputClass}>
            <option value="">Select...</option>
            {contactMethods.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </Field>
      </div>
    </StepShell>
  );
}

function Step3({ form, update, onBack, onSubmit, error }) {
  return (
    <StepShell
      title="Tell Us About Your Matter"
      desc="Step 3 of 3 — Brief details to help us prepare for your consultation"
      footer={
        <>
          {error && <p className="text-red-600 text-[0.8rem] mb-4">{error}</p>}
          <FormNav progress="Step 3 of 3">
            <OutlineButton onClick={onBack}>← Back</OutlineButton>
            <PrimaryButton onClick={onSubmit}>Submit Request →</PrimaryButton>
          </FormNav>
        </>
      }
    >
      <Field label="Property / Matter Location (if applicable)">
        <input
          type="text"
          placeholder="e.g. Asaba, Delta State or Lekki Phase 1, Lagos"
          value={form.propertyLocation}
          onChange={update("propertyLocation")}
          className={inputClass}
        />
      </Field>
      <Field label="Describe Your Matter *">
        <textarea
          placeholder="Please describe your matter briefly. For due diligence: include the property type, estimated value, and any documents you already hold."
          value={form.description}
          onChange={update("description")}
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Urgency">
          <select value={form.urgency} onChange={update("urgency")} className={inputClass}>
            <option value="">Select...</option>
            {urgencyOptions.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </Field>
        <Field label="How Did You Hear About Us?">
          <select value={form.source} onChange={update("source")} className={inputClass}>
            <option value="">Select...</option>
            {sourceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
    </StepShell>
  );
}

function SuccessScreen({ onReset }) {
  return (
    <div className="text-center px-6 sm:px-10 py-16 sm:py-20">
      <div className="text-[3rem] mb-4">✅</div>
      <h3 className="font-display text-[1.7rem] sm:text-[2rem] text-brand-navy mb-3">
        Consultation Request Received
      </h3>
      <p className="text-[0.9rem] text-brand-textMid max-w-[400px] mx-auto mb-6 leading-relaxed">
        Thank you. A member of our team will review your matter and reach out
        to you within 24 hours. Please check your email and WhatsApp for our
        follow-up.
      </p>
      <button
        onClick={onReset}
        className="text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-navy text-brand-ivory transition-all duration-300 hover:bg-brand-navyMid"
      >
        Submit Another Request
      </button>
    </div>
  );
}

/* ── shared bits ─────────────────────────────────────────── */

function StepShell({ title, desc, children, footer }) {
  return (
    <div className="animate-[chijindu-step-in_0.3s_ease]">
      <h3 className="font-display text-[1.25rem] text-brand-navy mb-1">{title}</h3>
      <p className="text-[0.83rem] text-brand-textLt mb-8">{desc}</p>
      <div className="space-y-5">{children}</div>
      <div className="mt-9 pt-7 border-t border-brand-ivoryWarm">{footer}</div>
      <style>{`
        @keyframes chijindu-step-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function FormNav({ progress, children }) {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
      <span className="text-[0.72rem] tracking-widest text-brand-textLt">{progress}</span>
      <div className="flex gap-3">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[0.72rem] font-semibold tracking-wide uppercase text-brand-textMid mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-gold text-brand-navyDark transition-all duration-300 hover:bg-brand-goldLt hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-transparent text-brand-textMid border border-brand-ivoryWarm transition-all duration-300 hover:border-brand-navy hover:text-brand-navy"
    >
      {children}
    </button>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-brand-ivoryWarm bg-brand-ivory text-[0.9rem] text-brand-text outline-none transition-colors duration-200 focus:border-brand-navy focus:bg-brand-white";