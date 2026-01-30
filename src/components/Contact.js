"use client";
import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    // Tu Access Key de Web3Forms
    formData.append("access_key", "650d240e-515e-49e7-9a3e-24a1714d89ae"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("¡Gracias! Tu mensaje ha sido enviado con éxito.");
        form.current.reset();
      } else {
        setStatus("Ups! Algo salió mal. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("Error de conexión. Revisa tu internet.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="Contact" className="py-20 bg-white"> {/* Fondo blanco original */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="w-full lg:w-5/12">
            <h6 className="text-yellow-600 font-bold uppercase tracking-widest mb-4 text-sm">Conectemos</h6>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Estamos listos para mover tu carga
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              ¿Tienes un proyecto logístico en mente? Contáctanos y nuestro equipo de expertos te brindará la mejor asesoría.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">Dirección</h5>
                  <p className="text-slate-500 text-base">Valencia, Edo Carabobo: C.C. Viña Plaza, piso 6, Oficina 19</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">Teléfono</h5>
                  <p className="text-slate-500 text-base">+58 414-4997279</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/10 p-3 rounded-xl text-yellow-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">Email</h5>
                  <p className="text-slate-500 text-base">info@gruposvl.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="w-full lg:w-7/12">
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nombre</label>
                    <input 
                      name="user_name" 
                      type="text" 
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-slate-900" 
                      placeholder="Tu nombre" 
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input 
                      name="user_email" 
                      type="email" 
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-slate-900" 
                      placeholder="correo@ejemplo.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Asunto</label>
                  <input 
                    name="subject" 
                    type="text" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-slate-900" 
                    placeholder="¿En qué podemos ayudarte?" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mensaje</label>
                  <textarea 
                    name="message" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none text-slate-900" 
                    rows="4" 
                    placeholder="Escribe tu mensaje aquí..." 
                    required 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 disabled:bg-slate-300 text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-3"
                >
                  {loading ? "Enviando..." : "Enviar Mensaje"} 
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
              </form>
              
              {status && (
                <div className={`mt-6 p-4 rounded-2xl text-center font-bold transition-all ${
                  status.includes("éxito") ? "bg-green-100 border border-green-200 text-green-700" : "bg-red-100 border border-red-200 text-red-700"
                }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}