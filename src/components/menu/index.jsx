import { useEffect, useRef, useState } from "react";

export default function MenuFlotante() {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [mostrarScrollTop, setMostrarScrollTop] = useState(false);
    const tarjetaRef = useRef(null);

    const toggleMenu = () => {
        setMostrarMenu((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!tarjetaRef.current) return;

            const tarjetaBottom = tarjetaRef.current.getBoundingClientRect().bottom;
            if (tarjetaBottom <= 0) {
                setMostrarScrollTop(true);
            } else {
                setMostrarScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            {/* Esta es la tarjeta principal que queremos detectar */}
            <div ref={tarjetaRef} id="tarjeta-principal" style={{ height: "400px" }}>
                {/* Aquí puede ir la tarjeta, por ahora sólo es un placeholder */}
            </div>
            <nav className="menu_scale-up fade-away">

                {/* BOTÓN HAMBURGUESA - sólo visible en móviles */}
                <button
                    onClick={toggleMenu}
                    className="fixed bottom-6 left-4 z-50 sm:hidden bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* MENÚ FLOTANTE */}
                {mostrarMenu && (
                    <div
                        id="menu-flotante"
                        className="fixed z-50 bottom-[7%] left-1/2 transform -translate-x-1/2 bg-[#f0f0f0]/90 border-2 border-black text-xl sm:text-2xl md:text-3xl rounded-3xl text-center p-4 w-[90%] max-w-xl flex flex-col sm:flex-row justify-center items-center gap-4 shadow-md"
                    >
                        <a
                            href="#proyects"
                            className="text-blue-500 hover:text-blue-700 hover:underline"
                            onClick={() => setMostrarMenu(false)}
                        >
                            Proyectos
                        </a>
                        <a
                            href="#skills"
                            className="text-blue-500 hover:text-blue-700 hover:underline"
                            onClick={() => setMostrarMenu(false)}
                        >
                            Tecnologías
                        </a>
                        <a
                            href="#contact"
                            className="text-blue-500 hover:text-blue-700 hover:underline"
                            onClick={() => setMostrarMenu(false)}
                        >
                            Contacto
                        </a>
                        <a
                            href="#about"
                            className="text-blue-500 hover:text-blue-700 hover:underline"
                            onClick={() => setMostrarMenu(false)}
                        >
                            Sobre Mi
                        </a>
                    </div>
                )}

            </nav>


            {/* BOTÓN SCROLL TO TOP (sólo cuando hay menú visible) */}
            {mostrarScrollTop && (
                <div
                    className="fixed bottom-6 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 md:w-8 md:h-8"
                    >
                        <path d="M12 2l-10 10h6v8h8v-8h6L12 2z" />
                    </svg>
                </div>
            )}
        </section>
    );
}