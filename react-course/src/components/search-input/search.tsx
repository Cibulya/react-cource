import React, { useEffect, useRef, useState } from 'react';
import './search.scss';

function SearchInput(): JSX.Element {
    const [value, setValue] = useState<string>(
        localStorage.getItem('search') || ''
    );
    const inpReff = useRef(value);

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    useEffect(() => {
        inpReff.current = value;
    }, [value]);

    useEffect(() => {
        return () => {
            localStorage.setItem('search', inpReff.current);
        };
    }, []);

    return (
        <form
            className="search__form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            }}
        >
            <input
                role="input"
                onChange={onchange}
                value={value}
                className="search"
                type="search"
                placeholder="Search something"
                ref={() => value}
            />
        </form>
    );
}

export default SearchInput;
