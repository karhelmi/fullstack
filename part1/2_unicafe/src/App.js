import { useState } from 'react'

const StatisticLine = ({ text, value}) => {
  return (
    <div>
      <table>
        <colgroup><col width="70"/></colgroup>
        <tbody>
          <tr>
            <td> { text } </td>
            <td> { value } </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      {/* <table>
        <tbody> */}
          <StatisticLine text="good" value ={ props.good } />
          <StatisticLine text="neutral" value ={ props.neutral } />
          <StatisticLine text="bad" value ={ props.bad } />
          <StatisticLine text="all" value ={ props.good + props.neutral + props.bad } />
          <StatisticLine text="average" value ={ (props.vgood + props.vneutral + props.vbad) / (props.good + props.neutral + props.bad) } />
          <StatisticLine text="positive" value ={ (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"} />
        {/* </tbody>
      </table> */}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [vgood, valueGood] = useState(0)
  const [vneutral, valueNeutral] = useState(0)
  const [vbad, valueBad] = useState(0)
  
  const handleGoodClick = () => {
    setGood(good + 1)
    valueGood(vgood + 1)
    //console.log("clicked good")
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    valueNeutral(vneutral + 0)
    //console.log("clicked neutral")
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    valueBad(vbad - 1)
    //console.log("clicked bad")      
  }

  if ( good + neutral + bad > 0 ) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        {/* <button onClick={handleBadClick}>
          bad
        </button> */}
        <h1>statistics</h1> {
        <Statistics good={good} neutral={neutral} bad={bad} vgood={vgood} vneutral={vneutral} vbad={vbad}/>
      }
    </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>
          good
        </button>
        <button onClick={handleNeutralClick}>
          neutral
        </button>
        <button onClick={handleBadClick}>
          bad
        </button>
        <h1>statistics</h1>
          No feedback given
    </div>
    )
  }  
}

export default App


// DONE!