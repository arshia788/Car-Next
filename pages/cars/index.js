import carsData from "../../data/carsdata";

// template
import CarsPage from "../../components/templates/CarsPage";
import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";


const Details = () => {
    return (
        <div>
            <SearchBar />
            <Categories />
            <CarsPage data={carsData} />
        </div>
    );
};

export default Details;