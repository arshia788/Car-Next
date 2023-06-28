import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchBar = () => {

    const [min, setMin]= useState('');
    const [max, setMax]= useState('');
    const router= useRouter()

    console.log(min);


    // gofti ke agar har 2 bashe biad anjam bedeh 
    const searchHandler=()=>{
        if(min && max){

            // * omadi frestadi be on safhe va rafti on ha ro ham behesh
            router.push(`/filter/${min}/${max}`)
        }else{
            alert('Please enter the max and min of the inputs! ')
        }
    }

    return (
        <div className='flex justify-between items-center xs:flex-wrap md:flex-nowrap
        shadow-md shadow-gray-400 p-2 mb-4
        '>
            <div className='flex flex-col xs:w-full  md:w-11/12 box-border p-1' >
                <input
                value={min}
                onChange={e=> setMin(e.target.value)}

                className='w-full border-2 border-green-600 
                rounded-sm mb-2 placeholder:ml-1 outline-none'
                    placeholder='enter min-price'
                />

                <input
                value={max}
                onChange={e=> setMax(e.target.value)}
                
                className='w-full border-2 border-green-600 
                rounded-sm mb-2 outline-none'
                placeholder='enter max-price'
                />
            </div>

            <button
            onClick={searchHandler}
            className='xs:w-full md:w-fit xs:py-2 bg-green-600 py-5 mb-2 px-2 text-center text-white
            rounded-sm cursor-pointer text-md
            '
            >Search</button>
        </div>
    );
};

export default SearchBar;