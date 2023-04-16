import cardsAPI from '../../api/card-service';
import { ModalWindow } from '../../inerfaces/modal';
import './modal.css';

function Modal(props: ModalWindow) {
    const { data: cardData } = cardsAPI.useSingleCardFetchQuery(`${props.id}`);
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button
                    type="button"
                    onClick={props.toggle}
                    className="modal-close"
                >
                    X
                </button>
                {props.children}
                {cardData && (
                    <div
                        className="modal-box"
                        onClickCapture={(e) => e.stopPropagation()}
                    >
                        <p>Character name: {cardData.name}</p>
                        <img src={cardData.image} alt={cardData.image} />
                        <p>Character status: {cardData.status}</p>
                        <p>Character created: {cardData.created}</p>
                        <p>Character gender: {cardData.gender}</p>
                        <p>Character DB id: {cardData.id}</p>
                        <p>Character location name: {cardData.location.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
