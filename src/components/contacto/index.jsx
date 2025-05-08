/* eslint-disable no-undef */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


function Contact() {
    const form = useRef();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        if (!form.current.name) {
            return setNameError("Este campo no puede estar vacio, favor de ingresar un nombre");
        }
        if (!form.current.name.value.split("").every(char => isNaN(parseInt(char)))) {
            return setNameError("Su nombre no puede contener numeros");
        }
        if (!form.current.name) {
            return setEmailError("Este campo no puede estar vacio, favor de ingresar un Mail");
        }
        if (!paternEmail.test(form.current.email.value)) {
            return setEmailError("No es un formato de Mail válido");
        }
        if (!form.current.message) {
            return setMessageError("Este campo no puede estar vacio, favor de ingresar un Mensaje");
        }

        emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mail enviado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        form({
            ...form,
            [name]: value
        });
    }
    const paternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (
        <div className="bg-[url('../public/assets/bg-rombos-blueligth.jpg')]  p-4" id='contact'>
            <div className="flex flex-col justify-center items-center w-[35%] spacing-[3] rounded-3xl border-solid ml-[32%] mb-[7%] border-black border-2 shadow-xl p-4 ">
                <h1 className="text-4xl text-center mb-4" >Contacto</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input
                        type='text'
                        id='name'
                        name='user_name'
                        className="h-[25px] w-[100%] mb-[15px] p-4 border-solid border-slate-400 border-[0.5px] rounded-md"
                        // value={formData.name}
                        onChange={handleInputChange}
                    />
                    <div className="text-red-500 mb-[0px] mt-[0px]">
                        {nameError && <p>{nameError}</p>}
                    </div>
                    <label>Email</label>
                    <input type='email'
                        id='email'
                        name='user_email' className="h-[25px] w-[100%] p-4 mb-[15px] border-solid border-slate-400 border-[0.5px] rounded-md"
                        // value={formData.email}
                        onChange={handleInputChange}

                    />
                    <div className="text-red-500 mb-[0px] mt-[0px]" >
                        {emailError && <p>{emailError}</p>}
                    </div>
                    <label>Mensaje</label>
                    <textarea id='message' name='message' rows={8}
                        cols={50} className="mb-[-30px] w-[100%] p-4 border-solid border-slate-400 border-[0.5px] rounded-md"

                        // value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <div className="text-red-500 mb-[0px] mt-[0px]">
                        {messageError && <p>{messageError}</p>}
                    </div>

                    <div className=' flex justify-center'>
                        <input type="submit" value="Enviar" className='bg-[blue] cursor-pointer text-white text-lg  rounded-md mt-[30px] w-[30%] h-[40px] ' />
                    </div>
                </form>
            </div >
            <hr className='border-solid border-slate-400 border-[0.5px] w-[98%] ' />

            <div className="mt-8  h-10">
                <div className='flex  justify-between items-center p-2'>
                    <p className=" text-sm text-black-500">
                        © {new Date().getFullYear()} By Gabriel Marzioli 🤓. Todos los derechos reservados.
                    </p>


                    <div className='flex items-center space-x-2'>
                        <span className="text-sm text-black-500 ">Mis Redes 👉</span>

                        <a href="https://www.linkedin.com/in/gabriel-marzioli/" target="_blank"
                            rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        {/* ahora github */}
                        <a href="https://github.com/gabriel073" target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">
                            {/* corregir svg github */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;