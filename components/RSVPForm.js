"use client";

import { useState } from 'react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', guests: 1, message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center" style={{ marginBottom: '1rem' }}>Confirma tu Asistencia</h2>
        <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>
          Por favor confirma antes del 1 de Septiembre
        </p>

        {status === 'success' ? (
          <div style={{ 
            padding: '2rem', 
            background: 'var(--color-cream)', 
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            border: '1px solid var(--primary)'
          }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>¡Gracias por confirmar!</h3>
            <p>Nos vemos en la boda.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn btn-outline"
              style={{ marginTop: '1rem' }}
            >
              Enviar otra respuesta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre Completo</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #ddd',
                  fontSize: '1rem'
                }}
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Número de Personas</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  background: 'white'
                }}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mensaje (Opcional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #ddd',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="¿Alguna alergia o comentario?"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'loading'}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {status === 'loading' ? 'Enviando...' : 'Confirmar Asistencia'}
            </button>

            {status === 'error' && (
              <p style={{ color: 'var(--color-error)', textAlign: 'center' }}>
                Hubo un error al enviar. Por favor intenta de nuevo.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
