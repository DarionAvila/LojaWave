import React from 'react';
import './App.css'; // Importando o arquivo CSS


function App() {
  return (
    <>
      <header className="cabecalho">
        <div className="container">
          <div className="logo">
            <img
              src="/wavelogo.png"
              alt="Wave Eletrônicos"
              className="logo-img"
            />
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="#destaques">Destaques</a>
              </li>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <a
              href="https://wa.me/53999457884"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whats.png" alt="WhatsApp" className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/wave.eletro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/insta.png" alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </header>

      <main className="container ">
        <section id="destaques" className="destaque">
          <div className="destaque-content">
            <div className="destaque-texto">
              <h2>iPhone 16 Pro Max</h2>
              <p>
                O mais avançado iPhone já criado. Tecnologia de ponta em suas mãos.
              </p>
              <a href="#produtos" className="btn">
                Conheça os modelos
              </a>
            </div>
            <div className="destaque-imagem">
              <img
                src="/16 pm.png"
                alt="iPhone 16 Pro Max"
                className="floating"
              />
            </div>
          </div>
        </section>

        <section id="video" className="video-section">
          <div className="video-container">
            <video
              autoPlay
              muted
              loop
              width="100%"
              height="100%"
              className="video-full"
            >
              <source src="/videos/demo-video.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </section>

        <section id="produtos" className="catalogo">
          <h2 className="section-title">Nossos Produtos</h2>
          <div className="produtos-grid">
            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro Max" />
              <h3>iPhone 16 Pro Max</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 9.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 910,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">512GB</span>
                  <span className="valor">R$ 12.000,00</span>
                  <span className="parcelamento">ou 12x de R$ 1.100,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro Max"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro" />
              <h3>iPhone 16 Pro</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 8.500,00</span>
                  <span className="parcelamento">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 8.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/Iphone16.png" alt="iPhone 16" />
              <h3>iPhone 16</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 6.700,00</span>
                  <span className="parcelamento">ou 12x de R$ 625,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 7.400,00</span>
                  <span className="parcelamento">ou 12x de R$ 690,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>
          </div>
          <div className="produtos-grid">
            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro Max" />
              <h3>iPhone 16 Pro Max</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 9.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 910,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">512GB</span>
                  <span className="valor">R$ 12.000,00</span>
                  <span className="parcelamento">ou 12x de R$ 1.100,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro Max"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro" />
              <h3>iPhone 16 Pro</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 8.500,00</span>
                  <span className="parcelamento">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 8.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/Iphone16.png" alt="iPhone 16" />
              <h3>iPhone 16</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 6.700,00</span>
                  <span className="parcelamento">ou 12x de R$ 625,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 7.400,00</span>
                  <span className="parcelamento">ou 12x de R$ 690,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>
          </div>
          <div className="produtos-grid">
            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro Max" />
              <h3>iPhone 16 Pro Max</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 9.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 910,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">512GB</span>
                  <span className="valor">R$ 12.000,00</span>
                  <span className="parcelamento">ou 12x de R$ 1.100,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro Max"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/16 pm.png" alt="iPhone 16 Pro" />
              <h3>iPhone 16 Pro</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 8.500,00</span>
                  <span className="parcelamento">ou 12x de R$ 794,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 8.900,00</span>
                  <span className="parcelamento">ou 12x de R$ 830,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16 Pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>

            <div className="produto-card">
              <div className="badge">Lançamento</div>
              <img src="/Iphone16.png" alt="iPhone 16" />
              <h3>iPhone 16</h3>
              <div className="precos">
                <div className="opcao">
                  <span className="capacidade">128GB</span>
                  <span className="valor">R$ 6.700,00</span>
                  <span className="parcelamento">ou 12x de R$ 625,00</span>
                </div>
                <div className="opcao">
                  <span className="capacidade">256GB</span>
                  <span className="valor">R$ 7.400,00</span>
                  <span className="parcelamento">ou 12x de R$ 690,00</span>
                </div>
              </div>
              <a
                href="https://wa.me/53999457884?text=Olá, gostaria de comprar o iPhone 16"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp"></i> Comprar agora
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Localização</h2>
          
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <div className="footer-logo">
            <img src="/logo2.png" alt="Wave Eletrônicos" />
          </div>
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/wave.eletro/">Instagran</a>
                <img src="/whats.png" alt="" />
              </li>
              <li>
                <a href="https://wa.me/53999457884?text=Olá">WhatsApp</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-contato">
            <h4>Contato</h4>
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
        <div className="copyright">
          <p>&copy; 2023 Wave Eletrônicos. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/53999457884"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="/whats.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </>
  );
}

export default App;

