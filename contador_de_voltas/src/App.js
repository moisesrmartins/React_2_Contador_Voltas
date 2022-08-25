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
  return (
    <p>
      {props.time}
      <br/>
      Average time per lap
    </p>
  );
};
const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>;

function App() {
const [numLap, setNumLap] = useState(10)
  const [time, setTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log('call')
    }, 1000);
  }, []);

  const increment = () => {
  setNumLap(numLap + 1)
  };
  const decrement = () => {
  setNumLap(numLap - 1)
  };

  return (
    <div>
      <ShowLaps laps = {numLap}/>
      <Button text = "+" onClick = {increment}/>
      <Button text = "-" onClick = {decrement}/>
      <ShowTime time = {time}/>
      <Button text = "Start"/>
      <Button text = "Restart"/>
    </div>
  );
}

export default App;