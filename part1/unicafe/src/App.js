import { useState } from 'react'

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
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
      <a>good {good}</a><br />
      <a>neutral {neutral}</a><br />
      <a>bad {bad}</a>
    </div>
  )
}

export default App