import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Countdown from "@/components/Countdown";
import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <Countdown />
      <RSVPForm />
      
      <footer className="text-center" style={{ padding: '2rem', background: 'var(--color-cream)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        <p>Hecho con ❤️ para nuestra boda</p>
      </footer>
    </main>
  );
}
