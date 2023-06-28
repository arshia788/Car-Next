import Link from "next/link";
import Sedan from '../icons/Sedan';
import Suv from '../icons/Suv';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

const Categories = () => {
    return (
        <div className="flex justify-between 
         items-center w-10/12 mx-auto gap-x-1">

            <Link href='/categories/sedan' >
                <div className="flex flex-col
             bg-green-600 
             py-1 px-8 rounded-sm text-lg
             text-white items-center">
                    <p>sedan</p>
                    <Sedan
                    />
                </div>
            </Link>

            <Link href='/categories/suv'>
                <div className="flex flex-col bg-green-600 
            py-1 px-8 rounded-sm text-lg
            text-white items-center">
                    <p>suv</p>
                    <Suv />
                </div>
            </Link>


            <Link href='/categories/hatchback'>
                <div className="flex flex-col bg-green-600 
            py-1 px-6 rounded-sm text-lg
            text-white items-center">
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>

            <Link href='/categories/sport'>
                <div className="flex flex-col bg-green-600 
            py-1 px-8 rounded-sm text-lg
            text-white items-center">
                    <p>sport</p>
                    <Sport />
                </div>
            </Link>

        </div>
    );
};

export default Categories;