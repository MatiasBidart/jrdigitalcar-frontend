import ListComponent from "./ListComponent";

export default function ServiceCard({
  image,
  title,
  description,
  icon,
}) {
  return (
    <ListComponent
      classes="relative w-full max-w-[420px] h-full overflow-hidden rounded-lg group bg-white"
    >
      {{
        firstSlot: (
          <>
            {/* Imagen siempre visible */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />

            {/* BARRA INFERIOR (estado normal) */}
            <div
              className={`
                absolute bottom-0 left-0 right-0 bg-white
                flex items-center gap-3 px-4 py-3
                transition-all duration-500
                group-hover:opacity-0 group-hover:translate-y-4
              `}
            >
              {icon && <img src={icon} className="w-5 h-5" />}
              <span className="font-semibold text-gray-900">{title}</span>
            </div>

            {/* OVERLAY ROJO (estado hover) */}
            <div
              className={`
                absolute inset-0 bg-red-700 text-white p-6 flex flex-col justify-center
                opacity-0 translate-y-4 transition-all duration-500
                group-hover:opacity-100 group-hover:translate-y-0
              `}
            >
              <div className="flex items-center gap-2">
                {icon && <img src={icon} className="w-6 h-6 invert" />}
                <h3 className="text-xl font-bold">{title}</h3>
              </div>

              <p className="mt-3 text-sm leading-tight opacity-90">
                {description}
              </p>

              <span className="mt-5 text-sm font-semibold underline">
                LEER MÁS
              </span>
            </div>
          </>
        ),

        secondSlot: null, // no lo usamos pero lo dejamos por compatibilidad
      }}
    </ListComponent>
  );
}
