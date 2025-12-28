import { MapPin, Clock } from 'lucide-react';

export default function Details() {
  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', textAlign: 'center' }}>
          
          <div className="detail-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'var(--color-cream)' }}>
              <Clock size={32} color="var(--primary)" />
            </div>
            <h3>Ceremonia</h3>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              <strong>4:00 PM</strong>
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Parroquia San José<br />
              Av. Principal 123
            </p>
          </div>

          <div className="detail-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'var(--color-cream)' }}>
              <MapPin size={32} color="var(--primary)" />
            </div>
            <h3>Recepción</h3>
            <p style={{ margin: '1rem 0', fontSize: '1.1rem' }}>
              <strong>6:00 PM</strong>
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Salón Los Olivos<br />
              Calle de las Flores 456
            </p>
            <a href="#" className="btn btn-outline" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
              Ver Mapa
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
