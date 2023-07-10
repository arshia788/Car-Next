import Link from "next/link";
import Location from "../icons/Location";

const Card = (props) => {
    const { name, image, id, model,
        year, distance, location, price, company
    } = props

    console.log(props);

    return (
        <div className='shadow-lg shadow-gray-300 p-1 box-border 
        max-h-full
        '>
            <Link href={`/cars/${id}`}>
                
                <img src={image}
                    className='rounded-md overflow-hidden '
                    alt={id}
                />
                <h3 className='font-semibold text-sm'> {`${name} ${model}`} </h3>
                <p className='text-gray-500 mt-1'>{year}. {distance}k/m</p>

                {
                   
                   name === 'Maserati' &&
                    <div className='flex justify-between items-center mt-5 py-3'>

                        <p className='bg-green-600 rounded-md text-md text-white'>$ {price}</p>
                        <div className='flex items-center'>
                            <p className="mb-1">{location}</p>
                            <Location
                            />
                        </div>
                    </div>
                }

                {
                    name !== 'Maserati' && <div className=' flex justify-between items-center my-3'>
                        <p className='bg-green-600 rounded-md text-md text-white'>$ {price}</p>
                        <div className='flex items-center'>
                            <p className="mb-1">{location}</p>
                            <Location
                            />
                        </div>
                    </div>
                }

            </Link>
        </div>
    );
};

export default Card;