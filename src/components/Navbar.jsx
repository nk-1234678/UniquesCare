import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1.5px solid #E0E0E0", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 }}>
          <Link to="/">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, background: "#C0272D", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>UC</span>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.1 }}>UNIQUE <span style={{ color: "#C0272D" }}>CARE</span></div>
              <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase" }}>Smart Lab Maintenance</div>
            </div>
          </div>
          </Link>
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
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-outline" style={{ padding: "7px 16px" }}>Sign In</button>
            <button className="btn-red" style={{ padding: "7px 16px" }}>Get Started</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar