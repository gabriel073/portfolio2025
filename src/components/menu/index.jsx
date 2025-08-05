import { useEffect, useState } from 'react';
import "./style.css";
import '../skills/style.css'


function MenuFlotatnte() {
    const [mostrarMenu, setMostrarMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setMostrarMenu(true);
            } else {
                setMostrarMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecuta una vez al montar para comprobar scroll inicial

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <nav className=" menu_scale-up fade-away">
                {mostrarMenu && (
                    <div id="menu-flotante" className="w-auto h-auto border-2 border-solid border-black  rounded-3xl text-center  p-4 space-x-6 mt-7 " >
                        <a href="#proyects" className='text-blue-500 hover:text-blue-700 hover:text-3xl'>Proyectos</a>
                        <a href="#skills" className='text-blue-500 hover:text-blue-700 hover:text-3xl'>Tecnologías</a>
                        <a href="#contact" className='text-blue-500 hover:text-blue-700 hover:text-3xl'>Contacto</a>
                        <a href="#about" className='text-blue-500 hover:text-blue-700 hover:text-3xl'>Sobre Mi</a>
                    </div>
                )}
                {mostrarMenu && (
                    <div className="fixed bottom-14 animate-bounce transition-transform duration-300 right-4 bg-blue-500 text-white z-20 p-2 rounded-full cursor-pointer hover:bg-blue-700 hover:scale-125 " onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ">
                            <path d="M12 2l-10 10h6v8h8v-8h6L12 2z" />
                        </svg>
                    </div>
                )
                }
            </nav>
        </section>
    )
}

export default MenuFlotatnte;