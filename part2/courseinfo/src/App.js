const Course = ({courses}) => {
  return(
  courses.map(course =>  
  <div key={course.id}>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
  </div>)    
  )
}

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ parts }) => {
  let sum = 0
  parts.map(part=> sum+=part.exercises)
  return(
    <p><strong>Total of {sum} exercises</strong></p>
  )
}
  
  

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part=>
    <Part part={part} key={part.id}/>)}
   </>

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

  return <Course courses={courses} />
}

export default App