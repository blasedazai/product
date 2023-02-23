import { AiFillCloseCircle} from "react-icons/ai";
const Modal = ({ closeModal, children }) => {
    return (
        <div className={"modal-container"}>
            <div className="overlay" onClick={closeModal}>

            </div>
            <div className="modal-content">

                <div className="modal-header">
                    <a href="#" onClick={closeModal}>
                        <AiFillCloseCircle className="modal-close"/>
                    </a>
                </div>

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;