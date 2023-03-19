import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const Display = (props) => {
  return(
    <a>
      {props.text} {props.type}<br />
    </a>
  )
}

const Statistics = (props) => {
  let total = props.good + props.bad + props.neutral
  let average = (props.good-props.bad)/total
  let positive = 100 * props.good/total + "%" 
  if (total === 0){
    return(
      <div>
        <a>No Feedback Given</a>
      </div>
    )
  }
  return(
    <div>
    <Display type={props.good} text="good" />
    <Display type={props.neutral} text="neutral" />
    <Display type={props.bad} text="bad" />
    <Display type={total} text="all" />     
    <Display type={average} text="average" />
    <Display type={positive} text="positive" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="Bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App