import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero section text-center animate-fade-in" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <p style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
          Nos casamos
        </p>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', color: 'var(--primary)' }}>
          Angel & Clara
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
          <span style={{ height: '1px', width: '60px', background: 'var(--primary)' }}></span>
          <Heart fill="var(--primary)" color="var(--primary)" size={24} />
          <span style={{ height: '1px', width: '60px', background: 'var(--primary)' }}></span>
        </div>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
          25 de Octubre de 2025
        </p>
      </div>
    </section>
  );
}
