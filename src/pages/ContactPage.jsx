import React from 'react'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif",
      background: "#F5F5F5",
      color: "#1A1A1A",
      minHeight: "100vh"
    }}>

      {/* PAGE HEADER */}

      <section style={{ padding: "70px 0 20px" }} className='wrap'>

        <div className="wrap" style={{ textAlign: "center" }}>

          <p style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C0272D",
            marginBottom: 8
          }}>
            UNIQUE CARE / CONTACT
          </p>

          <h1 style={{
            fontSize: 44,
            fontWeight: 700,
            marginBottom: 10
          }}>
            Contact Us
          </h1>

          <p style={{
            fontSize: 15,
            color: "#777",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7
          }}>
            Have questions or want to work with us?  
            Reach out to the UNIQUE CARE team and we will get back to you shortly.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="wrap">
        <div className="wrap">
          <Contact />
        </div>
      </section>

    </div>
  )
}

export default ContactPage