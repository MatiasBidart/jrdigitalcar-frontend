import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FixedButton from "@/components/FixedButton";
import Script from "next/script";

export const metadata = {
  title: {
    default: "JR Digital Car | Mecánica Integral Automotriz",          // Título principal
    template: "%s | No detenga su motor",    // Titulos dinámicos
  },
  description: "JR DIGITAL CAR SRL: UNA SOLA RESPONZABILIDAD. 2.000 METROS CUBIERTOS OPERATIVOS. 30 AÑOS DE EXPERIENCIA NOS AVALAN.  PLANTA PROPIA DE RECTIFICACION DE MOTORES Y TAPAS DE CILINDROS. TALLER INTEGRAL MECANICO (ELECTRONICA, FRENOS, GOMERIA, TREN DELANTERO, AMORTIGUADORES, CAJAS DE VELOCIDAD, AIRE ACONDICIONADO, ELECTRICIDAD ETC). RETIRO DE SU VEHICULO CON GRUAS PROPIAS. ATENCION A EMPRESAS CON FLOTA DE VEHICULOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="es">
    <head>
        <meta name="google-site-verification" content="EHnJbwM_DP1rgFP5Oj3ieS9V1CvihDk1ScnWzrYBvj8" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-996575528"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-996575528');
          `}
        </Script>
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FixedButton/>
        </div>
      </body>
    </html>
  );
}
