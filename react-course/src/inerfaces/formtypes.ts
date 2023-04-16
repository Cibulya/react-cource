export interface IFormElementsValues {
    id: number;
    name: string;
    date: string;
    checkbox: boolean;
    pill: string;
    fruits: string;
    file: string;
}

export interface IFormStates {
    values: IFormElementsValues;
    formResults: IFormElementsValues[];
}

export type TFormAnswers = IFormElementsValues[];

export interface ISearchInput {
    value: string;
}

export interface IFormArray {
    formResults: IFormElementsValues[];
}
