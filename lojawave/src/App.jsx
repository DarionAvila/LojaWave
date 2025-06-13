import React from 'react';
import './App.css'; // Importando o arquivo CSS

function App() {
  return (
    <>


      <nav class="border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/wavelogo.png" class="h-40" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w- h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto ">
        <section id="destaques" className="my-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="destaque-texto text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800">iPhone 16 Pro Max</h2>
              <p className="text-lg mt-4 text-gray-600">
                O mais avançado iPhone já criado. Tecnologia de ponta em suas mãos.
              </p>
              <a
                href="#produtos"
                className="btn mt-6 inline-block px-8 py-3 bg-blue-700 text-white rounded-lg text-xl font-semibold hover:bg-blue-900 transition-all"
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
          </div>
        </section>
      </main>
      {/* <footer className="bg-gray-900 text-white py-6">
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
      </footer> */}


      <footer class=" rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div class="w-full max-w mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="/wavelogo.png" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wave Imports</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.instagram.com/wave.eletro/" class="hover:underline">Wave™</a>&copy;  Todos os direitos reservados.</span>
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
