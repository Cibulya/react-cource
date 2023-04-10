import axios from 'axios';
import RequestLinks from './urlsToRequest';

class PostService {
    static async getData() {
        const cards = await axios.get(RequestLinks.firstFetch);
        return cards.data;
    }

    static async getFilteredData(filter: string) {
        const filteredCards = await axios.get(
            RequestLinks.fetchFilter + filter
        );
        return filteredCards.data;
    }
}

export default PostService;
