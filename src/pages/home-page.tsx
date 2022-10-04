import "./home-page.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <div className="homepage__title-container">
          <h1 className="homepage__title-container__title">👋Bienvenido!</h1>
          <h2 className="homepage__title-container__subtitle">
            Soy <b>Leonel Redigonda</b>
          </h2>
          <h3 className="homepage__title-container__info">
            Front End <b>Developer</b>
          </h3>
        </div>
        <div className="homepage__image-container">
          <img
            src="../assets/Coding.svg"
            alt="home-image"
            className="homepage__image"
          />
        </div>
      </div>
    </div>
  );
}
export default Homepage;
