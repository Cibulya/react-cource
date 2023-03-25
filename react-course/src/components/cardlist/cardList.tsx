import React from 'react';
import carsJson from '../../assets/cars.json';
import { CarList } from '../../inerfaces/car';
import Card from '../card/card';
import './cardlist.scss';

class CardList extends React.Component {
    render(): React.ReactNode {
        const carArray: CarList = [];
        carsJson.cars.forEach((car) => {
            return carArray.push(car);
        });

        return (
            <ul className="cars__cards" role="list">
                {carArray.map((car, name) => (
                    <Card key={car.name} cars={carArray[name]} />
                ))}
            </ul>
        );
    }
}

export default CardList;
