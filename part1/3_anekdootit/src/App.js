import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const n = anecdotes.length
  // console.log(n)
  const stat = Array(n).fill(0)
  const [votes, setVotes] = useState(stat)
  const [selected, setSelected] = useState(0)
  
  const randomNumber = () => {
    const random_number = Math.floor(Math.random()*7)
    console.log("random_number_is_this", random_number)
    return random_number
  }

  const handleNextClick = () => {
    setSelected(randomNumber())
    console.log("random_number_on_click_is_false", selected)
  }

  const handleVoteClick = () => {
    console.log("random_number_on_vote", selected)
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log("list",copy)
  }

  const max_votes = Math.max(...votes)
  const anecdote_w_max_votes = votes.indexOf(Math.max(...votes))
  console.log("max_votes", max_votes, anecdote_w_max_votes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
      has {votes[selected]} votes
      </p>
      <p>
      <button
        onClick={handleVoteClick}>
        vote
      </button>
      <button
        onClick={handleNextClick}>
        next anecdote, please.
      </button>
      </p>
      <h1>Anecdote with most votes</h1>
        <p>{anecdotes[anecdote_w_max_votes]}</p>
        <p>has {max_votes} votes</p>
    </div>
  )
}

export default App
