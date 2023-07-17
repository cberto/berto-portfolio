import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactForm({ lang }) {
    const form = useRef();
    const input = lang.input;
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Agregar estado isLoading

    const handleSubmitEmail = (event) => {
        event.preventDefault();

        setIsLoading(true); // Activar el estado de carga

        emailjs
            .sendForm(
                'service_ouy36rn', 'template_xxwtnkk', form.current, '9n92X9Xo5UbbtuKSX'
            )
            .then((response) => {
                setMessage('Se envió correctamente. Te responderé dentro de poco.');
                setTimeout(() => {
                    setMessage(null);
                    setIsLoading(false); // Desactivar el estado de carga después de un tiempo
                }, 5000);
            })
            .catch((error) => {
                console.error('Error al enviar el formulario:', error);
                setIsLoading(false); // Desactivar el estado de carga en caso de error
            });
    };

    return (
        <form
            ref={form}
            className="ml-16 flex flex-col gap-y-4 max-lg:ml-0 xl:ml-0"
            onSubmit={handleSubmitEmail}
        >
            {message && (
                <p className="-mb-2 rounded-md bg-purple-400 py-2 text-center text-white">
                    {message}
                </p>
            )}
            <label
                htmlFor="name"
                className="flex rounded-md bg-slate-100 px-4 hover:shadow-md focus:shadow-lg focus:outline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={20}
                    fill="#8834ea"
                >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>

                <input
                    className="w-full bg-transparent px-6 py-3 transition-all focus:outline-none"
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder={input.namePlaceholder}
                    required
                />
            </label>
            <label
                htmlFor="email"
                className="flex rounded-md bg-slate-100 px-4 hover:shadow-md focus:shadow-lg focus:outline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#8834ea"
                    width={20}
                >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <input
                    className="w-full bg-transparent px-6 py-3 transition-all focus:outline-none"
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    required
                />
            </label>
            <label
                htmlFor="message"
                className="flex h-[200px] items-start rounded-md bg-slate-100 py-3 px-4 hover:shadow-md focus:shadow-lg focus:outline"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#8834ea"
                    width={20}
                >
                    <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
                <textarea
                    className="h-full w-full resize-none bg-transparent px-6 transition-all focus:outline-none"
                    name="message"
                    id="message"
                    placeholder={input.descriptionPlaceholder}
                    required
                ></textarea>
            </label>
            <button
                className="mx-auto w-[50%] rounded-md bg-purple-500  py-2 text-white transition-colors hover:bg-purple-700/90 max-md:w-full lg:w-[35%] 2xl:w-[25%]"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Enviando...' : lang.btn}
            </button>
        </form>
    );
}

export default ContactForm;
