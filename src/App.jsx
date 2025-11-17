"use client";
import NavBar from "./app/components/navbar";
import Footer from "./app/components/Footer";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="landing-page">
        {/*Seccion del hero */}
        <section className="hero-setion">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Tu negocio tiene una voz.</h1>
              <h1> Nosotros la amplificamos.</h1>
              <p>
                Somos Rock Your Content, una anti-agencia que rompe con los
                esquemas y crea solciones digitales hehcas a medida.
              </p>
              <button
                className="cta-button"
                onClick={() => {
                  document
                    .querySelector("#footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                CONTÁCTANOS!
              </button>
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
            Basamos nuestro trabajo en la escucha activa. Cada estrategia nace
            del proposito de tu negocio, no de una plantilla.
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
            <h3 className="section-subtitle">Sobre Nosotros</h3>
            <h2 className="section-title">
              No somos una agencia tradicional, somos algo distinto, humano y
              creativo
            </h2>
            <p>
              Ejemplo: Nacimos de la convicción de que el marketing tradicional
              ya no es suficiente en un mundo saturado de mensajes. Somos un
              equipo de mentes creativas, estrategas audaces y productores
              apasionados, unidos por el deseo de generar un impacto real y
              medible. Nos especializamos en tácticas below the line (BTL),
              marketing de guerrilla y activaciones experienciales que no solo
              captan la atención, sino que crean una conexión emocional duradera
              entre las marcas y su audiencia.
            </p>
            <p>mas texto</p>

            <div className="about-video">
              <video
                controls
                poster="/video-tumbnail.jpg"
                className="about-vodeo.player"
              >
                <source src="/aboutVideo.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video
              </video>
              <p className="video-caption">
                Equipo completo
                <br />
                Rock Your Content
              </p>
            </div>
          </div>
        </section>

        {/* Section Marcas */}

        <section className="brands-section">
          <h2 className="section-title">
            Marcas que confiaron en nuestra forma de crear
          </h2>
          <div className="logos-container">
            <h3>Logos o casos de exitos</h3>
            {/*ACA IRIAN LOS LOGOS O CASOS DE EXITO EN IMAGENES */}
          </div>
        </section>

        {/*CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">
            ¿Listo para <span className="Gistesy">Rockear</span> tu contenido?
          </h2>
          <div className="appointment-info">
            <h3>Agenda tu reunion</h3>
            <p>
              Elegi el dia y el horario que mejor te quede para coordinar tu
              videollamada
            </p>
            <div className="calendar-preview">
              <img
                src="/calendar-image.png"
                alt="Calendar"
                className="calendar-image"
              />
            </div>
            <button
              className="appointment-button"
              onClick={() => {
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2gIgy5qb4eJIYgfNTsFb7bcg3jWEyRwrCjrWOUvES6R3X6hR0csUT7yGd6nFYNFtnPJmuMYJ6r",
                  "_blank",
                  "noopener noreferrer"
                );
              }}
            >
              Agenda Ahora
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
