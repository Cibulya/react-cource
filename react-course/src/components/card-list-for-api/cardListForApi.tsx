/* eslint-disable react/function-component-definition */
import { CharForCards, ResultsData } from '../../inerfaces/apiData';
import ApiCard from '../card-for-api/card-for-api';

function ApiCardList(posts: ResultsData) {
    if (!posts.results.length) {
        return <h1>There is no data</h1>;
    }
    return (
        <ul className="cars__cards">
            {posts.results.map((card: CharForCards) => (
                <ApiCard
                    key={card.id}
                    name={card.name}
                    image={card.image}
                    created={card.created}
                    id={card.id}
                    location={card.location}
                    gender={card.gender}
                    status={card.status}
                />
            ))}
        </ul>
    );
}

export default ApiCardList;
