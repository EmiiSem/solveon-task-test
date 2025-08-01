import "./style.scss";
import logo from "../../assest/images/logo.png";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <div className="header__logo-text">
                        <span className="header__logo-main">Центр</span>
                        <span className="header__logo-secondary">лазерной медицины</span>
                    </div>
                    <img
                        src={logo}
                        alt="Центр лазерной медицины"
                        className="header__logo-image"
                    />
                </div>

                <button className={`header__burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'flex' }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
            <div className="container">

                <Navigation />

                <div className="header__actions">
                    <Button
                        text="записаться"
                        choose="primary"
                    />
                    <Button
                        choose="icon"
                        icon="user"
                    />
                </div>
            </div>

            {isMenuOpen && (
                <div className="header__mobile-overlay" onClick={closeMenu}>
                    <div className="header__mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="header__mobile-header">
                            <h2>ЦЕНТР ЛАЗЕРНОЙ МЕДИЦИНЫ</h2>
                            <button className="header__mobile-close" onClick={closeMenu}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <nav className="header__mobile-nav">
                            <ul className="header__mobile-list">
                                <li className="header__mobile-item">
                                    <a href="#" className="header__mobile-link">ВРАЧИ</a>
                                </li>
                                <li className="header__mobile-item">
                                    <a href="#" className="header__mobile-link">УСЛУГИ</a>
                                </li>
                                <li className="header__mobile-item">
                                    <a href="#" className="header__mobile-link">МЕД ТУРИЗМ</a>
                                </li>
                                <li className="header__mobile-item">
                                    <a href="#" className="header__mobile-link">ОМС</a>
                                </li>
                                <li className="header__mobile-item">
                                    <a href="#" className="header__mobile-link">КОНТАКТЫ</a>
                                </li>
                                <li className="header__mobile-item header__mobile-item--dropdown">
                                    <span className="header__mobile-link">ЕЩЕ:</span>
                                    <ul className="header__mobile-sublist">
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">О КЛИНИКЕ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">ДОКУМЕНТЫ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">ВАКАНСИИ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">ВОПРОСЫ ВРАЧАМ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">НОВОСТИ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">СПРАВОЧНИК БОЛЕЗНЕЙ</a>
                                        </li>
                                        <li className="header__mobile-subitem">
                                            <a href="#" className="header__mobile-sublink">СОТРУДНИЧЕСТВО</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};