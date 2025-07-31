import "./style.scss";
import banner from "../../assest/images/banner.jpg";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__header">
                    <p className="banner__subtitle">
                        <span>акция до 30 июня ●</span>
                        <br />
                        <span>быстро и безболезненно ●</span>
                    </p>
                    <p className="banner__promo-text">
                        Вернем зрение без боли и страха<br />
                        <span>Фемто-Ласик всего за 42 000 ₽ в июне</span>
                    </p>
                </div>

                <div className="banner__image-container">
                    <img src={banner} alt="Медицинское оборудование" className="banner__image" loading="lazy" />
                    <div className="banner__arrow">
                        <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 90L160 90 M160 90L100 30 M160 90L100 150" stroke="#4a90e2" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="banner__arrow-text">подробнее</span>
                    </div>
                    <div className="banner__indicators">
                        <span className="banner__indicator"></span>
                        <span className="banner__indicator"></span>
                        <span className="banner__indicator active"></span>
                        <span className="banner__indicator"></span>
                        <span className="banner__indicator"></span>
                    </div>
                </div>

                <div className="banner__links">
                    <a href="#" className="banner__link">
                        Вопросы
                    </a>
                    <a href="#" className="banner__link">
                        Больше акций
                    </a>
                </div>
            </div>
        </section>
    );
}