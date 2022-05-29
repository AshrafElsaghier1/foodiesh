import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const QouteSec = () => {
  return (
    <section className="section quote-sec">
      <p className="quote-parag">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon"/>
        Food for us comes from our relatives, whether they have wings or fins or
        roots. That is how we consider food. Food has a culture. It has a
        history. It has a story. It has relationships If you really want to make
        a friend .
      </p>
      <p className="qoute-auther"> - Winona LaDuke</p>
    </section>
  );
};

export default QouteSec;
