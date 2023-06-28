import Carlist from '../../components/templates/Carlist';
import carsdata from '../../data/carsdata';


const Suv = () => {

    const SuvCars= carsdata.filter(item=> item.category === 'suv')
    console.log(SuvCars);

    return (
        <div>
            <Carlist data={SuvCars}/>
        </div>
    );
};

export default Suv;