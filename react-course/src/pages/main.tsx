import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import cardsAPI from '../api/card-service';
import ApiCardList from '../components/card-list-for-api/cardListForApi';
import ErrorMessage from '../components/error/error';
import Loading from '../components/loadingThing/loading';
import SearchInput from '../components/search-input/search';
import '../components/search-input/search.scss';
import { useAppSelector } from '../hooks/redux';

function MainPage() {
    const { searchQuery } = useAppSelector((state) => state.cardReducer);

    const {
        data: filteredFetch,
        isLoading: loadingFiltered,
        isError: fiteredFetchError,
        error: errorText,
    } = cardsAPI.useFilterFetchQuery(searchQuery);

    return (
        <div>
            <SearchInput />
            {loadingFiltered && <Loading />}
            {fiteredFetchError ? (
                <ErrorMessage>
                    Something went wrong, an error occurred ... We have paws
                    ....
                    <div>
                        Error code: {(errorText as FetchBaseQueryError).status}
                    </div>
                </ErrorMessage>
            ) : null}
            {!fiteredFetchError && filteredFetch && (
                <ApiCardList results={filteredFetch.results} />
            )}
        </div>
    );
}

export default MainPage;
