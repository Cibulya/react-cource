import FormComponent from '../components/form/form';
import FormAnswersList from '../components/formAnswersList/FormAnswersList';
import { useAppSelector } from '../hooks/redux';

function FormPage() {
    const { formResults } = useAppSelector((state) => state.formReducer);
    return (
        <>
            <FormComponent />
            <FormAnswersList formResults={formResults} />
        </>
    );
}

export default FormPage;
