import React from 'react';
import CardList from '../components/cardlist/cardList';
import SearchInput from '../components/search-input/search';

class MainPage extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <SearchInput />
                <CardList />
            </>
        );
    }
}

export default MainPage;
