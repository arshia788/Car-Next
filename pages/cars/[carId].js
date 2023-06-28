import { useRouter } from 'next/router';
import React from 'react';
import carsData from '../../data/carsdata';

const CarDetail = () => {

    const id= useRouter().query.carId;
    const carId = carsData[id - 1]
    console.log(carId);
    

    return (
        <div>
            id 
        </div>
    );
};

export default CarDetail;