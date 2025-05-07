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
        <div className="bg-[url('../public/assets/bg-rombos-blueligth.jpg')] bg-cover p-4" id='contact'>
            <div className="m-auto w-96 spacing-[3] rounded-3xl border-solid border-black border-2 shadow-xl p-4 ">
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
            <div className="mt-[16px] text-center h-18">
                <p >By Gabriel 🤓</p>
            </div>
        </div>

    )
}

export default Contact;