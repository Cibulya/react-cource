import { IFormElementsValues } from '../../inerfaces/formtypes';
import './formcardanswer.scss';

function FormAnswer(props: IFormElementsValues) {
    return (
        <div className="form__answer">
            <p className="answer__name">Your name {props.name}</p>
            <p className="answer__date">This date {props.date}</p>
            <p className="answer__checkbox">
                The {props.checkbox} is somewhere near...
            </p>
            <p className="answer__pill">Take this {props.pill} pill</p>
            <p className="answer__fruits">The {props.fruits}</p>
            <img className="answer__file" src={props.file} alt="foto" />
        </div>
    );
}

export default FormAnswer;
