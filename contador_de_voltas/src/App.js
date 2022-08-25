import React, {useState, useEffect} from "react";

const ShowLaps = (props) => {
  return (
    <p>
      {props.laps}
      <br/>
      Laps
    </p>
  );
};
const ShowTime = (props) => {
  const time = props.time
  const minutes = Math.round(time / 60)
  const seconds = time % 60
  const minutesStr = minutes < 10 ? '0' + minutes : minutes
  const secondsStr = seconds < 10 ? '0' + seconds : seconds
  return (
    <p>
      {`${minutes}:${seconds}`}
      <br/>
      Average time per lap
    </p>
  );
};
const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>;

function App() {
  const [numLap, setNumLap] = useState(0);
  const [Running, setRunning] =useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer =null
    if (Running) {
      timer = setInterval(() => {
        setTime(old => old+ 1)
      }, 1000);
    };
    return() => {
      if (timer) {
        clearInterval(timer)
      };
    };
  }, [Running]);

  const toggleRunning = () => {
    setRunning(!Running)
  };
  const increment = () => {
    setNumLap(numLap + 1)
  };
  const decrement = () => {
    setNumLap(numLap - 1)
  };
  const reset = () => {
    setNumLap(0)
    setTime(0)
  };

  return (
    <div>
      <ShowLaps laps = {numLap}/>
      <Button text = "+" onClick = {increment}/>
      <Button text = "-" onClick = {decrement}/>
      {
        numLap > 0 &&
        <ShowTime time = {Math.round(time/numLap)}/>
      }
      <Button onClick = {toggleRunning} text = "Start"/>
      <Button onClick = {reset} text = "Restart"/>
    </div>
  );
};

export default App;