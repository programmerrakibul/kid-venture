import { useNavigate, useParams } from "react-router";
import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import useToysData from "../../hooks/useToysData";
import PopularBadge from "../../components/PopularBadge/PopularBadge";

const ToyDetails = () => {
  const navigate = useNavigate();
  const { allToys } = useToysData();
  const { id } = useParams();
  const singleToy = allToys.find((item) => item.toyId === id);

  const {
    pictureURL,
    toyName,
    rating,
    availableQuantity,
    price,
    sellerName,
    sellerEmail,
    description,
    subCategory,
    isPopular,
  } = singleToy;

  const inStock = availableQuantity > 0;

  return (
    <>
      <title>{`${toyName} | KidVenture`}</title>

      <section className="py-10 my-6">
        <Container>
          <div className="space-y-7 bg-indigo-100 border-primary-content shadow-lg rounded-xl border-2 p-5">
            <button
              onClick={() => navigate(-1)}
              className="link link-hover font-semibold text-secondary"
            >
              <FaArrowLeftLong className="inline-block mr-1" /> Go Back
            </button>

            <div className="flex flex-col sm:flex-row gap-7">
              <div className="flex-1/3 grid place-items-center shadow-md rounded-xl overflow-hidden relative">
                <img src={pictureURL} className="w-full h-full" alt={toyName} />

                {isPopular && <PopularBadge />}
              </div>

              <div className="flex-2/3 text-[#807b7b] space-y-4">
                <div className="flex flex-col-reverse sm:flex-row gap-3.5 sm:items-center justify-between">
                  <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-neutral">
                    {toyName}
                  </h1>

                  <span
                    className={`${
                      inStock
                        ? "text-green-700 bg-green-200"
                        : "text-red-700 bg-red-200"
                    } px-5 py-1 font-semibold rounded-full text-nowrap w-fit`}
                  >
                    {inStock ? "In Stock" : "Out Of Stock"}
                  </span>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3.5 sm:items-center justify-between">
                  <p>
                    <strong className="text-neutral">Category: </strong>
                    {subCategory}
                  </p>

                  <p>
                    <strong className="text-neutral">Available Items: </strong>
                    {availableQuantity}
                  </p>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3.5 sm:items-center justify-between">
                  <p className="text-[#2c732f] text-2xl font-medium">
                    ৳{price}
                  </p>

                  <p className="flex items-center gap-1.5">
                    <strong className="text-neutral">Rating:</strong>
                    <span className="flex items-center gap-1.5">
                      <FaStar fill="#FF8A00" size={18} /> {rating}
                    </span>
                  </p>
                </div>

                <div className="bg-primary/10 space-y-3.5 p-4 rounded-2xl max-w-sm w-full">
                  <p>
                    <strong className="text-neutral">Seller Name: </strong>
                    {sellerName}
                  </p>

                  <p>
                    <strong className="text-neutral">Seller Email: </strong>
                    {sellerEmail}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <strong className="underline inline-block">Description</strong>
              <p className="text-justify">{description}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ToyDetails;
