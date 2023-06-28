import Carlist from '../../components/templates/Carlist';
import carsdata from '../../data/carsdata';


const Hatchback = () => {

    const hatchbackCars= carsdata.filter(item=> item.category === 'hatchback')
    console.log(hatchbackCars);

    return (
        <div>
            <Carlist data={hatchbackCars}/>
        </div>
    );
};

export default Hatchback;