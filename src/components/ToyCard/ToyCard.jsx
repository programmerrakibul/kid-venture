import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import PopularBadge from "../PopularBadge/PopularBadge";
import MyButton from "../MyButton/MyButton";

const ToyCard = ({ singleToy }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { toyId, pictureURL, toyName, isPopular, description } = singleToy;

  const path = `/toy-details/${toyId}`;

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <figure className="relative">
        <img
          src={pictureURL}
          alt={toyName}
          className="max-h-32 w-full aspect-3/2 object-cover"
        />

        {isPopular && pathname === "/explore-toys" && <PopularBadge />}
      </figure>

      <div className="card-body text-base gap-4">
        <div className="space-y-0.5">
          <h2 className="card-title text-neutral/80 line-clamp-1">{toyName}</h2>
          <p className="line-clamp-2 text-neutral/60">{description}</p>
        </div>

        <div className="card-actions mt-auto">
          <MyButton handleClick={() => navigate(path)} className="btn-block">
            View More
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
