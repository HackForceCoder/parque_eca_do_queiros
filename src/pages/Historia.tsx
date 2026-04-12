const history_text =
    `El Área Natural Protegida Eca do Queiros fue establecida en 1995 con el objetivo de preservar la biodiversidad local y ofrecer
    un espacio de recreación para la comunidad.
    
    A lo largo de los años, hemos trabajado arduamente para conservar nuestros ecosistemas, promover la educación ambiental y brindar
    servicios de calidad a nuestros visitantes. Hoy en día, somos un referente en la región por nuestra labor en conservación y nuestro
    compromiso con el desarrollo sostenible.`;

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