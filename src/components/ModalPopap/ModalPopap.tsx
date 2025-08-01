import { type FC, useRef, useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./style.scss";
import popap_img from "../../assest/images/popap.png";


const formSchema = z.object({
    phone: z.string()
        .min(10, "Телефон должен содержать минимум 10 символов")
        .max(15, "Телефон должен содержать максимум 15 символов")
        .regex(/^[0-9+() -]+$/, "Некорректный формат телефона"),
    name: z.string()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(50, "Имя должно содержать максимум 50 символов"),
    agreement: z.boolean()
        .refine((val) => val, {
            message: "Необходимо дать согласие",
        }),
});

type FormData = z.infer<typeof formSchema>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalPopap: FC<ModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            agreement: false,
        },
    });

    const onSubmit = async (data: FormData) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Форма отправлена:", data);
        setIsSubmitted(true);
        reset();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            setIsSubmitted(false);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

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
                    {isSubmitted ? (
                        <div className="modal__success">
                            <h3 className="modal__success-title">Спасибо!</h3>
                            <p className="modal__success-message">
                                Ваша заявка отправлена, с вами скоро свяжутся.
                            </p>
                            <button
                                className="modal__submit-button"
                                onClick={onClose}
                                style={{ marginTop: '20px' }}
                            >
                                Закрыть
                            </button>
                        </div>
                    ) : (
                        <div className="modal__left">
                            <h2 className="modal__title">Готовы доверить своё здоровье профессионалу?</h2>
                            <p className="modal__subtitle">
                                Не откладывайте заботу о зрении — записывайтесь на приём к врачу уже сегодня.
                            </p>
                            <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal__input-group">
                                    <input
                                        type="text"
                                        placeholder="Телефон"
                                        className={`modal__input ${errors.phone ? "modal__input--error" : ""}`}
                                        {...register("phone")}
                                    />
                                    {errors.phone && (
                                        <span className="modal__error">{errors.phone.message}</span>
                                    )}
                                </div>
                                <div className="modal__input-group">
                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        className={`modal__input ${errors.name ? "modal__input--error" : ""}`}
                                        {...register("name")}
                                    />
                                    {errors.name && (
                                        <span className="modal__error">{errors.name.message}</span>
                                    )}
                                </div>
                                <div className="modal__checkbox-group">
                                    <label className="modal__checkbox">
                                        <input
                                            type="checkbox"
                                            className="modal__checkbox-input"
                                            {...register("agreement")}
                                        />
                                        <span>Я даю согласие на обработку персональных данных</span>
                                    </label>
                                    {errors.agreement && (
                                        <span className="modal__error">{errors.agreement.message}</span>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="modal__submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Отправка..." : "записаться"}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};