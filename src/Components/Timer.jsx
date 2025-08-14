import { useState, useEffect } from "react";
import Icons from "./Icons";
import BackIcon from "./Backicon";

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [currentDuration, setCurrentDuration] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("pomodoroSessions");
    if (stored) setSessions(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("pomodoroSessions", JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = (minutes) => {
    setTime(minutes * 60);
    setCurrentDuration(minutes);
    setIsActive(true);

    const newSession = {
      startTime: new Date().toLocaleString(),
      duration: `${minutes} min`
    };
    setSessions((prev) => [...prev, newSession]);
  };

  const pauseTimer = () => setIsActive(false);
  const resumeTimer = () => setIsActive(true);
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-8 bg-[#051F45] text-[#F2C4CD]"
     style={{ backgroundImage: "url('/bgforbp.png')" }} >
      <BackIcon />
      <Icons />

      <h1 className="text-4xl font-bold mb-6 text-[#051F45] drop-shadow-md">Pomodoro Timer</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => startTimer(25)}
          className="px-5 py-2 rounded-lg bg-[#F2C4CD] text-[#051F45] font-bold shadow hover:bg-[#e8a6b8] transition"
        >
          25 min
        </button>
        <button
          onClick={() => startTimer(15)}
          className="px-5 py-2 rounded-lg bg-[#F2C4CD] text-[#051F45] font-bold shadow hover:bg-[#e8a6b8] transition"
        >
          15 min
        </button>
        <button
          onClick={() => startTimer(10)}
          className="px-5 py-2 rounded-lg bg-[#F2C4CD] text-[#051F45] font-bold shadow hover:bg-[#e8a6b8] transition"
        >
          10 min
        </button>
      </div>

      <div className="text-6xl font-mono mb-6 bg-[#F2C4CD] rounded-xl px-8 py-4 shadow-lg border border-[#F2C4CD] text-[#051F45]">{formatTime(time)}</div>

      <div className="flex gap-4 mb-6">
        {!isActive && time > 0 && (
          <button
            onClick={resumeTimer}
            className="px-4 py-2 rounded-lg bg-[#F2C4CD] text-[#051F45] shadow hover:bg-[#e8a6b8] transition font-semibold"
          >
            Resume
          </button>
        )}
        {isActive && (
          <button
            onClick={pauseTimer}
            className="px-4 py-2 rounded-lg bg-[#051F45] text-[#F2C4CD] shadow border border-[#F2C4CD] hover:text-[#051F45] hover:bg-[#F2C4CD] transition font-semibold"
          >
            Pause
          </button>
        )}
        <button
          onClick={resetTimer}
          className="px-4 py-2 rounded-lg bg-[#051F45] text-white shadow hover:bg-[#F2C4CD] transition font-semibold"
        >
          Reset
        </button>
      </div>

      {/* Session History */}
      <div className="w-full max-w-md bg-[#F2C4CD] rounded-xl shadow-lg p-4 border border-[#F2C4CD] text-[#051F45]">
        <h2 className="text-xl font-semibold mb-2">Session History</h2>
        <ul className="space-y-2">
          {sessions.map((s, i) => (
            <li
              key={i}
              className="bg-[#F2C4CD] rounded px-4 py-2 shadow flex justify-between items-center border border-[#e8a6b8]"
            >
              <span className="font-medium">{s.startTime}</span>
              <span>{s.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timer;
