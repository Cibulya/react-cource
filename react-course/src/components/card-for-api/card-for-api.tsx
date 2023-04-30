/* eslint-disable jsx-a11y/click-events-have-key-events */
import useModal from '../../hooks/modalHook';
import { CharForCards } from '../../inerfaces/apiData';
import Modal from '../modal/modal';

function ApiCard({
    name,
    image,
    id,
}: Pick<CharForCards, 'name' | 'image' | 'id'>) {
    const { isOpen, toggle } = useModal();
    return (
        <li className="cards__card" onClick={toggle} role="button">
            <p>{name}</p>
            <img src={image} alt={name} />
            {isOpen && <Modal isOpen={isOpen} toggle={toggle} id={id} />}
        </li>
    );
}

export default ApiCard;
