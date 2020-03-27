import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Display = ({value}) => <div>{value}</div>

const Button = ({valfunk, text}) => {
return(
<button onClick={valfunk}>{text}</button>
)
}

function App() {
  const [value, setValue] = useState(10)

  const hello = (val) => setValue(val)
  
  return (
    <div>
      <Display value = {value} />
      <Button valfunk={() =>hello(value + 1)} text='plus' />
      <Button valfunk={() =>hello(0)} text='settozero' />
      <Button valfunk={() =>hello(99)} text='hundred' />
    </div>
  )
}

export default App;
