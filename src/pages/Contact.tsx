import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import contactFormImg from '../assets/underwater-pool-view.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

function Contact() {
  const [token, setToken] = useState()
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data

    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Subject: ', subject)
    console.log('Message: ', message)

    setRefreshReCaptcha((r) => !r)
  }

  // const onVerify = useCallback((token) => {
  //   setToken(token)
  // })

  return (
    <>
      <Header />
      <div className="bg-[#0099ff]">
        <div className="relative bg-[#0099ff]">
          <div className="absolute inset-0">
            <div className="w-full h-full object-cover relative">
              <img src={contactFormImg} className="w-full object-cover" alt="..." />
            </div>
            <div className="absolute inset-0 bg-[#0099ff] mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-start justify-end">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
              Entre em contato
            </h1>
            <h2 className="font-title text-3xl text-white">Deseja mais informações?</h2>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mb-6">
              Entre em contato conosco e ficaremos felizes em tirar suas dúvidas.
            </p>
          </div>
        </div>

        <div className="relative bg-[#0099ff]">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[#0099ff]" />
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="bg-gray-50 lg:rounded-tl-xl lg:rounded-bl-xl py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 md:mb-20">
              <div className="max-w-lg mx-auto">
                {/* <Logo className="h-20 w-auto mx-auto mb-8" /> */}
                <h1 className="text-3xl">Oceanfront Piscinas</h1>

                <p className="hidden invisible md:flex md:visible mt-3 px-6 text-lg leading-6 text-gray-500">
                  Para oportunidades de negócio e quaisquer outras dúvidas, favor entre em contato conosco usando o
                  formulário ao lado.
                </p>
                {/* <p className="visible md:hidden md:invisible mt-3 px-6 text-lg leading-6 text-gray-500">
                  Para oportunidades de negócio e quaisquer outras dúvidas, favor entre em contato conosco usando o
                  formulário abaixo.
                </p> */}
                <dl className="mt-8 text-base text-gray-500 flex flex-col items-center">
                  <div>
                    <dt className="sr-only">Endereço</dt>
                    <dd>
                      <p>Praça Antônio Callado, 215</p>
                      <p>Rio de Janeiro, RJ - CEP 22.793-084</p>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>

                      <span className="ml-3">contato@oceanfrontpiscinas.com.br</span>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>

                      <span className="ml-3">+55 (21) 99674-7210</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-white lg:rounded-tr-xl lg:rounded-br-xl py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 mb-20">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#0099ff] focus:border-[#0099ff] border-gray-300 rounded-md"
                      placeholder="Nome completo"
                      {...register('name', {
                        required: 'Nome completo é obrigatório',
                        minLength: {
                          value: 3,
                          message: 'Nome completo deve ter no mínimo 3 caracteres',
                        },
                        maxLength: {
                          value: 50,
                          message: 'Nome completo deve ter no máximo 50 caracteres',
                        },
                      })}
                    />
                    {/* {errors.name ? (
                      <span className="errorMessage text-red-400 flex mt-2 justify-start ml-4">
                        {errors.name.message}
                      </span>
                    ) : (
                      <span className="invisible text-red-400 flex mt-2 justify-start ml-4">field without error</span>
                    )} */}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#0099ff] focus:border-[#0099ff] border-gray-300 rounded-md"
                      placeholder="Email"
                      {...register('email', {
                        required: { value: true, message: 'Email é obrigatório' },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                          message: 'Entre um email válido',
                        },
                      })}
                    />
                    {/* {errors.email ? (
                      <span className="errorMessage text-red-400 flex mt-2 justify-start ml-4">
                        {errors.email.message}
                      </span>
                    ) : (
                      <span className="invisible text-red-400 flex mt-2 justify-start ml-4">field without error</span>
                    )} */}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#0099ff] focus:border-[#0099ff] border-gray-300 rounded-md"
                      placeholder="DDD + Telefone"
                      {...register('phone', {
                        required: { value: true, message: 'Telefone é obrigatório' },
                        pattern: {
                          value: /^\(?[1-9]{2}\)?\s?[9]{1}[\-|.]?[0-9]{4}[\-|.]?[0-9]{4}$/,
                          message: 'Entre um telefone válido com DDD',
                        },
                      })}
                    />
                    {/* {errors.phone ? (
                      <span className="errorMessage text-red-400 flex mt-2 justify-start ml-4">
                        {errors.phone.message}
                      </span>
                    ) : (
                      <span className="invisible text-red-400 flex mt-2 justify-start ml-4">field without error</span> */}
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#0099ff] focus:border-[#0099ff] border-gray-300 rounded-md"
                      placeholder="Assunto"
                      {...register('subject', {
                        required: { value: true, message: 'Por favor, especifique seu assunto' },
                        maxLength: {
                          value: 75,
                          message: 'O assunto não deve ultrapassar 75 caracteres',
                        },
                      })}
                    />
                    {/* {errors.subject ? (
                      <span className="errorMessage text-red-400 flex mt-2 justify-start ml-4">
                        {errors.subject.message}
                      </span>
                    ) : (
                      <span className="invisible text-red-400 flex mt-2 justify-start ml-4">field without error</span>
                    )} */}
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#0099ff] focus:border-[#0099ff] border-gray-300 rounded-md"
                      placeholder="Escreva seu recado..."
                      defaultValue={''}
                      {...register('message', {
                        required: { value: true, message: 'Por favor, entre com a mensagem' },
                        minLength: {
                          value: 20,
                          message: 'Mensagem deve ter no mínimo 20 caracteres',
                        },
                      })}
                    />
                    {/* {errors.message ? (
                      <span className="errorMessage text-red-400 flex mt-2 justify-start ml-4">
                        {errors.message.message}
                      </span>
                    ) : (
                      <span className="invisible text-red-400 flex mt-2 justify-start ml-4">field without error</span>
                    )} */}
                  </div>
                  <div>
                    {/* <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha} /> */}
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#0099ff] hover:bg-[#0099ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0099ff]"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
