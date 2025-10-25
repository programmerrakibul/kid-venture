import { useNavigate, useParams } from "react-router";
import Container from "../../components/Container/Container";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useState } from "react";
import useToysData from "../../hooks/useToysData";
import PopularBadge from "../../components/PopularBadge/PopularBadge";
import MyButton from "../../components/MyButton/MyButton";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";

const ToyDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { allToys } = useToysData();
  const { id } = useParams();
  const singleToy = allToys.find((item) => item.toyId === Number(id));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = form.name.value.trim();

    if (!name) {
      toast.warn("Invalid Name");
      setLoading(false);
      return;
    }

    setLoading(false);
    form.reset();
    toast.success(`Thank you, ${name}! We've received your request`);
  };

  return (
    <>
      <title>{toyName}</title>

      <section className="mt-10">
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

      <section className="mb-10 bg-primary/7 py-7">
        <Container className="grid place-items-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-lg w-full bg-linear-to-r from-primary/15 to-secondary/15 p-5 rounded-lg shadow-lg shadow-indigo-200"
          >
            <div className="space-y-1">
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" name="name" holder="Enter your full name" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" name="email" holder="Enter your email" />
            </div>

            <MyButton disable={loading} className="btn-block mt-6">
              {loading ? "Please wait..." : "Try Now"}
            </MyButton>
          </form>
        </Container>
      </section>
    </>
  );
};

export default ToyDetails;
