import carsJson from '../../assets/cars.json';
import Card from '../card/card';
import './cardlist.scss';

function CardList(): JSX.Element {
    return (
        <ul className="cars__cards" role="list">
            {carsJson.cars.map((car) => {
                return (
                    <Card
                        key={car.name}
                        name={car.name}
                        picture={car.picture}
                        year={car.year}
                        enginePower={car.enginePower}
                        drive={car.drive}
                        about={car.about}
                    />
                );
            })}
        </ul>
    );
}

export default CardList;
