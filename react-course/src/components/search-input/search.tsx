import React from 'react';
import './search.scss';

class SearchInput extends React.Component<object, { search: string }> {
    constructor(props: object) {
        super(props);
        this.state = { search: localStorage.getItem('search') || '' };
    }

    componentWillUnmount(): void {
        const { search } = this.state;
        localStorage.setItem('search', search);
    }

    onchange = (event: unknown) => {
        this.setState({
            search: ((event as Event).target as HTMLInputElement).value,
        });
    };

    render(): React.ReactNode {
        const { search } = this.state;
        return (
            <form className="search__form">
                <input
                    className="search"
                    type="search"
                    value={search}
                    placeholder="Search something"
                    onChange={this.onchange}
                />
            </form>
        );
    }
}

export default SearchInput;
