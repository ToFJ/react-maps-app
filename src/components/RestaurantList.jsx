import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineLink, AiFillStar, AiFillPhone } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";

const RestaurantList = ({ place }) => {
  console.log(place);
  return (
    <div>
      {place?.map((place, index) => {
        return (
          <div className="place" key={index}>
            <div>
              <img
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
                alt={place.name}
              />
              <h1>{place.name}</h1>
            </div>
            <div className="place-info">
              <p className="place-location">
                <span>
                  <FaHandPointRight />
                </span>
                See on map
              </p>
              <p className="ranking">
                <span>
                  <AiFillStar />
                </span>
                {place.ranking}
              </p>
              <p className="address">
                <span>
                  <FaMapMarkerAlt />
                </span>
                {place.address}
              </p>
              <p className="address">
                <span>
                  <AiFillPhone />
                </span>
                {place.phone}
              </p>
              <a className="website" href={place.web_url}>
                <span>
                  <AiOutlineLink />
                </span>
                Website
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
