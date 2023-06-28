import Carlist from '../../components/templates/Carlist';
import carsdata from '../../data/carsdata';


const Sport = () => {

    const SportCars= carsdata.filter(item=> item.category === 'sport')
    console.log(SportCars);

    return (
        <div>
            <Carlist data={SportCars}/>
        </div>
    );
};

export default Sport;