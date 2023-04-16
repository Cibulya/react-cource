import { IFormArray } from '../../inerfaces/formtypes';
import FormAnswer from '../formcardanswer/formcardanswer';

function FormAnswersList(props: IFormArray) {
    return (
        <div className="form__answers">
            {props.formResults.map((answer) => (
                // eslint-disable-next-line react/jsx-key
                <FormAnswer
                    name={answer.name}
                    key={answer.id}
                    date={answer.date}
                    checkbox={answer.checkbox}
                    pill={answer.pill}
                    fruits={answer.fruits}
                    file={answer.file}
                    id={answer.id}
                />
            ))}
        </div>
    );
}

export default FormAnswersList;
