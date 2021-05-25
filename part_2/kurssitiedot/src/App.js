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

const Content = (props) => (
    props.parts.map((part) => (
      <Part part={part.name} exercises={part.exercises} key={"course" + props.id + "part" + part.id}/>)
    )
  )

const Total = (props) => {
  return (
    <p>Total of {props.parts.reduce((accumulator, current) => (accumulator + current.exercises), 0)} exersices</p>
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