import "./about-me.scss";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__info-container">
        <h2 className="about-me__title">
          Un poco <b>sobre mi</b>
        </h2>
        <p className="about-me__info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          commodi, placeat assumenda modi voluptates praesentium fugiat aut
          voluptatem veniam vero debitis, pariatur illo. Quaerat accusamus, ab
          laboriosam in porro itaque!
        </p>
      </div>
      <div className="about-me__image-container">
        <div className="about-me__image"></div>
      </div>
    </section>
  );
}
export default AboutMe;
