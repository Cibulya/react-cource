import React from 'react';
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

class FormComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <form className="form">
                <p className="form__title">Form</p>
                <fieldset>
                    <label htmlFor="name">
                        Name:
                        <input type="text" name="name" required />
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="date">
                        Date:
                        <input type="date" name="date" required />
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="checkobox">
                        Pablo:
                        <input type="checkbox" name="checkbox" required />
                    </label>
                </fieldset>
                <fieldset>
                    <div className="radio">
                        <input type="radio" value="Red" name="pill" /> Red
                        <input type="radio" value="Blue" name="pill" />
                        Blue
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <select>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="file">
                        Image file:
                        <input type="file" id="file" />
                    </label>
                </fieldset>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default FormComponent;
