import React from 'react';
import ISearch from '../../inerfaces/searchInput';
import './search.scss';

function SearchInput(props: ISearch): JSX.Element {
    const { initValue, setSearchValue } = props;

    return (
        <form
            className="search__form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            }}
        >
            <input
                role="input"
                onKeyDown={setSearchValue}
                defaultValue={initValue}
                className="search"
                type="search"
                placeholder="Search something"
            />
        </form>
    );
}

export default SearchInput;
