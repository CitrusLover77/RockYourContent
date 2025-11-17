"use client";
export default function LandingPage() {
  return (
    <div className="landing-page">
      {/*Seccion del hero */}
      <section className="hero-setion">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tu negocio tiene una voz. Nosotros la amplificamos.</h1>
            <p>
              Somos Rock Your Content, una anti-agencia que rompe con los
              esquemas y crea solciones digitales hehcas a medida.
            </p>
            <button className="cta-button">CONTACTANOS!</button>
          </div>
          <div className="hero-logo">
            <img
              src="/rockLogo.png"
              alt="RockYourContentLogo"
              className="RockLogo-img"
            />
          </div>
        </div>
      </section>

      {/*Section metodologia */}
      <section className="section-metodologia">
        <h3 className="section-subtitle">Metodologia</h3>
        <h2 className="section-title">
          Trabajamos desde la colaboriacion, no desde la estructura
        </h2>
        <p className="section-description">
          Basamos nuestro trabajo en la escucha activa. Cada estrategia nace del
          proposito de tu negocio, no de una plantilla.
        </p>
        <div className="service-grid">
          <div className="service-card">
            <h4>Project Manager</h4>
            <p>
              Te guiamos para que encuentres el camino adecuado para vos, tu
              negocio y tu marca.
            </p>
            <p>
              Un acompañamiento estrategico que conecta objetivos con accion
              real,
            </p>
          </div>

          <div className="service-card">
            <h4>Segunda Voz</h4>
            <p>
              Consultorias personalizadas, con encuentros quincenales donde
              transformamos tus ideas en estrategias claras y aplicables.
            </p>
            <p>Somos esa segunda voz que te impulsa a sonar mas fuerte</p>
          </div>
          <div className="service-card">
            <h4>Auditoria de Redes Sociales</h4>
            <p>Revisamos tu comunicacion para que tu marca suene mejor</p>
          </div>
        </div>
      </section>

      {/*Section sobre nosotros */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text"></div>
        </div>
      </section>
    </div>
  );
}
