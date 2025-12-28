import "./globals.css";

export const metadata = {
  title: "Nuestra Boda | Angel & Clara",
  description: "Te invitamos a celebrar nuestra boda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
