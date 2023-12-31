import Link from "next/link";
import Sedan from '../icons/Sedan';
import Suv from '../icons/Suv';
import Hatchback from '../icons/Hatchback';
import Sport from '../icons/Sport';

const Categories = () => {
    return (
        <div className="grid grid-cols-12
         items-center w-10/12 mx-auto gap-x-1
         xs:w-full
         mb-4
         ">

            <Link href='/categories/sedan' 
            className="
                xs:col-span-12
                md:col-span-6
                lg:col-span-3
                mb-2
            ">
                <div className="
                flex flex-col 
             bg-green-600 
             rounded-sm text-lg
             text-white items-center">
                    <p>sedan</p>
                    <Sedan
                    />
                </div>
            </Link>

            <Link href='/categories/suv' 
            className="
                xs:col-span-12
                md:col-span-6
                lg:col-span-3
                mb-2
            ">
                <div className="
                flex flex-col 
             bg-green-600 
             rounded-sm text-lg
             text-white items-center">
                    <p>suv</p>
                    <Suv
                    />
                </div>
            </Link>

            <Link href='/categories/hatchback' 
            className="
                xs:col-span-12
                md:col-span-6
                lg:col-span-3
                mb-2
            ">
                <div className="
                flex flex-col 
             bg-green-600 
             rounded-sm text-lg
             text-white items-center">
                    <p>Hatchback</p>
                    <Hatchback
                    />
                </div>
            </Link>

            <Link href='/categories/sport' 
            className="
                xs:col-span-12
                md:col-span-6
                lg:col-span-3
                mb-2
            ">
                <div className="
                flex flex-col 
             bg-green-600 
             rounded-sm text-lg
             text-white items-center">
                    <p>Sport</p>
                    <Sport
                    />
                </div>
            </Link>

        </div>
    );
};

export default Categories;