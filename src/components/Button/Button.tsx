import React from 'react';
import './style.scss';

interface ButtonProps {
    text?: string;
    choose: 'primary' | 'secondary' | 'icon';
    icon?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    choose,
    icon,
    onClick
}) => {
    const getIcon = () => {
        if (icon === 'user') {
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            );
        }
        return null;
    };

    return (
        <button
            className={`button button--${choose}`}
            onClick={onClick}
        >
            {text && <span className="button__text">{text}</span>}
            {icon && <span className="button__icon">{getIcon()}</span>}
        </button>
    );
};