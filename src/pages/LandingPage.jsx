
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";
import Cta from "../components/cta";
import Tech from "../components/Tech";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import Tech1 from "../components/Tech1";









export default function App() {


  return (
    <div style={{ fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif", background: "#F5F5F5", color: "#1A1A1A", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'IBM Plex Sans', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        .box { background: #fff; border: 1.5px solid #E0E0E0; border-radius: 4px; }
        .hover-box { transition: box-shadow 0.2s, transform 0.2s; }
        .hover-box:hover { box-shadow: 4px 4px 0 #C0272D; transform: translate(-1px,-1px); }
        .btn-red { background: #C0272D; color: #fff; border: 1.5px solid #C0272D; border-radius: 4px; padding: 10px 22px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
        .btn-red:hover { background: #a81f25; }
        .btn-outline { background: #fff; color: #1A1A1A; border: 1.5px solid #1A1A1A; border-radius: 4px; padding: 10px 22px; font-size: 14px; font-weight: 600; cursor: pointer; font-family: inherit; }
        .btn-outline:hover { background: #1A1A1A; color: #fff; }
        .tag { display: inline-block; border: 1.5px solid #E0E0E0; border-radius: 2px; padding: 3px 10px; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #999; background: #fff; }
        .tag-red { border-color: #C0272D; color: #C0272D; background: #FFF5F5; }
        .nav-a { font-size: 14px; color: #555; text-decoration: none; }
        .nav-a:hover { color: #C0272D; }
        .role-btn { padding: 8px 18px; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer; border: 1.5px solid #E0E0E0; background: #fff; color: #555; font-family: inherit; transition: all 0.15s; }
        .role-btn.active { background: #C0272D; border-color: #C0272D; color: #fff; }
        .divider { border: none; border-top: 1.5px solid #E0E0E0; }
        section { padding: 64px 0; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    `}</style>

    

    <Herosection/>

    <Features/>

    <HowItWorks/>

    <Tech1/>
    
    <Tech/>

    <Cta/>

    
    </div>
);
}
