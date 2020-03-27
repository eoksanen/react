import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Display = ({disp}) => {
  return (
  <div>{disp}</div>
  )
}

const Calc = ({good, neutral, bad, sw}) => {
  console.log(sw)
  switch(sw){
  case 0:
    return (
      good + neutral + bad
    )
  break;
  case 1:
    return (
      (good + neutral + bad)/3
    )
  break;
  case 2:
    if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
      <div>{(good/(good + neutral + bad))*100}%</div>
    )}
    else{
      return( <div>0%</div>
    )}
  break;

  default:
    }
  }

  const CalcDisplay = ({good, neutral, bad, sw}) => {
    console.log(sw)

   if(sw === 0) {
  return (
    good + neutral + bad
  )}
  
  else if(sw === 'average'){
    if(good !== 0 || neutral !== 0 || bad !== 0){
  return(
    <div>{(good*1 + neutral*0 + bad*-1)/(good + neutral + bad)}</div>
  )}
    else{
      return( 
        <div>0%</div>
      )
    }
  }
    else{
  return(
    <div>{(good/(good + neutral + bad))*100}</div>
  )}}


const Stats = ({good, neutral, bad}) => {
  return (
    <table>
      <tbody>
      <tr>
        <td>good</td>
        <td><Display disp={good} /></td>
      </tr>   
      <tr>
        <td>neutral</td>
        <td><Display disp={neutral} /></td>
      </tr>     
      <tr>
        <td>bad</td>
        <td><Display disp={bad} /></td>
      </tr>  
      <tr>
        <td>all</td>
        <td><Display disp={good + neutral + bad} /></td>
      </tr>
      <tr>
        <td>average</td>
        <td><CalcDisplay good={good} neutral={neutral} bad={bad} sw={'average'} /></td>
      </tr>
      <tr>
        <td>positive</td>
        <td><Calc good={good} neutral={neutral} bad={bad} sw={2} /></td>
      </tr>
      </tbody>
    </table>
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function App() {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <Header text='Give feedback' />
      <Button handler={()=>setGood(good + 1)} text='good' />
      <Button handler={()=>setNeutral(neutral + 1)} text='neutral' />
      <Button handler={()=>setBad(bad + 1)} text='bad' />

      <Header text='statistics' />

      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
