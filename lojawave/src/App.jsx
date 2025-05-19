import React from 'react';
import './App.css'; // Importando o arquivo CSS

function App() {
  return (
    <>
      <header className="bg-gray-900 text-white sticky top-0 z-10 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo">
            <img
              src="/wavelogo.png"
              alt="Wave Eletrônicos"
              className="w-24"
            />
          </div>
          <nav className="menu">
            <ul className="flex space-x-8">
              <li>
                <a href="#destaques" className="text-sm hover:text-yellow-400">Destaques</a>
              </li>
              <li>
                <a href="#produtos" className="text-sm hover:text-yellow-400">Produtos</a>
              </li>
              <li>
                <a href="#contato" className="text-sm hover:text-yellow-400">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons flex space-x-4">
            <a
              href="https://wa.me/53999457884"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whats.png" alt="WhatsApp" className="w-8" />
            </a>
            <a
              href="https://www.instagram.com/wave.eletro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.png" alt="Instagram" className="w-8" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="w-8" />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section id="destaques" className="my-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="destaque-texto text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800">iPhone 16 Pro Max</h2>
              <p className="text-lg mt-4 text-gray-600">
                O mais avançado iPhone já criado. Tecnologia de ponta em suas mãos.
              </p>
              <a
                href="#produtos"
                className="btn mt-6 inline-block px-8 py-3 bg-blue-700 text-white rounded-lg text-xl font-semibold hover:bg-yellow-500 transition-all"
              >
                Conheça os modelos
              </a>
            </div>
            <div className="destaque-imagem mt-8 md:mt-0">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro Max"
                className="w-full sm:w-72 md:w-80 lg:w-96 h-auto object-contain transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section id="video" className="video-section my-12">
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="object-cover w-full h-full"
            >
              <source src="/videos/demo-video.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </section>

        <section id="produtos" className="catalogo my-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Nossos Produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>

            
            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>

            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>
            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>
            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>
            <div className="produto-card bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro"
                className="w-full h-48 object-contain rounded-t-lg transition-all hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mt-4 text-center text-gray-800">iPhone 16 Pro</h3>
              <div className="precos mt-4 text-center">
                <div className="opcao text-sm mb-3">
                  <span className="capacidade block text-gray-600">128GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.500,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao text-sm">
                  <span className="capacidade block text-gray-600">256GB</span>
                  <span className="valor block text-lg font-semibold text-gray-800">R$ 8.900,00</span>
                  <span className="parcelamento block text-sm text-gray-500">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <div className="flex justify-center mt-6"> {/* Aqui colocamos a classe flex justify-center para centralizar */}
                <a
                  href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap"
                >
                  <i className="fab fa-whatsapp"></i> Comprar agora
                </a>
              </div>
            </div>

            


            {/* Replicar para outros produtos */}
            
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div className="footer-logo">
            <img src="/logo2.png" alt="Wave Eletrônicos" className="w-32" />
          </div>
          <div className="footer-links text-sm">
            <h4 className="font-semibold">Links Rápidos</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/wave.eletro/"
                  className="hover:text-yellow-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/53999457884?text=Olá"
                  className="hover:text-yellow-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-yellow-400">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contato text-sm">
            <h4 className="font-semibold">Contato</h4>
            <p>
              <i className="fas fa-map-marker-alt"></i> Endereço da loja
            </p>
            <p>
              <i className="fas fa-phone"></i> (53) 99945-7884
            </p>
            <p>
              <i className="fas fa-clock"></i> Horário de atendimento
            </p>
          </div>
        </div>
        <div className="copyright text-center mt-6">
          <p>&copy; 2023 Wave Eletrônicos. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/53999457884"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600"
      >
        <img src="/whats.png" alt="WhatsApp" className="w-8" />
      </a>
    </>
  );
}

export default App;
