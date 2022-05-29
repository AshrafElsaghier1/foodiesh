import ReceipsCard from "../components/ReceipsCard";
import ReceipsSearch from "../components/ReceipsSearch";
const Receips = () => {
  const recipes = [
    {
      title: "Japanese Sushi",
      image: "/img/38.jpg",
      authorImg: "/img/20.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/37.jpg",
      authorImg: "/img/21.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/36.jpg",
      authorImg: "/img/22.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/35.jpg",
      authorImg: "/img/23.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/31.jpg",
      authorImg: "/img/24.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/32.jpg",
      authorImg: "/img/25.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/33.jpg",
      authorImg: "/img/26.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/34.jpg",
      authorImg: "/img/27.jpg",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <section className="receips section">
      <ReceipsSearch />
      <article className="receips-container">
        {recipes.map((receip, idx) => {
          return <ReceipsCard receip={receip} key={idx} />;
        })}
      </article>
    </section>
  );
};

export default Receips;
