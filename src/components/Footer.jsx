import React from "react"
import { QrCode, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        background: "#fff",
        borderTop: "1.5px solid #E0E0E0",
        padding: "60px 0 28px",
        fontFamily: "'Raleway', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        .footer-wrap{max-width:1300px;margin:auto;padding:0 40px}
        .footer-link{display:block;font-size:16px;color:#666;margin-bottom:10px;text-decoration:none}
        .footer-link:hover{color:#C0272D}
        .footer-col-title{font-size:13px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin-bottom:16px}
      `}</style>

      <div className="footer-wrap">

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.4fr 1fr 1fr 1fr",
            gap: 36,
            marginBottom: 48,
          }}
        >

          {/* BRAND */}
          <div>

            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  background: "#C0272D",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <QrCode size={20} color="#fff" />
              </div>

              <div>
                <div style={{ fontWeight: 800, fontSize: 16 }}>
                  UNIQUE <span style={{ color: "#C0272D" }}>CARE</span>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#aaa",
                    letterSpacing: ".12em",
                  }}
                >
                  Smart Lab Maintenance
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p
              style={{
                fontSize: 16,
                color: "#777",
                lineHeight: 1.7,
                maxWidth: 300,
                marginBottom: 22,
              }}
            >
              A centralized digital platform engineered to automate reporting
              and tracking of maintenance issues across institutional
              laboratories.
            </p>

            {/* Contact Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontSize: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} color="#C0272D" />
                support@uniquecare.io
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={16} color="#C0272D" />
                +1 (555) 123-4567
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} color="#C0272D" />
                San Francisco
              </div>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <div className="footer-col-title">Product</div>

            {footerLinks.product.map((link) => (
              <a key={link.name} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* COMPANY */}
          <div>
            <div className="footer-col-title">Company</div>

            {footerLinks.company.map((link) => (
              <a key={link.name} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* SUPPORT */}
          <div>
            <div className="footer-col-title">Support</div>

            {footerLinks.support.map((link) => (
              <a key={link.name} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: "1.5px solid #E8E8E8",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ fontSize: 14, color: "#000" }}>
            © 2026 UNIQUE CARE · All rights reserved
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{ fontSize: 13, color: "#000", textDecoration: "none" }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer