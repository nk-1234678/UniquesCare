import React from 'react'

const FEATURES = [
  { icon: "⬛", title: "QR-Based Reporting", desc: "Scan a lab QR code and submit a complaint in under 2 minutes — no manual selection needed." },
  { icon: "🔒", title: "Role-Based Access", desc: "Students, Lab Assistants, Maintenance Staff, and Admins each get their own tailored view." },
  { icon: "🕐", title: "Real-Time Tracking", desc: "Follow every complaint from Pending → Assigned → In Progress → Resolved, live." },
  { icon: "📊", title: "Analytics Dashboard", desc: "Monthly reports, resolution trends, category breakdowns, and staff performance scores." },
  { icon: "☁️", title: "Cloud Storage", desc: "All complaints and images stored securely in MongoDB Atlas and Cloudinary CDN." },
  { icon: "📄", title: "Paperless System", desc: "Fully replaces physical registers across every lab in your institution." },
];

const Features = () => {
return (
    <div>

    {/* FEATURES */}
    <section id="features" style={{ background: "#F5F5F5", borderBottom: "1.5px solid #E0E0E0" }}>
    <div className="wrap">
        <div style={{ marginBottom: 32 }}>
        <span className="tag">Platform Features</span>
        <h2 style={{ fontSize: 30, fontWeight: 700, marginTop: 12, marginBottom: 6 }}>Everything your team needs.</h2>
        <p style={{ color: "#666", fontSize: 15 }}>Built for institutional environments, around real maintenance workflows.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {FEATURES.map((f, i) => (
            <div key={i} className="box hover-box" style={{ padding: 22 }}>
            <div style={{ width: 38, height: 38, border: "1.5px solid #E0E0E0", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontSize: 16, background: "#FAFAFA" }}>{f.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{f.desc}</div>
            </div>
        ))}
        </div>
    </div>
    </section>
</div>
)
}

export default Features