import React from "react";
import "./NavBar.css";
const NavBar = (props) => {
  let { setRunAlgo, disableAlgoRunButton, resetGrid, setDisableAlgoRunButton, setAlgo } =
    props;

    const handleAlgoChange = (e)=>{
        setAlgo(e.target.value);
    }
  return (
    <header>
      <nav className="navbar">
        <select name="algo" className="algo-select" onChange={handleAlgoChange}>
          <option value="aStar">aStar</option>
          <option value="dijkshtra">dijkshtra</option>
          <option value="bfs">bfs</option>
        </select>
        <button
          disabled={disableAlgoRunButton}
          onClick={() => {
            setRunAlgo(true);
            setDisableAlgoRunButton(true);
            // visualise();
          }}
          className="algo-btn btn"
        >
          Visualise Algo
        </button>
        <button className="new-grid-btn btn" onClick={() => resetGrid()}>
          New Grid
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
