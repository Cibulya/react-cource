import React from 'react';
import { Car, Cars } from '../../inerfaces/car';
import './card.scss';

class Card extends React.Component<Cars, Car> {
    constructor(props: Cars) {
        super(props);
        this.state = {
            name: props.cars.name,
            picture: props.cars.picture,
            year: props.cars.year,
            drive: props.cars.drive,
            enginePower: props.cars.enginePower,
            about: props.cars.about,
        };
    }

    render(): React.ReactNode {
        return (
            <li className="car__card">
                <p className="car__name">{this.state.name}</p>
                <img
                    src={this.state.picture}
                    alt="carImage"
                    className="car__image"
                />
                <div className="car__spec">
                    <p className="spec__year">{this.state.year}</p>
                    <p className="spec__wheeldrive">{this.state.drive}</p>
                    <p className="spec__engine">{this.state.enginePower}</p>
                </div>
                <div className="car__about">{this.state.about}</div>
            </li>
        );
    }
}

export default Card;
