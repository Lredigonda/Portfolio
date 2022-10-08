import "./about-me.scss";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__image-container">
        <div className="about-me__image"></div>
      </div>
      <div className="about-me__info-container">
        <h2 className="about-me__title">
          Un poco <b>sobre mi</b>
        </h2>
        <p className="about-me__info-1">
          Me interesa mucho el desarrollo de aplicaciones web y aquirir
          conocimiento en nuevas tecnologias.
        </p>
        <p className="about-me__info-2">
          Soy desarrollador <b>FrontEnd</b> con conocimientos basicos de
          BackEnd.
          <br />
          Tengo conocimientos en <b>maquetacion</b> y <b>Javascript</b>, junto
          con algunas de sus <b>librerias</b>.
        </p>
        <p className="about-me__info-3">
          Soy <b>estudiante</b> de la carrera universitaria "Desarrollo de
          Software".
          <br />
          Me gusta estar en un constante <b>aprendizaje</b>.
        </p>
      </div>
    </section>
  );
}
export default AboutMe;
