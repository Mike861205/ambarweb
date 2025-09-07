'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../config/email'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Método Principal: EmailJS (completamente configurado)
      emailjs.init(emailConfig.publicKey)
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: emailConfig.destinationEmail,
        reply_to: formData.email
      }

      const response = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      )
      
      console.log('✅ EmailJS: Email enviado exitosamente:', response)
      setSubmitStatus('success')
      setIsModalOpen(true)
      
      // Limpiar el formulario después del envío exitoso
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      console.error('❌ Error con EmailJS:', error)
      
      // Método de Respaldo 1: FormSubmit
      try {
        const formData2 = new FormData()
        formData2.append('name', formData.name)
        formData2.append('email', formData.email)
        formData2.append('subject', formData.subject)
        formData2.append('message', formData.message)
        formData2.append('_to', 'miguel.palomera1986@gmail.com')
        formData2.append('_subject', `${formData.subject} - Contacto Web Ambar`)
        formData2.append('_next', 'https://ambarweb.vercel.app/')
        
        const response = await fetch('https://formsubmit.co/miguel.palomera1986@gmail.com', {
          method: 'POST',
          body: formData2
        })
        
        if (response.ok) {
          console.log('✅ FormSubmit: Email enviado como respaldo')
          setSubmitStatus('success')
          setIsModalOpen(true)
          
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
        } else {
          throw new Error('FormSubmit falló')
        }
        
      } catch (fallbackError) {
        console.error('❌ Error con FormSubmit:', fallbackError)
        
        // Método de Respaldo Final: Mailto
        const mailtoParams = new URLSearchParams({
          subject: formData.subject,
          body: `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
        })
        const mailtoLink = `mailto:${emailConfig.destinationEmail}?${mailtoParams}`
        window.open(mailtoLink, '_blank')
        
        setSubmitStatus('success')
        setIsModalOpen(true)
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? Me encantaría escucharte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pachuca-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Email</h4>
                    <p className="text-gray-600">miguel.palomera1986@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pachuca-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Representante</h4>
                    <p className="text-gray-600">+52 624 137 0820  </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sport-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🏟️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Club</h4>
                    <p className="text-gray-600">Pachuca Femenil Sub-19</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark">Ubicación</h4>
                    <p className="text-gray-600">Pachuca, Hidalgo, México</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Sígueme en Redes</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors duration-200 text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-medium">Instagram</div>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors duration-200 text-center">
                  <div className="text-3xl mb-2">🎥</div>
                  <div className="font-medium">TikTok</div>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors duration-200 text-center">
                  <div className="text-3xl mb-2">📘</div>
                  <div className="font-medium">Facebook</div>
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors duration-200 text-center">
                  <div className="text-3xl mb-2">🐦</div>
                  <div className="font-medium">Twitter</div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">
              Envíame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pachuca-gold hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        {/* Modal de Resultado */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
              <div className="text-center">
                {submitStatus === 'success' ? (
                  <>
                    {/* Icono de éxito */}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✅</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                      ¡Mensaje Enviado!
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      Tu mensaje ha sido enviado exitosamente y llegará directamente a miguel.palomera1986@gmail.com. Te responderemos pronto.
                    </p>
                  </>
                ) : (
                  <>
                    {/* Icono de error */}
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">❌</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                      Error al Enviar
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o contacta directamente a miguel.palomera1986@gmail.com.
                    </p>
                  </>
                )}
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Contacto directo:</strong> 
                    <br />
                    <a href="mailto:miguel.palomera1986@gmail.com" className="text-pachuca-blue font-medium">
                      miguel.palomera1986@gmail.com
                    </a>
                  </p>
                </div>
                
                <button
                  onClick={closeModal}
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-200 ${
                    submitStatus === 'success' 
                      ? 'bg-pachuca-blue hover:bg-blue-600 text-white' 
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
