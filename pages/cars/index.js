import carsData from "../../data/carsdata";

// template
import CarsPage from "../../components/templates/CarsPage";


const Details = () => {
    return (
        <div>
                <CarsPage data={carsData} />
        </div>
    );
};

export default Details;