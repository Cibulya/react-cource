/* eslint-disable react/no-unused-state */
import React from 'react';
import { InternalState } from '../../inerfaces/formtypes';
import FormAnswer from '../formcardanswer/formcardanswer';
import './form.scss';

const options = [
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

class FormComponent extends React.Component<object, InternalState> {
    formInput: React.RefObject<HTMLInputElement>;

    formSelect: React.RefObject<HTMLSelectElement>;

    constructor(props: InternalState) {
        super(props);
        this.formSelect = React.createRef();
        this.formInput = React.createRef();
        this.state = {
            formElementsValues: {
                name: '',
                date: '',
                checkbox: true,
                pill: '',
                fruits: '',
                file: '',
            },
            formResults: [],
        };
        this.getFormInfo = this.getFormInfo.bind(this);
        this.getInputsValues = this.getInputsValues.bind(this);
    }

    getInputsValues(
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) {
        this.setState((prevState) => ({
            ...prevState,
            formElementsValues: {
                ...prevState.formElementsValues,
                [event.target.name]: event.target.value,
            },
        }));
    }

    getFormInfo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (this.formInput.current?.files) {
            const imagePreview = URL.createObjectURL(
                this.formInput.current.files[0]
            );
            this.setState((prevState) => ({
                ...prevState,
                formElementsValues: {
                    ...prevState.formElementsValues,
                    file: imagePreview,
                },
            }));
        }
        this.setState((prevState) => ({
            ...prevState,
            formResults: [
                ...prevState.formResults,
                prevState.formElementsValues,
            ],
        }));
        (event.target as HTMLFormElement).reset();
        this.setState({
            formElementsValues: {
                name: '',
                date: '',
                checkbox: false,
                pill: '',
                fruits: '',
                file: '',
            },
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <form className="form" onSubmit={this.getFormInfo}>
                    <p className="form__title">Form</p>
                    <fieldset>
                        <label htmlFor="name">
                            Name:
                            <input
                                onChange={this.getInputsValues}
                                ref={this.formInput}
                                type="text"
                                name="name"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="date">
                            Date:
                            <input
                                onChange={this.getInputsValues}
                                ref={this.formInput}
                                type="date"
                                name="date"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="checkbox">
                            Pablo:
                            <input
                                onChange={this.getInputsValues}
                                ref={this.formInput}
                                type="checkbox"
                                name="checkbox"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <div className="radio">
                            <label htmlFor="red">
                                RED
                                <input
                                    onChange={this.getInputsValues}
                                    ref={this.formInput}
                                    type="radio"
                                    value="Red"
                                    name="pill"
                                    id="red"
                                />
                            </label>
                            <label htmlFor="blue">
                                <input
                                    onChange={this.getInputsValues}
                                    ref={this.formInput}
                                    type="radio"
                                    value="Blue"
                                    name="pill"
                                    id="blue"
                                />
                                BLUE
                            </label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <select
                                onChange={this.getInputsValues}
                                ref={this.formSelect}
                                name="fruits"
                            >
                                {options.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="file">
                            Image file:
                            <input
                                ref={this.formInput}
                                onChange={this.getInputsValues}
                                type="file"
                                id="file"
                                name="file"
                                accept="image/*"
                            />
                        </label>
                    </fieldset>
                    <button className="form__submit" type="submit">
                        submit
                    </button>
                </form>
                <div className="form__answers">
                    {this.state.formResults.map((result, i) => (
                        <FormAnswer
                            key={this.state.formResults[i].name}
                            name={result.name}
                            date={result.date}
                            checkbox={result.checkbox}
                            pill={result.pill}
                            fruits={result.fruits}
                            file={result.file}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default FormComponent;
