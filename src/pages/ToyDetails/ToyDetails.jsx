import { useLocation } from "react-router";
import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";

const ToyDetails = () => {
  const { state: singleToy } = useLocation();
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
  } = singleToy;

  const inStock = availableQuantity > 0;

  return (
    <>
      <title>{toyName}</title>
      <section className="my-10">
        <Container>
          <div className="flex flex-col md:flex-row gap-7 border-gray-300 shadow-lg rounded-xl border-2 overflow-hidden bg-indigo-100">
            <img className="flex-1/4" src={pictureURL} alt={toyName} />
            <div className="p-5 flex-3/4 text-[#807b7b] space-y-4">
              <div className="flex gap-5 items-center">
                <h1 className="text-3xl font-semibold text-neutral">
                  {toyName}
                </h1>

                <span
                  className={`${
                    inStock
                      ? "text-green-700 bg-green-200"
                      : "text-red-700 bg-red-200"
                  } px-5 py-1 font-semibold rounded-full text-nowrap`}
                >
                  {inStock ? "In Stock" : "Out Of Stock"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p>
                  <strong className="text-neutral">Available Items: </strong>
                  {availableQuantity}
                </p>

                <p className="flex items-center gap-1.5">
                  <strong className="text-neutral">Rating:</strong>
                  <span className="flex items-center gap-1.5">
                    <FaStar fill="#FF8A00" size={18} /> {rating}
                  </span>
                </p>
              </div>

              <p className="text-[#2c732f] text-2xl font-medium">৳{price}</p>

              <p>{description}</p>

              <p>
                <strong className="text-neutral">Category: </strong>
                {subCategory}
              </p>

              <div className="bg-teal-100 space-y-3.5 p-4 rounded-2xl">
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
        </Container>
      </section>
    </>
  );
};

export default ToyDetails;
