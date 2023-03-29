import React from 'react';
import { FormElementsValues } from '../../inerfaces/formtypes';
import './formcardanswer.scss';

class FormAnswer extends React.Component<FormElementsValues, object> {
    render(): React.ReactNode {
        return (
            <div className="form__answer">
                <p className="answer__name">Your name {this.props.name}</p>
                <p className="answer__date">This date {this.props.date}</p>
                <p className="answer__checkbox">Pablo {this.props.checkbox}</p>
                <p className="answer__pill">Take this {this.props.pill}</p>
                <p className="answer__fruits">The {this.props.fruits}</p>
                <img
                    className="answer__file"
                    src={this.props.file}
                    alt="foto"
                />
            </div>
        );
    }
}

export default FormAnswer;
