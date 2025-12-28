"use client";

import { useState, useEffect } from 'react';
import { Users, MessageSquare, Calendar } from 'lucide-react';

export default function AdminPage() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rsvp')
      .then(res => res.json())
      .then(data => {
        setGuests(data);
        setLoading(false);
      })
      .catch(err => setLoading(false));
  }, []);

  const totalGuests = guests.reduce((acc, curr) => acc + (curr.guests || 0), 0);

  if (loading) return <div className="section text-center">Cargando...</div>;

  return (
    <main className="section" style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>Panel de Invitados</h1>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <strong>Total Confirmados:</strong> {totalGuests}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {guests.length === 0 ? (
            <p className="text-center">No hay confirmaciones aún.</p>
          ) : (
            guests.map(guest => (
              <div key={guest.id} style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{guest.name}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={16} /> {guest.guests} personas
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} /> {new Date(guest.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  {guest.message && (
                    <div style={{ marginTop: '1rem', padding: '0.5rem', background: '#f9f9f9', borderRadius: '4px', fontSize: '0.9rem' }}>
                      <MessageSquare size={14} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                      {guest.message}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
