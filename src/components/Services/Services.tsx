import { useState, type FC } from "react";
import "./style.scss";

interface Service {
    id: number;
    title: string;
    imageSrc: string;
    description: string;
}

interface ServicesProps {
    services: Service[];
}

export const Services: FC<ServicesProps> = ({ services }) => {
    const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

    const toggleService = (id: number) => {
        setActiveServiceId(activeServiceId === id ? null : id);
    };

    return (
        <section className="services">
            <div className="container">
                <div className="services__header">
                    <h2 className="services__title">● Популярные услуги</h2>
                    <button className="services__more-button">
                        больше услуг
                        <svg width="30" height="30" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="90" r="100" fill="#FFF" strokeWidth="3" />
                            <path d="M40 90L160 90 M160 90L100 30 M160 90L100 150" stroke="#2B65F6" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>

                <div className="services__list">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`services__item ${activeServiceId === service.id ? 'active' : ''}`}
                            onClick={() => toggleService(service.id)}
                        >
                            {activeServiceId === service.id ? (
                                <>
                                    <div className="services__active-header">
                                        <div className="services__active-title-container">
                                            <h3 className="services__item-title">{service.title}</h3>
                                            <div className="services__image-with-arrow">
                                                <img src={service.imageSrc} alt={service.title} className="services__image" />
                                                <div className="services__arrow-circle">
                                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2B65F6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <p>подробнее</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="services__description">{service.description}</p>
                                </>
                            ) : (
                                <>
                                    <div className="services__left">
                                        <span className="services__number">{service.id}</span>
                                    </div>
                                    <div className="services__center">
                                        <div className="services__center-position">
                                            <img src={service.imageSrc} alt={service.title} className="services__image" />
                                            <h3 className="services__item-title">{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="services__right">
                                        <button className="services__toggle">
                                            <span className="services__dots">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}