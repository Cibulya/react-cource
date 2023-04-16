export interface CardsState {
    cards: Character[];
    searchQuery: string;
}

export interface Info {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
}

export interface Character {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface ApiData {
    info: Info;
    results: Character[];
}

export type TCharacters = Character[];

export type CharForCards = Pick<
    Character,
    'created' | 'gender' | 'id' | 'image' | 'location' | 'name' | 'status'
>;
export type ResultsData = Pick<ApiData, 'results'>;
