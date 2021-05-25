import React from 'react'

const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    props.parts.map((part) => {
      console.log(part)
      console.log("course" + props.id + "part" + part.id)
      return (
      <Part part={part.name} exercises={part.exercises} key={"course" + props.id + "part" + part.id}/>)
    })
  )
}

const Total = (props) => {
  let total = 0
  props.parts.map(part => {
    total += part.exercises
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = (props) => {
  
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} id={props.course.id}/>
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'React stuff',
        exercises: 6,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App