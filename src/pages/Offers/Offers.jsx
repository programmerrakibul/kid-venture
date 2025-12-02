import { useNavigate } from "react-router";
import OfferCard from "../../components/OfferCard/OfferCard";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import { FaArrowRightLong } from "react-icons/fa6";
import MyButton from "../../components/MyButton/MyButton";
import { offersData } from "../../data/offersData";

const Offers = () => {
  const navigate = useNavigate();

  const offerCardElements = offersData.map((item) => (
    <OfferCard key={item.id} singleOffer={item} />
  ));

  return (
    <>
      <title>Exclusive Offers | KidVenture</title>

      <section className="py-8 md:py-12">
        <Container className="space-y-10">
          <div className="text-center space-y-3">
            <Title className="text-center">Special Offers</Title>
            <p>
              Exclusive deals and discounts on educational toys for your little
              ones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {offerCardElements}
          </div>

          <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-3.5">
            <h3 className="text-xl sm:text-2xl font-bold">
              Can't Find What You're Looking For?
            </h3>

            <p>Browse our full collection of educational toys and games</p>

            <MyButton
              handleClick={() => navigate("/explore-toys")}
              className="btn-lg px-8 group"
            >
              Explore All Toys
              <FaArrowRightLong className="group-hover:ml-1.5 duration-300" />
            </MyButton>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Offers;
