import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ddPackages } from "../data/dueDiligence";

export default function DueDiligenceBookingModal({ initialPackageId, onClose }) {
  const [packageId, setPackageId] = useState(initialPackageId);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyLocation: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pkg = ddPackages.find((p) => p.id === packageId) ?? ddPackages[0];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Wire your real booking submission here (email service / API / CRM).
    // Everything you need is in { pkg, ...form }.
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto p-4 sm:p-10 bg-brand-navyDark/90 backdrop-blur-sm"
    >
      <div className="relative bg-brand-white max-w-[560px] w-full my-auto max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-brand-ivory/70 hover:text-brand-gold transition-colors z-10"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <SuccessView pkg={pkg} onClose={onClose} />
        ) : (
          <>
            {/* header + live price/turnaround, updates with the dropdown below */}
            <div className="bg-brand-navy px-7 sm:px-9 py-8">
              <div className="text-[0.68rem] tracking-[0.15em] uppercase text-brand-gold mb-2">
                {pkg.location}
              </div>
              <h3 className="font-display text-[1.35rem] text-brand-ivory mb-4">
                Book Your Due Diligence
              </h3>
              <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
                <span className="font-display font-bold text-[1.8rem] text-brand-gold leading-none">
                  {pkg.price}
                </span>
                <span className="text-[0.75rem] text-brand-ivory/60">{pkg.priceNote}</span>
              </div>
              <div className="text-[0.75rem] text-brand-goldLt mt-1.5">
                Turnaround: <strong>{pkg.turnaround}</strong>
              </div>
            </div>

            <div className="p-7 sm:p-9">
              <Field label="Package *">
                <select
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                  className={inputClass}
                >
                  {ddPackages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Field label="Full Name *">
                  <input type="text" placeholder="Your name" value={form.name} onChange={update("name")} className={inputClass} />
                </Field>
                <Field label="Phone / WhatsApp *">
                  <input type="tel" placeholder="+234 or +1..." value={form.phone} onChange={update("phone")} className={inputClass} />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Email Address *">
                  <input type="email" placeholder="you@email.com" value={form.email} onChange={update("email")} className={inputClass} />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Property Location">
                  <input
                    type="text"
                    placeholder="e.g. Asaba, Delta State or Lekki Phase 1, Lagos"
                    value={form.propertyLocation}
                    onChange={update("propertyLocation")}
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Anything else we should know?">
                  <textarea
                    placeholder="Property type, estimated value, documents you already hold, etc."
                    value={form.notes}
                    onChange={update("notes")}
                    rows={3}
                    className={`${inputClass} resize-y`}
                  />
                </Field>
              </div>

              {error && <p className="text-red-600 text-[0.8rem] mt-4">{error}</p>}

              <button
                onClick={handleSubmit}
                className="w-full text-center text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-gold text-brand-navyDark transition-all duration-300 hover:bg-brand-goldLt mt-6"
              >
                Confirm Booking
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SuccessView({ pkg, onClose }) {
  return (
    <div className="text-center px-7 sm:px-9 py-16">
      <div className="text-[3rem] mb-4">✅</div>
      <h3 className="font-display text-[1.5rem] text-brand-navy mb-3">Booking Received</h3>
      <p className="text-[0.88rem] text-brand-textMid max-w-[380px] mx-auto mb-2 leading-relaxed">
        Thank you for booking the <strong>{pkg.title}</strong>. A member of
        our team will reach out within 24 hours to confirm details and next
        steps.
      </p>
      <p className="text-[0.8rem] text-brand-textLt mb-8">
        Turnaround from confirmation: <strong>{pkg.turnaround}</strong>
      </p>
      <button
        onClick={onClose}
        className="text-[0.78rem] font-semibold tracking-widest uppercase px-8 py-4 bg-brand-navy text-brand-ivory transition-all duration-300 hover:bg-brand-navyMid"
      >
        Close
      </button>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[0.7rem] font-semibold tracking-wide uppercase text-brand-textMid mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 border border-brand-ivoryWarm bg-brand-ivory text-[0.9rem] text-brand-text outline-none transition-colors duration-200 focus:border-brand-navy focus:bg-brand-white";