import Carlist from '../../components/templates/Carlist';
import carsdata from '../../data/carsdata';


const Sedan = () => {

    const sedanCars= carsdata.filter(item=> item.category === 'sedan')
    console.log(sedanCars);

    return (
        <div>
            <Carlist data={sedanCars}/>
        </div>
    );
};

export default Sedan;