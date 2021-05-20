import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const PrintAnecdote = ({text, votes}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const GetRandomNumber = (max) => (
  Math.floor(Math.random() * max)
)

const GetPopular = ({anecdotes, votes}) => {
  if (anecdotes.lenght === 0)
    return (
      <p>No anecdotes</p>
    )
  let maxVotes = votes[0]
  let maxIndex = 0

  for (let i = 1; i < anecdotes.length; i++) {
    if (votes[i] > maxVotes) {
      maxVotes = votes[i]
      maxIndex = i
    }
  }
  return (
    <div>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const initialVotes = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)

  const setToSelected = () => {
    const value = GetRandomNumber(anecdotes.length)
    console.log(value)
    setSelected(value)
  }

  const setToVotes = i => {
    const copy = {...votes}
    copy[i] += 1
    console.log(selected)
    console.log(copy)
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <PrintAnecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={() => setToVotes(selected)} text="vote" />
      <Button handleClick={() => setToSelected()} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <GetPopular anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App
