import { useState } from 'react';
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("Welcome to Counter App!")
  return (
    <>
    <div className='app-main-div'>
      <h1 className='count-h1'>{count}</h1>
      <div className="display-div">
        <Button type="primary" className='inc-Button' 
        onClick={()=>{
          setCount(count+1)
          setErrorMsg("Increment Successful!")
        }}>Increment</Button>
        
        <Button type="primary" className='dec-Button' 
        onClick={()=>{
          if(count>0){
            setCount(count-1)
            setErrorMsg("Decrement Successful!")
          }
          else{
            setErrorMsg("Cannot decrement when zero!")
          }
        }}>Decrement</Button>
      </div>

      <p className='error-p'>{errorMsg}</p>
    </div>
    </>
  );
}

export default App;
