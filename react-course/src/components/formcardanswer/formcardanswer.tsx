import { IFormElementsValues } from '../../inerfaces/formtypes';
import './formcardanswer.scss';

function FormAnswer(answer: IFormElementsValues) {
    const { name, date, checkbox, pill, file, fruits } = answer;
    return (
        <div className="form__answer">
            <p className="answer__name">Your name {name}</p>
            <p className="answer__date">This date {date}</p>
            <p className="answer__checkbox">
                The {checkbox} is somewhere near...
            </p>
            <p className="answer__pill">Take this {pill} pill</p>
            <p className="answer__fruits">The {fruits}</p>
            <img className="answer__file" src={file as string} alt="foto" />
        </div>
    );
}

export default FormAnswer;
