import classes from "../style/modal.module.scss";

const Modal = ({ children, modalContainerStyle, modalViewStyle, isOpen }) => (
    <div>
        <div className={`${classes.modelContainer} ${modalContainerStyle}`}>
            <div className={`${classes.model} ${modalViewStyle}`}>
                {children}
            </div>
        </div>
    </div>
);

export default Modal;
