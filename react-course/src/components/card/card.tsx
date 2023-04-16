import { Car } from '../../inerfaces/car';
import './card.scss';

function Card({ name, picture, year, drive, enginePower, about }: Car) {
    return (
        <li className="car__card">
            <p className="car__name">{name}</p>
            <img src={picture} alt="carImage" className="car__image" />
            <div className="car__spec">
                <p className="spec__year">{year}</p>
                <p className="spec__wheeldrive">{drive}</p>
                <p className="spec__engine">{enginePower}</p>
            </div>
            <div className="car__about">{about}</div>
        </li>
    );
}

export default Card;
