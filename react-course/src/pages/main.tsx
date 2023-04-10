import { useEffect, useState } from 'react';
import PostService from '../api/postService';
import ApiCardList from '../components/card-list-for-api/cardListForApi';
import Loading from '../components/loadingThing/loading';
import '../components/search-input/search.scss';
import { Character } from '../inerfaces/apiData';

function MainPage() {
    const [data, setData] = useState<Character[]>([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    function onChange(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            setQuery(e.currentTarget.value);
        }
    }

    useEffect(() => {
        async function filter() {
            setLoading(true);
            const cards = await PostService.getData();
            setData(cards.results);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        filter();
    }, []);

    useEffect(() => {
        async function filteredFetch() {
            const filtered = await PostService.getFilteredData(query);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setData(filtered.results);
            }, 500);
        }
        filteredFetch();
    }, [query]);

    return (
        <div>
            <form
                className="search__form"
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                }}
            >
                <label htmlFor="search">
                    <input
                        defaultValue={localStorage.getItem('search') as string}
                        onKeyDown={onChange}
                        className="search"
                        type="text"
                        role="input"
                        placeholder="Search something"
                    />
                </label>
            </form>
            {loading ? <Loading /> : <ApiCardList results={data} />}
        </div>
    );
}

export default MainPage;
