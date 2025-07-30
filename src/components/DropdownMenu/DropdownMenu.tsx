import './style.scss';

export const DropdownMenu = () => {
    const dropdownItems = [
        { id: 1, title: 'О клинике', link: '#' },
        { id: 2, title: 'Документы', link: '#' },
        { id: 3, title: 'Вакансии', link: '#' },
        { id: 4, title: 'Вопросы врачам', link: '#' },
        { id: 5, title: 'Новости', link: '#' },
        { id: 6, title: 'Справочник болезней', link: '#', hasArrow: true },
        { id: 7, title: 'Сотрудничество', link: '#' }
    ];

    return (
        <div className="dropdown-menu">
            <ul className="dropdown-menu__list">
                {dropdownItems.map((item) => (
                    <li key={item.id} className="dropdown-menu__item">
                        <a href={item.link} className="dropdown-menu__link">
                            {item.title}
                            {item.hasArrow && (
                                <span className="dropdown-menu__arrow">
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5" r="4" stroke="#333" strokeWidth="1" />
                                        <path d="M3 5h4M5 3l2 2-2 2" stroke="#333" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};