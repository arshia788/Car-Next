import CarsPage from "../components/templates/CarsPage";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import carsData from "../data/carsdata";
import AllButton from "../components/module/AllButton";


const index = () => {

  const newData = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={newData} />
    </div>
  );
};

export default index;