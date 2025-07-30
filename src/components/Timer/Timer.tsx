import { useEffect, useState, type FC } from "react";
import "./style.scss";

interface TimerProps {
    endDate: Date;
}

export const Timer: FC<TimerProps> = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const diff = endDate.getTime() - now.getTime();

            if(diff <= 0) {
                // Прекращение акции
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer();

        const intervalId = setInterval(updateTimer, 1000); // Обновление каждую секунду

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании
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