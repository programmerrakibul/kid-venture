import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import PopularBadge from "../PopularBadge/PopularBadge";
import MyButton from "../MyButton/MyButton";

const ToyCard = ({ singleToy }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    toyId,
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    isPopular,
  } = singleToy;

  const path = `/toy-details/${toyId}`;

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <figure className="relative">
        <img
          src={pictureURL}
          alt={toyName}
          className="max-h-[250px] w-full aspect-3/2 object-cover"
        />

        {isPopular && pathname === "/explore-toys" && <PopularBadge />}
      </figure>

      <div className="card-body text-base">
        <h2 className="card-title text-neutral/80">{toyName}</h2>
        <div className="space-y-2">
          <p className="flex items-center justify-between font-medium">
            <span>৳{price}</span>
            <span className="flex items-center gap-1.5">
              <FaStar fill="#FF8A00" size={18} /> {rating}
            </span>
          </p>
          <p>
            <strong>Available Items:</strong> {availableQuantity}
          </p>
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
