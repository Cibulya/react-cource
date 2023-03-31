import React, { useEffect, useState } from 'react';
import './search.scss';

function SearchInput(): JSX.Element {
    const [value, setValue] = useState<string>(
        localStorage.getItem('search') || ''
    );

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        sessionStorage.setItem('search', value);
    };

    useEffect(() => {
        return () => {
            localStorage.setItem(
                'search',
                sessionStorage.getItem('search') as string
            );
        };
    }, []);

    return (
        <form className="search__form">
            <input
                onChange={onchange}
                value={value}
                className="search"
                type="search"
                placeholder="Search something"
            />
        </form>
    );
}

export default SearchInput;
