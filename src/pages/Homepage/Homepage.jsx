import Marquee from "react-fast-marquee";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ToyCard from "../../components/ToyCard/ToyCard";
import useToysData from "../../hooks/useToysData";
import { FcHome } from "react-icons/fc";
import { TiStarFullOutline } from "react-icons/ti";
import { SiAdguard } from "react-icons/si";
import { LuHandshake } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import Slider from "../../components/Slider/Slider";

const Homepage = () => {
  const navigate = useNavigate();
  const { allToys } = useToysData();
  const popularToys = allToys.filter((item) => item.isPopular);

  const sellerElements = allToys.map((item) => (
    <div
      key={item.toyId}
      className="bg-indigo-500 shadow-xl duration-300 p-5 rounded-md space-y-3.5 mx-5"
    >
      <p>
        <strong>Seller Name: </strong> {item.sellerName}
      </p>
      <p>
        <strong>Seller Email: </strong> {item.sellerEmail}
      </p>
    </div>
  ));

  const cardElements = popularToys.map((item) => (
    <ToyCard key={item.toyId} singleToy={item} />
  ));

  return (
    <>
      <title>Home - KidVenture</title>

      <section className="mt-10">
        <Container>
          <Slider />
        </Container>
      </section>

      <section>
        <Container className="space-y-5 md:space-y-7">
          <div className="flex items-center justify-between">
            <Title>Popular Toys</Title>
            <Link
              to="explore-toys"
              className="link link-hover font-['Raleway'] font-semibold text-lg"
            >
              All Toys
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
            {cardElements}
          </div>
        </Container>
      </section>

      <section className="py-10 bg-linear-to-b from-indigo-200 to-indigo-400">
        <Container className="space-y-7">
          <Title>Sellers Info</Title>

          <Marquee pauseOnHover={true} speed={100} className="text-white">
            {sellerElements}
          </Marquee>
        </Container>
      </section>

      <section className="py-16 bg-slate-200">
        <Container className="space-y-5">
          <div className="text-center space-y-3.5">
            <Title className="text-primary">Why Choose Us</Title>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Discover the difference of shopping with your community's toy
              experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="card-body items-center text-center gap-3.5">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <FcHome size={30} />
                </div>
                <h3 className="card-title text-lg">Support Local Dreams</h3>
                <p className="text-base-content/80">
                  Every purchase supports neighborhood toy stores and keeps the
                  magic in your community
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="card-body items-center text-center gap-3.5">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                  <TiStarFullOutline size={30} fill="#fb5200" />
                </div>
                <h3 className="card-title text-lg">Hand-Picked Excellence</h3>
                <p className="text-base-content/80">
                  Every toy is carefully selected by local experts who
                  understand what makes children smile
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="card-body items-center text-center gap-3.5">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <SiAdguard size={30} fill="green" />
                </div>
                <h3 className="card-title text-lg">Safety First, Always</h3>
                <p className="text-base-content/80">
                  All toys meet strict safety standards. We're parents too, so
                  we're extra careful
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="card-body items-center text-center gap-3.5">
                <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center">
                  <LuHandshake size={30} color="orange" />
                </div>
                <h3 className="card-title text-lg mb-2">More Than a Store</h3>
                <p className="text-base-content/80">
                  Meet local sellers, attend community events, and build lasting
                  relationships
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("explore-toys")}
              className="btn btn-primary btn-lg px-8 group"
            >
              Explore All Toys
              <FaArrowRightLong className="group-hover:ml-1.5 duration-300" />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homepage;
