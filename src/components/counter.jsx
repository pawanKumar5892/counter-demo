import React, {useState} from 'react';
import './index.css';

function Counter() {
    const [counterValue, setCounter] = useState(1);    
    const [initialValue, setInitValue] = useState(1);
    const [maxValue, setMaxValue] = useState(1000);

    const reset = ()=>{
        let initialValue = parseInt(document.querySelector('#init-value').value);        
        setInitValue(initialValue);
        setMaxValue(document.querySelector('#max-value').value);
        setCounter(initialValue);
    }

  return (
    <section >
        <div className='controls'>
            <strong>Controls</strong>
            <div>Initial value: <input defaultValue={initialValue} id='init-value' type='number'/></div>
            <div>Max value: <input defaultValue={maxValue} id='max-value' type='number'/></div>
            <button onClick={reset}>set/Restart</button>
        </div>
        <div className="counter-container">
            <button className='btn-minus' onClick={()=>setCounter(counterValue-1)}>
                -
            </button>
            <input                 
                min={initialValue} 
                onChange={(e)=> e.target.value <= maxValue && setCounter(parseInt(e.target.value))} 
                value={counterValue} 
                max={maxValue} 
                type='number'
            />
            <button className='btn-plus' onClick={()=>counterValue < maxValue && setCounter(counterValue+1)}>
                +
            </button>
        </div>              
    </section>
  );
}

export default Counter;
