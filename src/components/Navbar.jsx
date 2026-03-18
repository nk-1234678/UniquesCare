import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        style={{
          background: "#fff",
          borderBottom: "1.5px solid #E0E0E0",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Container wrapper */}
        <div
          className="max-w-6xl mx-auto px-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64, // thoda height increase kiya
          }}
        >
          {/* Logo */}
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#C0272D",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="mono"
                  style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}
                >
                  UC
                </span>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>
                  UNIQUE <span style={{ color: "#C0272D" }}>CARE</span>
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#aaa",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Smart Lab Maintenance
                </div>
              </div>
            </div>
          </Link>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.name} to={item.path} className="nav-a">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-outline" style={{ padding: "7px 16px" }}>
              Sign In
            </button>
            <Link to="/signup">
              <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#C0272D",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              
            >
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;