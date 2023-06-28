import React from 'react';

const SearchBar = () => {
    return (
        <div className='flex justify-between items-center xs:flex-wrap md:flex-nowrap
        shadow-md shadow-gray-400 p-2 mb-4
        '>
            <div className='flex flex-col xs:w-full  md:w-11/12 box-border p-1' >
                <input
                className='w-full border-2 border-green-600 
                rounded-sm mb-2 placeholder:ml-1'
                    placeholder='enter min-price'
                />

                <input
                 className='w-full border-2 border-green-600 
                 rounded-sm mb-2'
                    placeholder='enter max-price'
                />
            </div>

            <button
            className='xs:w-full md:w-fit xs:py-2 bg-green-600 py-5 mb-2 px-2 text-center text-white
            rounded-sm cursor-pointer text-md
            '
            >Search</button>
        </div>
    );
};

export default SearchBar;