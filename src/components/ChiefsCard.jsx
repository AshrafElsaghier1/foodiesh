import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const ChiefsCard = ({ chiefs }) => {
  const { name, img, recipesCount, cuisine } = chiefs;
  return (
    <div className="single-top-chief">
      <div className="img-container ">
        <img  src={`${process.env.PUBLIC_URL}${img}`} alt={name} />
      </div>
      <div className="chief-info ">
        <h3> {name}</h3>
        <p>
          Recieps: <b> {recipesCount}</b>
        </p>
        <p>
          Cuisine: <b>{cuisine}</b>
        </p>
        <div className="chiefs-icons">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};

export default ChiefsCard;
