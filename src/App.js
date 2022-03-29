import './App.css';
import React,{ useEffect, useReducer } from 'react';

const reducer = (state,action)=>{
  if(action.type==="INCR"){
      state +=1;
  }else if(state>0 && action.type==="DECR"){
      state -=1; 
  }
  return state;
}

function App() {
  let intialData = 0
  const [state,dispatch] = useReducer(reducer,intialData);

  useEffect(()=>{
    document.title = `Chats(${state})`;
  })
  return (
      <div className="center-div">
         <p>{state}</p>
         <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           INCR
         </div>
         <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           DECR
         </div>
      </div>
  );
}

export default App;
