import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineLink, AiFillStar, AiFillPhone } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";

const RestaurantList = ({ place }) => {
  console.log(place);
  return (
    <div className="place-container">
      {place?.map((place, index) => {
        return (
          <div className="place" key={index}>
            <div>
              <img
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
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
                {place.rating >= 5 ? (
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                ) : place.rating >= 4 ? (
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                ) : place.rating >= 3 ? (
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                ) : place.rating >= 2 ? (
                  <span>
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                ) : (
                  <span>
                    <AiFillStar />
                  </span>
                )}
                {place.ranking}
              </p>
              <p className="address">
                <span>
                  <FaMapMarkerAlt />
                </span>
                {place.address}
              </p>
              {place?.phone ? (
                <p className="address">
                  <span>
                    <AiFillPhone />
                  </span>
                  {place.phone}
                </p>
              ) : (
                ""
              )}

              <a className="website" href={place.web_url} target="_blank" rel="noreferrer">
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
// {place.rating > 1 ? (
//   <span>
//     <AiFillStar />
//   </span>
// ) : place.rating > 2 ? (
//   <span>
//     <AiFillStar />
//     <AiFillStar />
//   </span>
// ) : place.rating > 3 ? (
//   <span>
//     <AiFillStar />
//     <AiFillStar />
//     <AiFillStar />
//   </span>
// ) : place.rating > 4 ? (
//   <span>
//     <AiFillStar />
//     <AiFillStar />
//     <AiFillStar />
//     <AiFillStar />
//   </span>
// ) : (
//   (place.rating = 5 ? (
//     <span>
//       <AiFillStar />
//       <AiFillStar />
//       <AiFillStar />
//       <AiFillStar />
//       <AiFillStar />
//     </span>
//   ) : (
//     ""
//   ))
// )}
