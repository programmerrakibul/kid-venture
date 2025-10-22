import { FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const ToyCard = ({ singleToy }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { pictureURL, toyName, rating, availableQuantity, price, isPopular } =
    singleToy;

  const path = `/toy-details/${toyName
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "")}`;

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-2xl hover:shadow-teal-200 duration-300">
      <figure>
        <img
          src={pictureURL}
          alt={toyName}
          className="max-h-[250px] w-full aspect-3/2 object-cover"
        />
      </figure>
      <div className="card-body text-base">
        <h2 className="card-title text-neutral/80">
          {toyName}

          {isPopular && pathname === "/explore-toys" && (
            <span className="badge badge-success text-success-content">
              Popular
            </span>
          )}
        </h2>
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
          <button
            onClick={() => navigate(path, { state: singleToy })}
            className="btn btn-secondary btn-block"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
