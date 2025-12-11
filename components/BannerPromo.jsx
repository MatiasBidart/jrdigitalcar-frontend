export default function BannerPromo() {
  return (
    <div className="relative bg-red-700 text-white flex items-center justify-between overflow-hidden"> 
    <section className="flex flex-row w-full justify-between">
        <section className="grid grid-rows-2">
            <div></div>
              {/* Triángulo izquierdo */}
            <div className="left-0 top-0 h-full w-40 bg-white"
                style={{
                clipPath: "polygon( 0% 100%, 100% 100%, 50% 0%, 0% 0%)"
                }}
            />
        </section>
        <section className="flex flex-col justify-center px-6 py-6 mr-26 items-center w-full">
            <h2 className="text-xl font-bold">
                TRABAJAMOS TODAS LAS MARCAS
            </h2>
            <p>Nacionales e Importados</p>
        </section>
        <section className="grid grid-rows-2">
            <div></div>
             {/* Triángulo derecho */}
            <div
            className="absolute right-0 top-0 h-full w-40 bg-white"
            style={{
                clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 0% 100%)"
            }}
            />
        </section>  
      </section>
    </div>
  );
}
