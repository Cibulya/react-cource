export type FormElementsValues = {
    name: string;
    date: string;
    checkbox: boolean;
    // pill: 'Red' | 'Blue' | null;
    pill: string;
    fruits: string;
    file: string;
};

export type InternalState = {
    formElementsValues: FormElementsValues;
    formResults: FormElementsValues[];
};
