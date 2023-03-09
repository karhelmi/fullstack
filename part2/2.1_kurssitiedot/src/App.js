const Course = (props) => {
  console.log("Course:", props.course)
  return (
    <div>
      <Header course_name={props.course.name} />
      <Content parts={props.course.parts} />
      {/* <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  )
}

const Header = ( props ) => {
  console.log("Header:", props.course_name)
  return ( 
    <div>
      <h1>{props.course_name}</h1>
    </div>
  )
}

const Content = ( props ) => {
  console.log("Content parts:", props.parts)
  const parts = props.parts
  console.log("Parts", parts)
  const length = props.parts.length
  console.log("Pituus:", length)
  // parts.map((part, id) => {
  //   console.log("id", id, parts[id].name)
  // return (<Part part={parts}/> 
  //   // return <div key={parts.id}>{parts[id].name} <>
  // )})
  for (let i=0; i < length; i++) {
    return (
    <Part
       part={props.parts[i]} />   //Ei renderöidy mitään.
    )
  }
  // return (
  //   <>
  //   <Part
  //     part={props.parts[0]} 
  //   />
  //   <Part
  //     part={props.parts[1]} 
  //   />
  //   <Part
  //     part={props.parts[2]} 
  //   />   
  //   </>
  // )    */}
}

const Part = ({ part }) => {
  <div>
    {part.name} {part.exercises}
  </div>
}


// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

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
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
      {/* <Header course={course} />
      <Content parts={parts} />
      <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
    </div>
  )
}

export default App


// 2.1. Pitäisi saada vielä, että osien määrällä ei väliä...