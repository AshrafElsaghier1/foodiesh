import CustomImg from "./CustomImg";

const HeroSection = () => {
  const imgs = [
    "/img/01.jpg",
    "/img/02.jpg",
    "/img/09.jpg",
    "/img/04.jpg",
    "/img/05.jpg",
    "/img/06.jpg",
    "/img/12.jpg",
    "/img/08.jpg",
    "/img/10.jpg",
  ];

  return (
    <section className="section">
      <div className="col pr">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Also include classic Czech wine, so we can offer a wide selection of
          Moravian bottled wines and complete selection of barrel wines. This
          wines are imported by us directly from Moravian vineyards and from
          Blatel, as based in St. Blatnice.
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col img-container pl">
        {imgs.map((src, index) => {
          return (
            <CustomImg src={`${process.env.PUBLIC_URL}${src}`} key={index} />
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
