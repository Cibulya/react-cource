import { useEffect, useState } from 'react';
import PostService from '../api/postService';
import ApiCardList from '../components/card-list-for-api/cardListForApi';
import Loading from '../components/loadingThing/loading';
import SearchInput from '../components/search-input/search';
import '../components/search-input/search.scss';
import { Character } from '../inerfaces/apiData';

function MainPage() {
    const [data, setData] = useState<Character[]>([]);
    const [query, setQuery] = useState(localStorage.getItem('search') || '');
    const [loading, setLoading] = useState(false);

    async function filteredFetch() {
        try {
            const filtered = await PostService.getFilteredData(query);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setData(filtered.results);
            }, 500);
        } catch (e) {
            if (e) {
                setData([]);
            }
        }
    }
    async function firstFetch() {
        setLoading(true);
        const cards = await PostService.getData();
        setData(cards.results);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    const onChange = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            localStorage.setItem('search', e.currentTarget.value);
            setQuery(localStorage.getItem('search') as string);
        }
    };

    useEffect(() => {
        if (query !== '') {
            setQuery(query);
            filteredFetch();
        } else {
            firstFetch();
        }
    }, [query]);

    return (
        <div>
            <SearchInput initValue={query} setSearchValue={onChange} />
            {loading ? <Loading /> : <ApiCardList results={data} />}
        </div>
    );
}

export default MainPage;
