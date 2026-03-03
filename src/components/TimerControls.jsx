function TimerControls({onStart, onPause, onReset}) {
    return (
        <div>
            <button id="onStart" type="button" onClick={onStart}>Start</button>
            <button id="onPause" type="button" onClick={onPause}>Pause</button>
            <button id="onReset" type="button" onClick={onReset}>Reset</button>
        </div>
    )
}

export default TimerControls;