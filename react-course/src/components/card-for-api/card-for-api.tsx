/* eslint-disable jsx-a11y/click-events-have-key-events */
import useModal from '../../hooks/modalHook';
import { CharForCards } from '../../inerfaces/apiData';
import Modal from '../modal/modal';

function ApiCard({
    name,
    image,
    created,
    gender,
    location,
    id,
    status,
}: CharForCards) {
    const { isOpen, toggle } = useModal();
    return (
        <li onClick={toggle} role="button">
            <p>{name}</p>
            <img src={image} alt={name} />
            {isOpen && (
                <Modal isOpen={isOpen} toggle={toggle}>
                    <div
                        className="modal-box"
                        onClickCapture={(e) => e.stopPropagation()}
                    >
                        <p>Character name: {name}</p>
                        <img src={image} alt={name} />
                        <p>Character status: {status}</p>
                        <p>Character created: {created}</p>
                        <p>Character gender: {gender}</p>
                        <p>Character DB id: {id}</p>
                        <p>Character location name: {location.name}</p>
                    </div>
                </Modal>
            )}
        </li>
    );
}

export default ApiCard;
