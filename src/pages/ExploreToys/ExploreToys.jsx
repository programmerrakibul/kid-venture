import { useState } from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ToyCard from "../../components/ToyCard/ToyCard";
import useToysData from "../../hooks/useToysData";
import { filteredToys } from "../../utilities/filteredToys";

const ExploreToys = () => {
  const { allToys } = useToysData();
  const [filterValue, setFilterValue] = useState("date");
  const [sortOrder, setSortOrder] = useState(1);

  const cardElements = filteredToys(allToys, filterValue, sortOrder).map(
    (item) => <ToyCard key={item.toyId} singleToy={item} />
  );

  return (
    <>
      <title>Explore Toys | KidVenture</title>

      <section className="my-8">
        <Container className="space-y-5 md:space-y-7">
          <div className="space-y-2 text-center">
            <Title>All Toys</Title>
            <p className="max-w-lg mx-auto">
              All the toys your little dreamer needs, in one colorful,
              joy-packed place
            </p>
          </div>

          <div>
            <div className="join flex justify-end">
              <select
                value={sortOrder}
                className="select join-item w-fit"
                onChange={(e) => setSortOrder(Number(e.target.value))}
              >
                {filterValue === "date" && (
                  <>
                    <option value={-1}>Newest</option>
                    <option value={1}>Oldest</option>
                  </>
                )}

                {filterValue === "name" && (
                  <>
                    <option value={1}>Ascending</option>
                    <option value={-1}>Descending</option>
                  </>
                )}

                {filterValue === "rating" && (
                  <>
                    <option value={1}>Lowest</option>
                    <option value={-1}>Highest</option>
                  </>
                )}

                {filterValue === "price" && (
                  <>
                    <option value={-1}>Highest</option>
                    <option value={1}>Lowest</option>
                  </>
                )}
              </select>

              <select
                value={filterValue}
                className="select join-item w-fit"
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <option value="date">Sort By Date</option>
                <option value="name">Sort By Name</option>
                <option value="rating">Sort By Rating</option>
                <option value="price">Sort By Price</option>
              </select>
            </div>
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
