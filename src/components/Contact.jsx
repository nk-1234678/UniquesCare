import { useState } from "react";



const faqs = [
  {
    question: "What makes UNIQUE CARE different?",
    answer:
      "UNIQUE CARE provides an end-to-end platform designed specifically for diagnostic labs. It replaces manual paperwork with a centralized digital system that tracks equipment status, maintenance schedules, compliance records, and performance metrics in real time. By automating routine workflows and reducing human error, labs can improve operational efficiency, ensure better compliance, and focus more on delivering accurate diagnostic services.",
    defaultOpen: true,
  },
  {
    question: "How does UNIQUE CARE work?",
    answer:
      "UNIQUE CARE works as a cloud-based platform that integrates smoothly with your existing lab processes. After onboarding your equipment and assigning user roles to technicians, managers, and administrators, the system begins tracking activities such as maintenance requests, equipment health, service history, and reporting. Everything is accessible through a single dashboard, giving teams better visibility and faster decision-making.",
  },
  {
    question: "Why should I trust UNIQUE CARE?",
    answer:
      "Data security and reliability are core priorities for UNIQUE CARE. Our platform follows strict data-protection practices and is built with enterprise-grade security standards. We collaborate with certified diagnostic labs across India and continuously improve the platform through regular updates and third-party security reviews. This ensures that sensitive operational and lab data remains protected at all times.",
  },
  {
    question: "How does UNIQUE CARE scale?",
    answer:
      "UNIQUE CARE is built on scalable cloud infrastructure that can support both small laboratories and large multi-location lab networks. Whether you operate a single diagnostic center or manage multiple branches across cities, the platform adapts easily to your needs. With modular pricing, flexible user roles, and centralized reporting, organizations can expand their operations without worrying about system limitations.",
  },
];

const contactInfoItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Mail Address",
    value: "support@uniquecare.io",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.43 2 2 0 0 1 3.54 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l1.61-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone Number",
    value: "+91 98765 43210",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Main Location",
    value: "Sector 62, Noida, India",
    sub: "Mon–Sat, 9am–6pm IST",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Live Chat",
    value: "Available 24 / 7",
  },
];

function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="box"
      style={{
        borderColor: open ? "#C0272D" : "#E0E0E0",
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: open ? "#C0272D" : "#1A1A1A" }}>
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 26,
            height: 26,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: open ? "#C0272D" : "#F5F5F5",
            border: open ? "none" : "1.5px solid #E0E0E0",
            transition: "background 0.2s",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#fff" : "#999"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && (
        <div style={{ padding: "0 20px 18px" }}>
          <hr className="divider" style={{ marginBottom: 14 }} />
          <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7 }}>{answer}</p>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  background: "#fff",
  border: "1.5px solid #E0E0E0",
  borderRadius: 4,
  color: "#1A1A1A",
  fontSize: 13.5,
  padding: "10px 14px",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function Field({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#999",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const focusStyle = (name) =>
    focused === name
      ? { ...inputStyle, borderColor: "#C0272D", boxShadow: "0 0 0 3px rgba(192,39,45,0.08)" }
      : inputStyle;

  return (
    <>

      {/* ── FORM + INFO ── */}
      <section style={{ padding: "56px 0" }} className="wrap">
        <div className="wrap" >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* LEFT — Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* First + Last */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="First Name *">
                  <input
                    type="text"
                    placeholder="First Name"
                    style={focusStyle("first")}
                    onFocus={() => setFocused("first")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
                <Field label="Last Name *">
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={focusStyle("last")}
                    onFocus={() => setFocused("last")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              {/* Email + Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Field label="Your Email">
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={focusStyle("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    style={focusStyle("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </Field>
              </div>

              {/* No. of Employees */}
              <Field label="No. of Employees">
                <select
                  defaultValue=""
                  style={{
                    ...focusStyle("emp"),
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    appearance: "none",
                    WebkitAppearance: "none",
                    color: "#999",
                  }}
                  onFocus={() => setFocused("emp")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled>Self employed</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </Field>

              {/* Country */}
              <Field label="Country / Region *">
                <input
                  type="text"
                  placeholder="Country Name"
                  style={focusStyle("country")}
                  onFocus={() => setFocused("country")}
                  onBlur={() => setFocused(null)}
                />
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="btn-red"
                style={{
                  marginTop: 4,
                  padding: "12px 24px",
                  fontSize: 14,
                  background: submitted ? "#2a7a2a" : "#C0272D",
                  borderColor: submitted ? "#2a7a2a" : "#C0272D",
                  transition: "background 0.3s, border-color 0.3s",
                  letterSpacing: "0.04em",
                }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </form>

            {/* RIGHT — Get in Touch */}
            <div>
              <span className="tag tag-red" style={{ marginBottom: 16, display: "inline-block" }}>
                Contact Us
              </span>
              <h2 style={{ fontSize: 34, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 10 }}>
                Get in Touch!
              </h2>
              <p style={{ fontSize: 13.5, color: "#888", lineHeight: 1.75, marginBottom: 28, maxWidth: 340 }}>
                Reach out and we'll connect within 24 hours to discuss your requirements and next steps.
              </p>

              {/* Info list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {contactInfoItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: "#FFF5F5",
                        border: "1.5px solid rgba(192,39,45,0.2)",
                        color: "#C0272D",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bbb", marginBottom: 2 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 13.5, fontWeight: 600, color: "#C0272D" }}>{item.value}</p>
                      {item.sub && (
                        <p style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>{item.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ DIVIDER ── */}
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <hr className="divider" style={{ flex: 1 }} />
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#ccc" }}>
            FAQ
          </span>
          <hr className="divider" style={{ flex: 1 }} />
        </div>
      </div>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 0 80px" }} className="wrap">
        <div className="wrap">
          <h2
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#1A1A1A",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            General Questions.
          </h2>

          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}