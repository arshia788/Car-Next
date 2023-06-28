import { useRouter } from 'next/router';
import carsData from '../../data/carsdata';
import Card from '../../components/module/Card';
import Carlist from '../../components/templates/Carlist';

const FilteredCars = () => {

    const filteredSlug= useRouter().query.slugs || [];
    const [min, max]= filteredSlug
    
    const newData= carsData.filter(item=> item.price > min && item.price < max )

    if(!newData.length){
        return <h2
        className='text-xl font-semibold text-center'
        >there isn't any car realted to your filter</h2>
    }

    return (
        <div>
            <Carlist data={newData}/>

            {/* {
                newData.map(item=>{
                    return(
                        <div key={item.id}
                        className='xs:col-span-12 md:col-span-6 lg:col-span-4'
                        >
                            <Card {...item}/>
                        </div>
                    )
                })
            } */}
            
        </div>
    );
};

export default FilteredCars;