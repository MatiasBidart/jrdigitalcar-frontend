import HorizontalCard from './HorizontalCard'

const InfoComponent = () => {
  return (
    <div className='h-auto'>
        <div className='h-auto m-4 text-center grid grid-rows'>
          <div className='flex flex-col'>
            <section className='flex items-end justify-center text-xl font-bold text-gray-600 mt-10'>JR DIGITAL CAR</section>
            <section className='flex flex-col sm:flex-row justify-between p-4 items-center'> 
              <p className='p-4 text-xs md:text-base text-gray-600'>
                Somos una <b>RECTIFICADORA</b> de motores y tapas de cilindros con servicio integral de mecánica, electrónica. Nos destacamos en la atención a empresas privadas y estatales, conociendo sus procesos de cerca y adaptando nuestras soluciones. Durante más de 30 años de trayectoria vivímos todo tipo de contextos, hemos permanecido vigentes por una <b>renovación constante</b> y <b>apostar a las nuevas tecnologías</b>.
                <br></br>
                Nuestro objetivo, es ser una empresa líder, superando inclusive los estándares de calidad del fabricante automotriz, todo a través del trabajo en equipo y una <b>actualización constante</b>. Nuestra misión es brindar un servicio tecnológico integral a compañías y empresas, garantizando <b>calidad y soluciones del más alto nivel.</b></p>
              <img className='w-40 h-30' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoa7ULpwcn_Kc20xzquP5AFJQIfuJs3fLzpA&s' alt='Esto se va a caer'/>
            </section>
          </div>
          <div className='w-full h-full gap-4 flex flex-col p-1 md:p-2 sm:flex-row'>
            <HorizontalCard key='1' text={{title: '100% Transparencia', desc: 'Usted recibirá un presupuesto detallado sobre cada reparación.'}}>
              {
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              }
            </HorizontalCard>
            <HorizontalCard key='2' text={{title: 'Repuestos Nacionales e Importados', desc: 'Trabajamos con repuestos originales.'}}>
              {
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              }
            </HorizontalCard>
            <HorizontalCard key='3' text={{title:'Confianza & Calidad de Servicio', desc:'30 años en el rubro y múltiples reseñas avalan nuestra trayectoria.'}}>
              {
                <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
              }
            </HorizontalCard>
          </div>
        </div>
    </div>
  )
}

export default InfoComponent