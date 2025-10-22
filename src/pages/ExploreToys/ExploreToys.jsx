import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ToyCard from "../../components/ToyCard/ToyCard";
import useToysData from "../../hooks/useToysData";

const ExploreToys = () => {
  const { allToys } = useToysData();

  const cardElements = allToys.map((item) => (
    <ToyCard key={item.toyId} singleToy={item} />
  ));

  return (
    <>
      <title>Explore Toys</title>

      <section className="my-16">
        <Container className="space-y-7">
          <Title className="text-center">All Toys</Title>
          <div className="grid md:grid-cols-4 gap-5">{cardElements}</div>
        </Container>
      </section>
    </>
  );
};

export default ExploreToys;
