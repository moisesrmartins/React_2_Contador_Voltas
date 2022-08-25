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

function App() {
  return (
    <div className="App">
      <ShowLaps laps = "10"/>
      <button>+</button>
      <button>-</button>
      <ShowTime time = "01:30"/>
      <button>Start</button>
      <button>Restart</button>
    </div>
  );
}

export default App;