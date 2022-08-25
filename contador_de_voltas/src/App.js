import React from "react";

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
  let numLap = 10
  const increment = () => {
    numLap++
    console.log('increment')
  };
  const decrement = () => {
    numLap--
    console.log('decrement')
  };

  return (
    <div>
      <ShowLaps laps = {numLap}/>
      <Button text = "+" onClick = {increment}/>
      <Button text = "-" onClick = {decrement}/>
      <ShowTime time = "01:30"/>
      <Button text = "Start"/>
      <Button text = "Restart"/>
    </div>
  );
}

export default App;