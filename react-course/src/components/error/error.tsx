import { ModalWindow } from '../../inerfaces/modal';
import './error.scss';

function ErrorMessage(props: Pick<ModalWindow, 'children'>): JSX.Element {
    return <div className="error__container">{props.children}</div>;
}

export default ErrorMessage;
