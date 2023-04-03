export interface InputProps {
    type: string;
    name: string;
    labelText: string;
    value: string;
}

export const options = [
    {
        label: 'Apple',
        value: 'apple',
    },
    {
        label: 'Mango',
        value: 'mango',
    },
    {
        label: 'Banana',
        value: 'banana',
    },
    {
        label: 'Pineapple',
        value: 'pineapple',
    },
];

export const inputsProps = {
    inputTypes: {
        textInput: 'text',
        dateInput: 'date',
        checkboxInput: 'checkbox',
        radioInput: 'radio',
        fileInput: 'file',
    },
    inputsNames: {
        textInput: 'text',
        dateInput: 'date',
        checkboxInput: 'checkbox',
        radioInput: 'pill',
        fileInput: 'file',
    },
    labelText: {
        textInput: 'Name:',
        dateInput: 'Date:',
        checkboxInput: 'Pablo:',
        radioInputOne: 'Red',
        radioInputTwo: 'Blue',
        fileInput: 'Image file:',
    },
};
