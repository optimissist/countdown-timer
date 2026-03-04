import {useState, useEffect} from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

function TimerApp() {
    const [seconds, setSeconds] = useState(60);
    const [isRunning, setIsRunning] = useState(false);


    function start() {
        setIsRunning(true);
    }

    function pause() {
        setIsRunning(false);
    }

    function reset() {
        setSeconds(60);
        setIsRunning(false);
    }

    useEffect(() => {
    if (isRunning && seconds > 0) {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }
}, [isRunning, seconds]);

    return (
        <div>
            <h1>Countdown Timer</h1>
        <TimerDisplay seconds={seconds}/>
        <TimerControls onStart={start} onPause={pause} onReset={reset} />
        {seconds === 0 && "Time's up! 🎉"}
        </div>
    )
}

export default TimerApp;