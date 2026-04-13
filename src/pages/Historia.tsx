
// Imagenes
import panoramica from "../assets/history_pictures/panoramica.jpg";
import pasillo from "../assets/history_pictures/pasillo.jpg";
import actividades from "../assets/history_pictures/actividades.jpg";
import arbol from "../assets/history_pictures/arbol.jpg";

const history_text = [
    `El Área Natural Protegida Eca do Queiros fue concebido como un refugio verde en medio de la ciudad, un lugar pensado no solo para descansar,
    sino para descubrir, convivir y desconectarse del ritmo urbano.`,
    
    `Con el paso del tiempo, este espacio ha ido transformándose, integrando nuevas áreas y mejorando sus instalaciones, lo que lo convierte hoy
    en un sitio lleno de vida, donde siempre hay algo nuevo por explorar.`,

    `Actualmente, el parque no es solo un punto de encuentro, sino una experiencia completa: puedes disfrutar de actividades culturales,
    hacer ejercicio al aire libre o simplemente relajarte rodeado de naturaleza. Además, es un excelente espacio para pasear con perros,
    convivir en familia o pasar un momento tranquilo.`,

    `Entre sus atractivos destacan su vivero, ideal para los amantes de las plantas, y su cafetería, perfecta para hacer una pausa y
    disfrutar del entorno. Sin duda, es un lugar que invita a visitarlo y vivirlo.`
];


const Historia = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl w-full">
                <h1 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1b4332" }}>
                    Nuestra Historia
                </h1>

                <div className="space-y-12">
                    <section className="space-y-6 text-center px-4 lg:px-0">
                        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            {history_text[0]}
                        </p>
                        <img src={panoramica} alt="Panorámica" className="mx-auto rounded-xl shadow-md w-full max-w-2xl object-cover" />
                    </section>

                    <section className="flex flex-col lg:flex-row items-center gap-6 text-left px-4 lg:px-0">
                        <img src={pasillo} alt="Pasillo" className="w-full lg:w-5/12 rounded-xl shadow-md object-cover max-h-[380px]" />
                        <p className="text-lg text-gray-700 leading-relaxed lg:w-7/12">
                            {history_text[1]}
                        </p>
                    </section>

                    <section className="flex flex-col lg:flex-row items-center gap-6 text-left px-4 lg:px-0">
                        <p className="text-lg text-gray-700 leading-relaxed lg:w-7/12">
                            {history_text[2]}
                        </p>
                        <img src={actividades} alt="Actividades" className="w-full lg:w-5/12 rounded-xl shadow-md object-cover max-h-[380px]" />
                    </section>

                    <section className="flex flex-col lg:flex-row items-center gap-6 text-left px-4 lg:px-0">
                        <img src={arbol} alt="Árbol" className="w-full lg:w-5/12 rounded-xl shadow-md object-cover max-h-[380px]" />
                        <p className="text-lg text-gray-700 leading-relaxed lg:w-7/12">
                            {history_text[3]}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Historia;