import './App.css';
import React, { useState } from 'react';
var timer = React.createRef(0);

//Start - Starts the counter

//Stop - stop the count and return to Start screen
//reume/pause  - resume or pause the count

//reset - reset the count back to initial.

function App() {
  //let [start, setStart] = useState(false);
  let [level,setLevel] = useState(1);
  let [res_pause,setRes_pause] = useState(true)
  let [count,setCount] = useState(60);

  var handleStart = () => {
    
    setLevel(2);
    downcount(res_pause);
  }

var downtimer = () => {
  setCount((prev) => {
    if(prev-1 === 0){
      setLevel(3)
      setRes_pause(true)
      downcount(false)
    }
    return prev-1
  })

}

  var downcount = function(state) {
    if(state){
      timer.current = setInterval(() =>  downtimer(), 1000);  
      //console.log(timer.current,'res')    
    }else{
      //console.log(timer.current,'pause')
      clearInterval(timer.current)
    }
  
  }

  var handleResPause = () => {
      downcount(!res_pause) 
      setRes_pause(!res_pause) 
  }
   
  var handleStop = () => {
    setLevel(1);
    setRes_pause(true)
    downcount(false)
    //setCount(60)
  }
  var reset = () => {
    setLevel(1)
    setRes_pause(true);
    setCount(60)
  }


  return (
    <div className="App">
      {/* <p>Level : {level}</p> */}
      <div className="App-header">
        {level === 1 ? 
        <button onClick={() => handleStart()} id="start">
          Start
        </button> : 
        level === 2 ? 
        <div className='level2'>
            <div className='count'>Count : {count}</div>
            <button onClick={() => handleResPause()} id="res_pause" className={`${res_pause ? 'Pause':'Resume'}`}>{res_pause ? 'Pause':'Resume' }</button>
            <button onClick={() => handleStop()} id="stop">Stop</button>
        </div> : <>
        <div className='count'>Count : {count}</div>
        <button onClick={() => reset()} id="reset">Reset</button>
        </>
        }
      </div>
    </div>
  );
}

export default App;
