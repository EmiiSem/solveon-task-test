import { type FC, useRef, useEffect } from "react";
import "./style.scss";
import popap_img from "../../assest/images/popap.png";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalPopap: FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            };
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        };

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose])

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
                <div className="modal__background">
                    <img src={popap_img} alt="Медицинское оборудование" className="modal__bg-image" />
                </div>
                <button className="modal__close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="modal__content">
                    <div className="modal__left">
                        <h2 className="modal__title">Готовы доверить своё здоровье профессионалу?</h2>
                        <p className="modal__subtitle">
                            Не откладывайте заботу о зрении — записывайтесь на приём к врачу уже сегодня.
                        </p>
                        <form className="modal__form">
                            <input type="text" placeholder="Телефон" className="modal__input" />
                            <input type="text" placeholder="Имя" className="modal__input" />
                            <label className="modal__checkbox">
                                <input type="checkbox" className="modal__checkbox-input" />
                                <span>Я даю согласие на обработку персональных данных</span>
                            </label>
                            <button type="submit" className="modal__submit-button">
                                записаться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}