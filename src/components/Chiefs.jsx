import ChiefsCard from "./ChiefsCard";

const Chiefs = () => {
  const chiefsList = [
    {
      name: "Juan Carlos",
      img: "/img/20.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "/img/21.jpg",
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "/img/22.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "/img/23.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "/img/24.jpg",
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: "/img/25.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <section className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <article className="top-chiefs-container">
        {chiefsList.map((chief, index) => {
          return <ChiefsCard key={index} chiefs={chief} />;
        })}
      </article>
    </section>
  );
};

export default Chiefs;
