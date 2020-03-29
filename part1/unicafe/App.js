import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Header = ({text}) => <h1>{text}</h1>

const Display = ({disp}) => <div>{disp}</div>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>   
  )
}

const ShowAverage = ({good, neutral, bad}) => {
  if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
<div>{average(good, neutral, bad)}</div>
    )}
    else {
      return (<div>0%</div>)
    }
}

const ShowPositive = ({good, neutral, bad}) => {
  if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
   <div>{positive(good, neutral, bad)}%</div>   
    )}
    else{
      return (<div>0%</div>)
    }   
}


//** */
const Calc = ({good, neutral, bad, sw}) => {
  switch(sw){
  case 0:
    return (
      good + neutral + bad
    )
  break;
  case 1:
    return (
      <div>{average(good, neutral, bad)}</div>
    )
  break;
  case 2:
    if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
      <div>{positive(good, neutral, bad)}%</div>
    )}
    else{
      return( <div>0%</div>
    )}
  break;

  default:
    }
  }

  const CalcDisplay = ({good, neutral, bad, sw}) => {

   if(sw === 0) {
  return (
    good + neutral + bad
  )}
  
  else if(sw === 'average'){
    if(good !== 0 || neutral !== 0 || bad !== 0){
  return(
    <div>{average(good, neutral, bad)}</div>
  )}
    else{
      return( 
        <div>0%</div>
      )
    }
  }
    else{
  return(
    <div>{positive(good, neutral, bad)}%</div>
  )}}
//*** */


const Stats = ({good, neutral, bad}) => {
  const [sw, setSwitch] = useState(0)
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
      <tr>
        <td>average2</td>
        <td><ShowAverage good={good} neutral={neutral} bad={bad} /></td>
      </tr>
      <tr>
        <td>positive2</td>
        <td><ShowPositive good={good} neutral={neutral} bad={bad} /></td>
      </tr>
      <Header text='statistics' />
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine text='average' value={average(good, neutral, bad)} />
      <StatisticLine text='positive' value={positive(good, neutral, bad)} />

      </tbody>
    </table>
  )

}
const Anecdots = (props) => {
  return(
    <div>
      <br></br>
      {anecdotes[props.selected]}
    </div>
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

const average = (good, neutral, bad) =>{
  if(good !== 0 || neutral !== 0 || bad !== 0){
    return (
      <div>{(good*1 + neutral*0 + bad*-1)/(good + neutral + bad)}%</div>
    )}
    else{
      return( <div>0%</div> )}
} 
const positive = (good, neutral, bad) => {
if(good !== 0 || neutral !== 0 || bad !== 0){
  return (
    <div>{((good/(good + neutral + bad))*100)}%</div>
  )}
  else{
    return( <div>0%</div> )}
  }
  
  
  const Vote =({vt}) =>{
    const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 }
    const [votes, setVotes] = useState(points)

    console.log('---------------------')
    console.log('vt', vt)
    console.log('votes', votes)
    const vote = () =>{
      const copy = { ...votes}
      copy[vt] +=1
     // let tmp = copy[vt]
     // tmp +=1
    //  copy[vt] = tmp
      setVotes({...copy})
    }
    return (
      <>
        has {votes[vt]} votes<br></br>
        <Button handler={vote} text='vote' />
 
      </>
    );
  }

  const Vote2 =({vt}) =>{
    const [votes2, setVotes2] = useState(new Uint8Array(5))

    console.log('---------------------')
    console.log('vt', vt)
    console.log('votes', votes2)
    const vote2 = () =>{
      const copy2 = [ ...votes2]
      copy2[vt] +=1
     // let tmp = copy[vt]
     // tmp +=1
    //  copy[vt] = tmp
      setVotes2([...copy2])
    }
    return (
      <>
        has {votes2[vt]} votes<br></br>
        <Button handler={vote2} text='vote' />
 
      </>
    );
  }

  function RandomList() {
    const [items, setItems] = useState(new Uint8Array());
  
    const addItem = () => {
      setItems([
        ...items,
        {
          id: items.length,
          value: Math.random() * 100
        }
      ]);
      console.log(items)
    };
  
    return (
      <>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </>
    );
  }

  function LoginForm() {
    const [form, setState] = useState({
      username: '',
      password: ''
    });
  
    const printValues = e => {
      e.preventDefault();
      console.log(form.username, form.password);
    };
  
    const updateField = e => {
      console.log(form)
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
     // console.log(form.username, form.password);
    };
  
    return (
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    );
  }

function App() {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(Math.floor(Math.random() * 5))
  //setSelected(Math.floor(Math.random() * 5))
  //setSelected(4)
  
  

  return (
    <div>
      <Header text='Give feedback' />
      <Button handler={()=>setGood(good + 1)} text='good' />
      <Button handler={()=>setNeutral(neutral + 1)} text='neutral' />
      <Button handler={()=>setBad(bad + 1)} text='bad' />

      <Header text='statistics' />

      <Stats good={good} neutral={neutral} bad={bad} />
      <br></br>
      


      
      

      
      <Anecdots selected={selected} />
      <Vote vt={selected} />
      <Button handler={()=>setSelected(Math.floor(Math.random() * 5))} text='Next anecdote' />

      <Header text='statistics' />

      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine text='average' value={average(good, neutral, bad)} />
          <StatisticLine text='positive' value={positive(good, neutral, bad)} />
        </tbody>
      </table>

      <Anecdots selected={selected} />
      <Vote2 vt={selected} />
      <Button handler={()=>setSelected(Math.floor(Math.random() * 5))} text='Next anecdote' />
      <RandomList />
      <LoginForm />
    </div>

  )
}

export default App;
