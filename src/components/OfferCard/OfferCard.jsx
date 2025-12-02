import { FaTag, FaRegClock } from "react-icons/fa";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router";

const OfferCard = ({ singleOffer }) => {
  const navigate = useNavigate();
  const { title, description, discount, code, expires } = singleOffer;

  return (
    <div className="card border-2 bg-blue-50 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="card-body p-4 sm:p-6 gap-5">
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-blue-700">
                {title}
              </h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="text-xl md:text-xl font-bold text-blue-700">
            {discount}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FaTag className="text-base-content/70" />
            <div className="bg-base-100 px-3 py-2 rounded-lg font-mono font-bold border flex-1 text-center">
              {code}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <FaRegClock />
            <span>{expires}</span>
          </div>
        </div>

        <div className="card-actions justify-center">
          <MyButton
            handleClick={() => navigate("/explore-toys")}
            className="btn-block"
          >
            Shop Now
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
