import React from 'react';
import "../index.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <main data-name="home-main" style={{top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
    <header data-name="home-hero" style={{marginTop: '20vh', textAlign: 'center'}}>
            <h1 style={{letterSpacing: '1.0rem', fontWeight: "600", fontSize: "2.6rem"}}>VI ÄLSKAR IT</h1>
            </header>
    <section data-name="section-1" style={{marginTop: "-5vh", textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div data-name="text-1" style={{maxWidth: '70%'}}>
        <p>Kiwision är en IT-konsultbyrå som specialiserar sig på att skapa skräddarsydda digitala 
            lösningar för företag och organisationer. Med hög spetskompetens och kanske några av 
            Sveriges bästa systemutvecklare har vi lösningarna för just dina IT-behov.
             Vi arbetar nära våra kunder för att förstå deras behov och levererar 
            lösningar med djup kunnighet bakom.</p>
            </div>
            <div data-name="button-wrap" style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
            <Link to="/products" data-name="button-1" style={{margin: '0.2rem', padding: '0.5rem 2rem 0.7rem 2rem', borderRadius: '100px', border: 'none', backgroundColor: '#32B0E1', color: 'white', cursor: 'pointer'}}>UTBUD</Link>
     <Link to="/about" data-name="button-1" style={{margin: '0.2rem', padding: '0.5rem 2rem 0.7rem 2rem', borderRadius: '100px', border: 'none', backgroundColor: '#32B0E1', color: 'white', cursor: 'pointer'}}>OM OSS</Link>

    </div>
    </section>
    <section data-name="section-2" style={{textAlign: 'center'}}>

    </section>
    </main>
    </>
  );
}