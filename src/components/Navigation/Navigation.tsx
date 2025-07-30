import { useState } from 'react';
import './style.scss';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Navigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menuItems = [
        { id: 1, title: 'ВРАЧИ', link: '#' },
        { id: 2, title: 'УСЛУГИ', link: '#' },
        { id: 3, title: 'МЕД ТУРИЗМ', link: '#' },
        { id: 4, title: 'ОМС', link: '#' },
        { id: 5, title: 'КОНТАКТЫ', link: '#' },
        { id: 6, title: 'ЕЩЕ', link: '#', hasDropdown: true }
    ];

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        className="navigation__item"
                        onMouseEnter={item.hasDropdown ? () => setIsDropdownOpen(true) : undefined}
                        onMouseLeave={item.hasDropdown ? () => setIsDropdownOpen(false) : undefined}
                    >
                        <a href={item.link} className="navigation__link">
                            {item.title}
                        </a>
                        {item.hasDropdown && isDropdownOpen && <DropdownMenu />}
                    </li>
                ))}
            </ul>
        </nav>
    );
};