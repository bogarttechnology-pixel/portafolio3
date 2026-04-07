import { useState } from 'react';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    { id: 1, embedUrl: 'https://mega.nz/embed/btBngZKQ#-bNDyKfLflwMzynWKP4C5kktA0ttw0NDAHqgAkZPDPM' },
    { id: 2, embedUrl: 'https://mega.nz/embed/jshhCLxB#18D0DfWKfWUy8XBK38UZ7D_IVLNSxg3N1XqGVvJlBLo' },
    { id: 3, embedUrl: 'https://mega.nz/embed/6lwklaZT#2D1dr096X_ABMl8S9ALR1Yo5SUqFvbkOW-DwthOEv_Y' },
    { id: 4, embedUrl: 'https://mega.nz/embed/H44HHQpS#dtbT8RMBO2sL40us8BMS_t7jMwIxXlruAp6d4Iqtyho' },
    { id: 5, embedUrl: 'https://mega.nz/embed/Xg5AlZpS#V39v2syHFOV3yh11e2-7rQOvDLhiBsth4s-vGNKm0Co' },
    { id: 6, embedUrl: 'https://mega.nz/embed/a0R2SLCB#S9Y_oOado9wSMDyGP_olLk2AFWfLluqiszfCVjLSn1Y' },
    { id: 7, embedUrl: 'https://mega.nz/embed/vkJQzBiT#yjEOhhleTFJpwnPLBZn76uOO7kubsvn4vSLyNnRyMKU' },
    { id: 8, embedUrl: 'https://mega.nz/embed/z5QyRZzR#1THWvbs964yNXiqKdxgs-gT0zoNtglwPNV0lDKBxeGM' },
    { id: 9, embedUrl: 'https://mega.nz/embed/LwZXGDAb#Z3oQRLaYAtbKTGi5RJgIcgaVrlmxflEMCgxch1kh90E' },
    { id: 10, embedUrl: 'https://mega.nz/embed/joBjUbpC#4ccRIXYpO13FPnjjT5w8tbzJZ4d7VWVCLuSQFPR68L0' },
    { id: 11, embedUrl: 'https://mega.nz/embed/q4pDBRYY#Z4FrjJf974y-CGO3sIiaWOjBCJCS5ZCr02wp0spNHcQ' },
    { id: 12, embedUrl: 'https://mega.nz/embed/2poUCDKb#AEN8zMme1fNuc8wgarQJscWT64gOMAiNeo1RuDrnMyM' },
    { id: 13, embedUrl: 'https://mega.nz/embed/GhhlkCZB#1yxXLJv_UZ4Cmu8wPfuuHgNgX0s0Qh4n3grK5ikDf9A' },
    { id: 14, embedUrl: 'https://mega.nz/embed/Tw5l1ZIY#yB4hAmyQxAIHNdbdvh31zvmFd4xbdd0Rlh6Llx_eQBI' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BogartAlbornoz
              </span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#inicio" className="text-gray-300 hover:text-purple-400 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-purple-400 transition-colors">Servicios</a>
              <a href="#portafolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portafolio</a>
              <a href="#contacto" className="text-gray-300 hover:text-purple-400 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-purple-300">Disponible para proyectos</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Bogart Albornoz
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-4">
            Editor de Video Profesional
          </p>
          
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Transformo tus ideas en contenido visual impactante. 
            Edición profesional, motion graphics y post-producción.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#portafolio"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrezco soluciones completas de edición de video para llevar tu contenido al siguiente nivel
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎬', title: 'Edición de Video', desc: 'Corte, transiciones y ritmo narrativo profesional' },
              { icon: '🎨', title: 'Color Grading', desc: 'Corrección de color y manejo de atmosferas' },
              { icon: '🔊', title: 'Diseño Sonoro', desc: 'Mezcla de audio, música y efectos' },
              { icon: '✨', title: 'Efectos Visuales', desc: 'Motion graphics y animaciones' },
            ].map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-24 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portafolio de Videos
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes en edición de video
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer"
                onClick={() => setSelectedVideo(video.embedUrl)}
              >
                <div className="aspect-video bg-gray-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.embedUrl}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="px-4 py-2 bg-purple-600/80 rounded-full text-sm font-medium">
                    Ver Video
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-purple-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trabajemos Juntos
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Contáctame y hagamos realidad tu visión
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="mailto:albonozdavid77@gmail.com"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-400 text-sm">albonozdavid77@gmail.com</p>
            </a>
            
            <a 
              href="https://wa.me/593995389113"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
              <p className="text-gray-400 text-sm">+593 99 5389113</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">B</span>
            </div>
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bogart Albornoz
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Bogart Albornoz. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
