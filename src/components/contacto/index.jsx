
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../skills/style.css'

function Contact() {
    const form = useRef();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    const handleInputChange = () => {
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);

        const name = form.current.user_name.value;
        const email = form.current.user_email.value;
        const message = form.current.message.value;


        if (!name) return setNameError("Este campo no puede estar vacío");
        if (!/^[a-zA-Z\s]+$/.test(name)) return setNameError("El nombre no puede contener números");

        if (!email) return setEmailError("Este campo no puede estar vacío");
        if (!paternEmail.test(email)) return setEmailError("No es un formato de mail válido");

        if (!message) return setMessageError("Este campo no puede estar vacío");



        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Mail enviado con éxito!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                form.current.reset();
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se pudo enviar el formulario. Verificá los datos o intentá más tarde.",
                });
            });
    };

    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (
        <div
            className="bg-[url('../public/assets/bg-rombos-blueligth.jpg')] bg-cover p-4 pt-10"
            id="contact"
        >
            <div className="flex flex-col justify-center items-center w-full max-w-xl mx-auto rounded-3xl border border-black shadow-xl p-4">
                <h1 className="text-3xl md:text-4xl text-center mb-6 font-bold">Contacto</h1>
                <form ref={form} onSubmit={sendEmail} className="w-full">
                    <label htmlFor="name" className="block mb-1 font-semibold">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="h-10 w-full mb-3 p-4 border border-slate-400 rounded-md"
                        onChange={handleInputChange}
                    />
                    {nameError && <p className="text-red-500 text-sm -mt-2 mb-2">{nameError}</p>}

                    <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="h-10 w-full mb-3 p-4 border border-slate-400 rounded-md"
                        onChange={handleInputChange}
                    />
                    {emailError && <p className="text-red-500 text-sm -mt-2 mb-2">{emailError}</p>}

                    <label htmlFor="message" className="block mb-1 font-semibold">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full mb-2 p-4 border border-slate-400 rounded-md"
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    {messageError && <p className="text-red-500 text-sm -mt-2 mb-2">{messageError}</p>}

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Enviar"
                            className="bg-blue-600 hover:bg-blue-700 transition text-white text-lg rounded-md mt-4 px-6 py-2 cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <hr className="border-t border-slate-400 my-8 w-[98%] " />

            <footer className="w-full mt-8 py-4 px-6">
                <div className="max-w-7xl  flex flex-col md:flex-row items-center justify-between">
                    {/* Texto del copyright */}
                    <p className="text-sm text-gray-700 text-center md:text-left">
                        © {new Date().getFullYear()} By Gabriel Marzioli 🤓. Todos los derechos reservados.
                    </p>

                    {/* Íconos de redes */}
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-xl text-blue-900 shadow-xl  mt-4">Mis Redes 👉</span>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/gabriel-marzioli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-blue-600 hover:text-blue-800 mt-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/gabriel073"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-800 hover:text-black mt-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.11.79-.25.79-.56v-2c-3.26.71-3.95-1.57-3.95-1.57a3.1 3.1 0 00-1.29-1.7c-1.05-.71.08-.7.08-.7a2.45 2.45 0 011.79 1.2 2.5 2.5 0 003.42 1 2.47 2.47 0 01.74-1.55c-2.6-.3-5.34-1.3-5.34-5.85A4.6 4.6 0 017.05 7a4.3 4.3 0 01.12-3.17s.98-.31 3.2 1.2a11.1 11.1 0 015.84 0c2.22-1.51 3.2-1.2 3.2-1.2a4.3 4.3 0 01.12 3.17 4.6 4.6 0 011.23 3.2c0 4.56-2.74 5.54-5.35 5.83a2.76 2.76 0 01.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Contact;