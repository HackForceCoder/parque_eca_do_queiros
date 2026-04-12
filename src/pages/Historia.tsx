const history_text =
    `
    El Área Natural Protegida Eca do Queiros fue concebido como un refugio verde en medio de la ciudad, un lugar pensado no solo para descansar,
    sino para descubrir, convivir y desconectarse del ritmo urbano.
    
    Con el paso del tiempo, este espacio ha ido transformándose, integrando nuevas áreas y mejorando sus instalaciones, lo que lo convierte hoy
    en un sitio lleno de vida, donde siempre hay algo nuevo por explorar.

    Actualmente, el parque no es solo un punto de encuentro, sino una experiencia completa: puedes disfrutar de actividades culturales,
    hacer ejercicio al aire libre o simplemente relajarte rodeado de naturaleza. Además, es un excelente espacio para pasear con perros,
    convivir en familia o pasar un momento tranquilo. Entre sus atractivos destacan su vivero, ideal para los amantes de las plantas,
    y su cafetería, perfecta para hacer una pausa y disfrutar del entorno. Sin duda, es un lugar que invita a visitarlo y vivirlo.
    `;

const Historia = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1b4332" }}>
                    Nuestra Historia
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {history_text}
                </p>
            </div>
        </div>
    )
}

export default Historia;