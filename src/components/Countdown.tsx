import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  // Target date: 30 days from launch initialization
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 30, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if target timestamp is stored in localStorage to keep consistent timer across reloads
    const savedTarget = localStorage.getItem('mbs_launch_target');
    let targetTime: number;

    if (savedTarget) {
      targetTime = parseInt(savedTarget, 10);
    } else {
      // 30 days from right now
      targetTime = Date.now() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem('mbs_launch_target', targetTime.toString());
    }

    const calculateTimeLeft = () => {
      const difference = targetTime - Date.now();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-10">
      <div className="text-center mb-4">
        <p className="text-xs uppercase tracking-widest text-mbs-cyan font-semibold">
          Countdown to Official Unveiling
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 text-center relative overflow-hidden group"
          >
            {/* Ambient top light */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mbs-cyan to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-mono drop-shadow-md">
              {String(unit.value).padStart(2, '0')}
            </div>
            
            <div className="text-xs uppercase tracking-wider text-mbs-slate-light font-semibold mt-2">
              {unit.label}
            </div>

            {/* Glowing bottom badge */}
            <div className="absolute bottom-1 right-2 text-[10px] text-mbs-cyan/20 group-hover:text-mbs-cyan/50 font-mono transition-colors">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

