import { CharForCards, ResultsData } from '../../inerfaces/apiData';
import ApiCard from '../card-for-api/card-for-api';

function ApiCardList(posts: ResultsData) {
    if (!posts.results) {
        return <div>Error</div>;
    }
    return (
        <ul className="cars__cards">
            {posts.results.map(
                (card: Pick<CharForCards, 'name' | 'image' | 'id'>) => (
                    <ApiCard
                        key={card.id}
                        name={card.name}
                        image={card.image}
                        id={card.id}
                    />
                )
            )}
        </ul>
    );
}

export default ApiCardList;
