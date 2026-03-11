import React from 'react'

const STATS = [
  { value: "< 2 min", label: "Complaint Submission" },
  { value: "99%", label: "Target Uptime" },
  { value: "4", label: "User Roles" },
  { value: "< 2s", label: "API Response Time" },
];

function Herosection() {
  return (
    <div>
      {/* HERO */}
      <section style={{ background: "#fff", borderBottom: "1.5px solid #E0E0E0", padding: "60px 0" }}>
        <div className="wrap">
          <div style={{ marginBottom: 20 }}>
            <span className="tag tag-red">Smart Lab Automation · v1.0 · March 2026</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Left */}
            <div>
              <h1 style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.1, marginBottom: 18 }}>
                Lab Maintenance,<br /><span style={{ color: "#C0272D" }}>Reimagined.</span>
              </h1>
              <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginBottom: 28 }}>
                Replace paper registers with a QR-driven complaint system. Every issue is tracked, assigned, and resolved with full transparency.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn-red">Start Scanning →</button>
                <button className="btn-outline">View Architecture</button>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: 36, paddingTop: 28, borderTop: "1.5px solid #E0E0E0" }}>
                {STATS.map((s, i) => (
                  <div key={i} style={{ borderRight: i < 3 ? "1.5px solid #E0E0E0" : "none", paddingRight: 16, paddingLeft: i > 0 ? 16 : 0 }}>
                    <div className="mono" style={{ fontSize: 19, fontWeight: 700, color: "#C0272D" }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#999", marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Complaint form mockup */}
            <div className="box" style={{ overflow: "hidden" }}>
              {/* Header */}
              <div style={{ background: "#C0272D", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>Complaint Portal</div>
                  <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginTop: 1 }}>Computer Lab · A Block · CSA-01</div>
                </div>
                <div className="mono" style={{ background: "#fff", color: "#C0272D", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 2 }}>QR LINKED</div>
              </div>

              {/* Form */}
              <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Category */}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>Issue Category</div>
                  <div style={{ border: "1.5px solid #E0E0E0", borderRadius: 4, padding: "8px 12px", fontSize: 13, background: "#FAFAFA", display: "flex", justifyContent: "space-between", color: "#333" }}>
                    <span>Electrical</span><span style={{ color: "#bbb" }}>▾</span>
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>Urgency Level</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["Low","Medium","High","Critical"].map((u, i) => (
                      <div key={u} style={{ flex: 1, textAlign: "center", padding: "6px 0", fontSize: 11, fontWeight: 600, borderRadius: 4, border: `1.5px solid ${i===2?"#C0272D":"#E0E0E0"}`, background: i===2?"#C0272D":"#fff", color: i===2?"#fff":"#888", cursor: "pointer" }}>{u}</div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>Description</div>
                  <div style={{ border: "1.5px solid #E0E0E0", borderRadius: 4, padding: "8px 12px", fontSize: 13, color: "#bbb", background: "#FAFAFA", height: 52 }}>Projector not turning on since morning...</div>
                </div>

                {/* Photo */}
                <div style={{ border: "1.5px dashed #D0D0D0", borderRadius: 4, padding: "9px 12px", fontSize: 12, color: "#bbb", textAlign: "center", background: "#FAFAFA" }}>
                  📎 Attach photo (optional)
                </div>

                <button className="btn-red" style={{ width: "100%" }}>Submit Complaint</button>
              </div>

              {/* Ticket footer */}
              <div style={{ borderTop: "1.5px solid #E0E0E0", padding: "9px 18px", background: "#FAFAFA", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: "#C0272D" }}>UC-2024-0042</span>
                <span style={{ fontSize: 11, color: "#888" }}>● Ticket auto-generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection