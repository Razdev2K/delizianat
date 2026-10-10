import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = '2026-11-20T10:00:00',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 41,
    hours: 14,
    minutes: 22,
    seconds: 35,
  });

  useEffect(() => {
    const launchTime = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#5A7A27] mb-2">
        <Clock className="w-3.5 h-3.5 text-[#5A7A27]" />
        <span>Debut Batch #1 Curing Countdown</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        <div className="bg-[#FAF7F0] border border-[#E5DECD] px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-xs min-w-[56px] sm:min-w-[68px]">
          <span className="block text-xl sm:text-2xl font-serif font-bold text-[#1F2913]">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="block text-[10px] uppercase tracking-wider text-[#736F66] font-medium">Days</span>
        </div>

        <div className="bg-[#FAF7F0] border border-[#E5DECD] px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-xs min-w-[56px] sm:min-w-[68px]">
          <span className="block text-xl sm:text-2xl font-serif font-bold text-[#1F2913]">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="block text-[10px] uppercase tracking-wider text-[#736F66] font-medium">Hours</span>
        </div>

        <div className="bg-[#FAF7F0] border border-[#E5DECD] px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-xs min-w-[56px] sm:min-w-[68px]">
          <span className="block text-xl sm:text-2xl font-serif font-bold text-[#1F2913]">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="block text-[10px] uppercase tracking-wider text-[#736F66] font-medium">Mins</span>
        </div>

        <div className="bg-[#FAF7F0] border border-[#E5DECD] px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-xs min-w-[56px] sm:min-w-[68px]">
          <span className="block text-xl sm:text-2xl font-serif font-bold text-[#557A27]">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="block text-[10px] uppercase tracking-wider text-[#736F66] font-medium">Secs</span>
        </div>
      </div>
    </div>
  );
};
