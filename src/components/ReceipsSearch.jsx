import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReceipsSearch = () => {
  const searches = [
    "pizza",
    "meat",
    "burger",
    "cookies",
    "juice",
    "salad",
    "ice cream",
    "soap",
    "fruits",
  ];

  return (
    <div className="receips-search">
      <h2 className="title"> Previous Searches </h2>
      <div className="prev-search-words">
        {searches.map((search, index) => (
          <span
            className="search-word"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {search}
          </span>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="submit-btn" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default ReceipsSearch;
