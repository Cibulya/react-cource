import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { cardSlice } from '../../rtk/store/reducers/CardSlice';
import './search.scss';

function SearchInput(): JSX.Element {
    const { searchQuery } = useAppSelector((state) => state.cardReducer);
    const { setSearchQuery } = cardSlice.actions;
    const dispatch = useAppDispatch();

    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setSearchQuery(e.currentTarget.value));
        }
    };
    return (
        <form
            className="search__form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            }}
        >
            <input
                role="input"
                onKeyDown={onKeyEnter}
                defaultValue={searchQuery}
                className="search"
                type="search"
                placeholder="Search something"
            />
        </form>
    );
}

export default SearchInput;
