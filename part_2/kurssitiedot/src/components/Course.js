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

export default Course