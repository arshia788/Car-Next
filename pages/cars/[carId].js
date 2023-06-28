import { useRouter } from 'next/router';
import React from 'react';
import carsData from '../../data/carsdata';
import CarDetails from '../../components/templates/CarDetails';

const CarDetail = () => {

    const id= useRouter().query.carId;
    const carId = carsData[id - 1]
    

    return (
        <div>
            <CarDetails {...carId} />
        </div>
    );
};

export default CarDetail;