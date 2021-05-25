import React from 'react'

const Header = (props) => (
      <h2>{props.course}</h2>
  )

const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  )

const Content = (props) => (
    props.parts.map((part) => (
      <Part part={part.name} exercises={part.exercises} key={"course" + props.id + "part" + part.id}/>
  )))

const Total = (props) => (
    <h4>Total of {props.parts.reduce((accumulator, current) => (accumulator + current.exercises), 0)} exersices</h4>
  )

const Course = (props) => (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} id={props.course.id}/>
      <Total parts={props.course.parts} />
    </div>
  )

const Courses = (props) => (
  props.courses.map((course) => (
    <Course course={course} key={"course" + course.id}/>
  )))

const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

export default App