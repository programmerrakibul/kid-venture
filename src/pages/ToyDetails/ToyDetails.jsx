import { useLocation, useNavigate } from "react-router";
import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useState } from "react";

const ToyDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.currentTarget.name.value;

    setLoading(false);
    e.currentTarget.reset();
    toast.success(`Thank you, ${name}! We've received your request`);
  };

  return (
    <>
      <title>{toyName}</title>

      <section className="mt-10">
        <Container>
          <div className="space-y-3.5 bg-indigo-100 border-primary-content shadow-lg rounded-xl border-2 p-5">
            <button
              onClick={() => navigate(-1)}
              className="link link-hover font-semibold text-secondary"
            >
              <FaArrowLeftLong className="inline-block mr-1" /> Go Back
            </button>
            <div className="flex flex-col sm:flex-row gap-7">
              <div className="flex-1/3 grid place-items-center shadow-md rounded-xl overflow-hidden">
                <img src={pictureURL} className="w-full" alt={toyName} />
              </div>

              <div className="flex-2/3 text-[#807b7b] space-y-4">
                <div className="flex gap-5 items-center">
                  <h1 className="text-xl md:text-3xl font-semibold text-neutral">
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

                <p>
                  <strong className="text-neutral">Category: </strong>
                  {subCategory}
                </p>

                <p className="text-[#2c732f] text-2xl font-medium">৳{price}</p>
              </div>
            </div>
            <div className="space-y-3.5">
              <p>{description}</p>

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
            </div>{" "}
          </div>
        </Container>
      </section>

      <section className="mb-10 bg-slate-200 py-7">
        <Container className="grid place-items-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-lg w-full bg-slate-300 p-5 rounded-lg shadow-lg shadow-indigo-200"
          >
            <div className="space-y-1">
              <label className="label font-semibold text-primary">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input bg-indigo-100 outline-indigo-400"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="label font-semibold text-primary">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input bg-indigo-100 outline-indigo-400"
                required
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary w-full mt-6"
            >
              {loading ? "Please wait..." : "Try Now"}
            </button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default ToyDetails;
