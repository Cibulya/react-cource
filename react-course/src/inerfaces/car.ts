export interface Car {
    name: string;
    picture: string;
    year: string;
    drive: string;
    enginePower: string;
    about: string;
}

export interface Cars {
    cars: Car;
}

export type CarList = Car[];
