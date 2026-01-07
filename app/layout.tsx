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
       {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PP4D7B73');
          `}
        </Script>
      </head>
      <body>
       {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PP4D7B73"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
{/* End Tag Manager */}
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
