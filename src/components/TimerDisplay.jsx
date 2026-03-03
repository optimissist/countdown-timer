function TimerDisplay({seconds}) {
    const totalMinutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const totalSeconds = String(seconds % 60).padStart(2, "0");

    return (
        <div>
            <h2>{totalMinutes}:{totalSeconds}</h2>
        </div>
    )
}

export default TimerDisplay;