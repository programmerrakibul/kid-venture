import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ToyCard from "../../components/ToyCard/ToyCard";
import useToysData from "../../hooks/useToysData";

const Homepage = () => {
  const { allToys } = useToysData();
  const popularToys = allToys.filter((item) => item.isPopular);

  const cardElements = popularToys.map((item) => (
    <ToyCard key={item.toyId} singleToy={item} />
  ));

  return (
    <section>
      <Container className="space-y-7">
        <Title>Popular Toys</Title>
        <div className="grid md:grid-cols-3 gap-7">{cardElements}</div>
      </Container>
    </section>
  );
};

export default Homepage;
