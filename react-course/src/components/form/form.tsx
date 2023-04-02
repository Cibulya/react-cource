/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { IFormElementsValues, TFormAnswers } from '../../inerfaces/formtypes';
import { options } from '../../inerfaces/inputTypes';
import FormAnswer from '../formcardanswer/formcardanswer';
import './form.scss';

function FormComponent() {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        // без этой штуки не работает очистка формулы!
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { isSubmitSuccessful, errors },
    } = useForm<IFormElementsValues>({
        defaultValues: {
            fruits: '',
        },
    });

    const formAnswers: TFormAnswers = [];
    const [answers, setAnswers] = useState(formAnswers);

    const onSubmit: SubmitHandler<IFormElementsValues> = (data) => {
        const fileImage = URL.createObjectURL(data.file[0] as unknown as Blob);
        const newDataWithFile = Object.assign(data);
        newDataWithFile.id = Date.now();
        if (data.checkbox === true) {
            newDataWithFile.checkbox = 'truth';
        }
        newDataWithFile.file = fileImage;
        setAnswers([...answers, newDataWithFile]);
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                name: '',
                file: '',
                fruits: '',
                date: '',
                pill: '',
                checkbox: false,
            });
        }
    }, [formState, reset]);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <p className="form__title">Form</p>
                <label htmlFor="name">
                    <span>Name:</span>
                    <input
                        {...register('name', {
                            required: 'This field is required)',
                            minLength: {
                                value: 5,
                                message: 'Min length 5 symbols',
                            },
                        })}
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                    />
                    <p className="form__error">{errors.name?.message}</p>
                </label>
                <label htmlFor="date">
                    Pick some date:
                    <input
                        {...register('date', {
                            required:
                                'This field is required,please choose correct date)',
                        })}
                        type="date"
                        name="date"
                    />
                    <p className="form__error">{errors.date?.message}</p>
                </label>
                <label className="form__checkbox" htmlFor="checkbox">
                    Pablo
                    <input
                        {...register('checkbox', {
                            required:
                                'This field is requred, please click on checkbox)',
                        })}
                        type="checkbox"
                        name="checkbox"
                    />
                    <p className="form__error">{errors.checkbox?.message}</p>
                </label>
                <div className="radio">
                    <label className="form__checkbox" htmlFor="pill">
                        Red
                        <input
                            {...register('pill')}
                            type="radio"
                            value="Red"
                            name="pill"
                        />
                        <p className="form__error">{errors.pill?.message}</p>
                    </label>
                    <label className="form__checkbox" htmlFor="pill">
                        Blue
                        <input
                            {...register('pill')}
                            type="radio"
                            value="Blue"
                            name="pill"
                        />
                        <p className="form__error">{errors.pill?.message}</p>
                    </label>
                </div>
                <select
                    {...register('fruits', {
                        required:
                            'This field is requred,please choose one of options)',
                    })}
                    className="form__select"
                    name="fruits"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <p className="form__error">{errors.fruits?.message}</p>
                <label htmlFor="file">
                    <input
                        {...register('file', {
                            required:
                                'This field is requred, please upload your file)',
                        })}
                        className="form__file"
                        type="file"
                        name="file"
                        accept="image/*"
                    />
                    <p className="form__error">{errors.file?.message}</p>
                </label>
                <input className="form__submit" type="submit" />
            </form>
            <div className="form__answers">
                {answers.map((answer) => (
                    <FormAnswer
                        key={answer.id}
                        id={answer.id}
                        name={answer.name}
                        date={answer.date}
                        checkbox={answer.checkbox}
                        pill={answer.pill}
                        file={answer.file}
                        fruits={answer.fruits}
                    />
                ))}
            </div>
        </div>
    );
}

export default FormComponent;
