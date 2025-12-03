export const filteredToys = (allToys, filterValue, sortOrder) => {
  let toys = [...allToys];

  switch (filterValue) {
    case "date":
      toys = toys.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);

        return sortOrder === -1 ? dateB - dateA : dateA - dateB;
      });
      break;
    case "name":
      toys = toys.sort((a, b) => {
        const nameA = a.toyName.toLowerCase();
        const nameB = b.toyName.toLowerCase();

        return sortOrder === -1
          ? nameB.localeCompare(nameA)
          : nameA.localeCompare(nameB);
      });
      break;
    case "rating":
      toys = toys.sort((a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        return sortOrder === -1 ? ratingB - ratingA : ratingA - ratingB;
      });
      break;
    case "price":
      toys = toys.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        return sortOrder === -1 ? priceB - priceA : priceA - priceB;
      });
      break;
  }

  return toys;
};
