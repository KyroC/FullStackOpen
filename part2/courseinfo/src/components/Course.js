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

export default Course;