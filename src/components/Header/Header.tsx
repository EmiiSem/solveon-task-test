import "./style.scss";
import logo from "../../assest/images/logo.png";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";

export const Header = () => {
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
        </header>
    );
};