import { useState } from 'react';
import CountNumber from './CounterNumber';
import Button from './Button';

    function Counter() {
    const [count, setCount] = useState(0);
    
    function increment() {
    setCount(count+1);
    }
    function decrement() {
    setCount(count-1);
    }
    function reset() {
    setCount(0);
    }
    function ten_increment() {
    setCount(count+10);
    }
    function ten_decrement() {
    setCount(count-10);
    }
    return (
    <div>
    <CountNumber count={count} />
    <Button label="+1" onClick={increment} />
    <Button label="-1" onClick={decrement} />
    <Button label="Reset" onClick={reset} />
    <Button label="+10" onClick={ten_increment} />
    <Button label="-10" onClick={ten_decrement} />
    </div>
    );
}
 export default Counter;