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
          <div className="space-y-2 text-center">
            <Title>All Toys</Title>
            <p className="max-w-lg mx-auto">
              All the toys your little dreamer needs, in one colorful,
              joy-packed place
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-7">
            {cardElements}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ExploreToys;
