import Marquee from "react-fast-marquee";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ToyCard from "../../components/ToyCard/ToyCard";
import useToysData from "../../hooks/useToysData";

const Homepage = () => {
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
      <section>
        <Container className="space-y-7">
          <Title>Popular Toys</Title>
          <div className="grid md:grid-cols-3 gap-7">{cardElements}</div>
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
    </>
  );
};

export default Homepage;
