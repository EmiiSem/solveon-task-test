import { useEffect, useState, type FC } from "react";
import "./style.scss";

interface TimerProps {
    endDate?: Date;
}

export const Timer: FC<TimerProps> = ({ endDate }) => {
    const STORAGE_KEY = "laserDiscountEndTime";

    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const getEffectiveEndDate = (): Date => {
            const stored = localStorage.getItem(STORAGE_KEY);

            // Если есть сохраненная дата и она еще не истекла
            if (stored) {
                const savedDate = new Date(parseInt(stored, 10));
                if (savedDate > new Date()) {
                    return savedDate;
                }
            }

            // Если передана endDate и нет сохраненной даты
            if (endDate) {
                localStorage.setItem(STORAGE_KEY, endDate.getTime().toString());
                return endDate;
            }

            // Если нет ни сохраненной даты, ни endDate, создаем новую
            const newEndDate = new Date();
            newEndDate.setDate(newEndDate.getDate() + 4);
            localStorage.setItem(STORAGE_KEY, newEndDate.getTime().toString());
            return newEndDate;
        };

        const effectiveEndDate = getEffectiveEndDate();

        const updateTimer = () => {
            const now = new Date();
            const diff = effectiveEndDate.getTime() - now.getTime();

            if (diff <= 0) {
                // Прекращение акции
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                localStorage.removeItem(STORAGE_KEY);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer();

        const intervalId = setInterval(updateTimer, 1000);

        return () => clearInterval(intervalId);
    }, [endDate]);

    return (
        <div className="timer-container">
            <p className="timer-title">Скидка на Лазерную коррекцию до 60 %</p>
            <div className="timer-countdown">
                <span className="timer-value">{timeLeft.days}</span> дня
                <span className="timer-value">{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</span>
            </div>
            <span className="arrow-button">↗</span>
        </div>
    )
}