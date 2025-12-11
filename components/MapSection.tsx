export function MapSection() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5847019196844!2d-58.569923200000005!3d-34.614661700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb816edb0ecf1%3A0x354db625df0390f8!2sRectificadora%20de%20motores%20y%20Taller%20Mec%C3%A1nico%20Integral%20JR%20Tecnolog%C3%ADa%20Automotriz%20S.A.!5e0!3m2!1ses-419!2sar!4v1765394424961!5m2!1ses-419!2sar";

  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="w-[80%] h-[450px] rounded-xl overflow-hidden shadow-xl">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del negocio"
        />
      </div>
    </div>
  );
}
