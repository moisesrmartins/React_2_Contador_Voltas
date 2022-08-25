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

function App() {
  return (
    <div className="App">
      <ShowLaps laps="10"/>
      <button>+</button>
      <button>-</button>
      <p>
        01:30
        <br/>
        Average time per lap
      </p>
      <button>Start</button>
      <button>Restart</button>
    </div>
  );
}

export default App;