import React from 'react';
import Company from '../icons/Company';
import Model from '../icons/Model';
import Location from '../icons/Location';
import Money from '../icons/Money';
import Road from '../icons/Road';
import Calender from '../icons/Calender';

const CarDetails = (props) => {
    const {
        name, image, id, model,
        year, distance, location, price,
        description
    } = props
    return (
        <div>
            <img
                className='rounded-sm'
                src={image}
                alt={id}
            />

            <h3 className='font-semibold my-3 text-xl'>{name} {model}</h3>

            <div className='flex justify-between flex-wrap flex-col
            shadow-md p-3 shadow-gray-400 rounded-sm gap-y-4
            '>

                <div className='flex justify-between items-center '>
                    <div className='flex items-center'>
                        <Company />
                        <p className='ml-2 font-semibold'>company</p>
                    </div>
                    <p>{name}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Model />
                        <p className='ml-2 font-semibold'>model</p>
                    </div>
                    <p>{model}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Calender />
                        <p className='ml-2 font-semibold'>first registration</p>
                    </div>
                    <p>{year}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Road />
                        <p className='ml-2 font-semibold'>kms droven</p>
                    </div>
                    <p>{distance}</p>
                </div>
            </div>

            <div className='flex justify-between items-center
            shadow-md p-3 shadow-gray-400 my-10'>

                <div className='flex '>
                    <Location />
                    <p className='ml-2 font-semibold'>kms driven</p>
                </div>
                <p>{location}</p>
            </div>

            <div className='shadow-md p-3 shadow-gray-400 
            my-10 items-center'>
                <p
                className='text-xl font-semibold'
                >Extra Information</p>
                <p>{description}</p>
            </div>

            <div className='flex justify-between items-center
            shadow-md p-3 shadow-gray-400 my-10'>

                <div className='flex items-center'>
                    <Money />
                    <p className='ml-2 font-semibold'>price</p>
                </div>
                <p>{price}</p>
            </div>

        </div>
    );
};

export default CarDetails;