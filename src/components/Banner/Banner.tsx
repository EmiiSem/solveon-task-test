import "./style.scss";
import banner from "../../assest/images/banner.jpg";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <div className="banner__left">
                        <p className="banner__subtitle">
                            акция до 30 июня ● быстро и безболезненно ●
                        </p>
                    </div>

                    <div className="banner__image">
                        <img src={banner} alt="Медицинское оборудование" />
                    </div>

                    <div className="banner__right">
                        <h2 className="banner__title">Вернем зрение без боли и страха</h2>
                        <p className="banner__description">
                            Фемто-Ласик всего за 42 000 ₽ в июне
                        </p>
                        <button className="banner__button banner__button--primary">
                            подробнее
                        </button>
                        <div className="banner__links">
                            <a href="#" className="banner__link">
                                Вопросы
                            </a>
                            <a href="#" className="banner__link">
                                Больше акций
                            </a>
                        </div>
                    </div>
                </div>

                <div className="banner__indicators">
                    <span className="banner__indicator active"></span>
                    <span className="banner__indicator"></span>
                    <span className="banner__indicator"></span>
                </div>
            </div>
        </section>
    );
}