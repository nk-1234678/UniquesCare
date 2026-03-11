import React from 'react'

const STEPS = [
{ n: "01", title: "Scan QR Code", desc: "Each lab has a unique QR sticker. Scan it with your phone camera." },
{ n: "02", title: "Fill the Form", desc: "Choose issue category, urgency level, add a description and optional photo." },
{ n: "03", title: "Ticket Generated", desc: "A unique ticket ID is auto-created. Admin is notified instantly." },
{ n: "04", title: "Staff Assigned", desc: "Admin assigns the complaint to the right maintenance staff member." },
{ n: "05", title: "Work in Progress", desc: "Staff updates status as they work. You can track progress live." },
{ n: "06", title: "Resolved", desc: "Issue marked resolved with notes. Archived for analytics automatically." },
];

const HowItWorks = () => {
return (
    <div>

        {/* HOW IT WORKS */}
    <section id="how-it-works" style={{ background: "#fff", borderBottom: "1.5px solid #E0E0E0" }}>
    <div className="wrap">
        <div style={{ marginBottom: 32 }}>
        <span className="tag">Complaint Lifecycle</span>
        <h2 style={{ fontSize: 30, fontWeight: 700, marginTop: 12, marginBottom: 6 }}>From scan to resolved in 6 steps.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {STEPS.map((s, i) => (
            <div key={i} className="box hover-box" style={{ padding: 22, borderLeft: `4px solid ${i%2===0?"#C0272D":"#3D4F5C"}` }}>
            <div className="mono" style={{ fontSize: 11, color: "#C0272D", fontWeight: 600, marginBottom: 8 }}>{s.n}</div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{s.title}</div>
            <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
        ))}
        </div>
    </div>
    </section>
</div>
)
}

export default HowItWorks