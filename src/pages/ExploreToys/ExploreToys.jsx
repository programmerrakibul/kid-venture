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

      <section className="my-8">
        <Container className="space-y-5 md:space-y-7">
          <Title className="text-center">All Toys</Title>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
            {cardElements}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ExploreToys;
