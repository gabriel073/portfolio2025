import { useEffect } from "react";
import { useRef } from "react";

import "./header.css"


function Header() {
    const headerRef = useRef(null); // Ref para el contenedor

    useEffect(() => {
        const elem = headerRef.current; // Accede al elemento del DOM a través del ref

        if (elem) {
            const height = elem.clientHeight;
            const width = elem.clientWidth;

            // Evento de movimiento del mouse
            const handleMouseMove = (evt) => {
                const { layerX, layerY } = evt;

                const yRotation = ((layerX - width / 2) / width) * 15;
                const xRotation = ((layerY - height / 2) / height) * 15;

                const transformString = `
                    perspective(500px)
                    scale(1.1)
              
                    rotateX(${xRotation}deg)
                    rotateY(${yRotation}deg)`;

                elem.style.transform = transformString;
            };

            // Evento cuando el mouse sale del elemento
            const handleMouseOut = () => {
                elem.style.transform = `
                perspective(400px)
                scale(1)
                transition: transform 0.3s ease
                rotateX(0)
                rotateY(0)
                `;
            };

            elem.addEventListener('mousemove', handleMouseMove);
            elem.addEventListener('mouseout', handleMouseOut);

            // Cleanup para evitar memory leaks
            return () => {
                elem.removeEventListener('mousemove', handleMouseMove);
                elem.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, []); // Ejecuta solo una vez después del montaje
    return (

        <div className="flex justify-center items-center min-h-screen bg-black p-4" id="about">
            <div
                ref={headerRef}
                className="border border-solid border-blue-500 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto p-6 bg-cover shadow-indigo-200/80 shadow-2xl transition-all duration-150"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-extrabold text-center mt-4 text-shadow-lg uppercase tracking-tight">
                    Fullstack
                </h1>
                <h2 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-light flex justify-center sm:justify-end sm:mr-10 mt-[-10px] sm:mt-[-28px]">
                    Developer
                </h2>
                <hr className="mt-4 sm:mt-6" />
                <div className="mt-2 p-2 sm:p-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl">Hola, Soy Gabriel Marzioli!</h2>
                </div>
                <div className="flex flex-wrap">
                    <p className="p-4 sm:p-6 mt-2 sm:mt-[-12px] text-shadow-lg font-bold text-center sm:text-left">
                        Desarrollador Frontend con más de 2 años de experiencia, especializado en la creación de interfaces web dinámicas y responsivas.
                        Con sólidos conocimientos en <span className="text-red-700">HTML</span>, <span className="text-red-700">CSS3</span>,
                        <span className="text-red-700">JavaScript</span> y frameworks modernos como <span className="text-red-700">React</span>,
                        diseño soluciones que combinan estética y funcionalidad para ofrecer una experiencia de usuario excepcional.
                    </p>
                </div>
                <div className="flex justify-center sm:justify-end mt-4 sm:mt-[-18px] sm:mr-6">
                    <button className="border p-2 sm:p-1.5 rounded-xl text-shadow-lg hover:bg-violet-500 hover:text-violet-950 transition-all">
                        Contacto
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Header