import React, {useState, useEffect} from "react";
import "./style.css";
import ShowLaps from "./ShowLaps";
import ShowTime from "./ShowTime";
import Button from "./Button";

function App() {
  const [numLap, setNumLap] = useState(0);
  const [Running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null
    if (Running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
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