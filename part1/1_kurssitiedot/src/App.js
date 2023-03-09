const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <p>
        <Content parts={course.parts}/>
      </p>
      <p>
        <Total parts={course.parts}/>
      </p>
    </div>
  )
}

const Header = (props) => {
  //console.log(props)  
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <p>    
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      </p>
      <p>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </p>
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <div>
      Number of exercises {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </div>
  )
}

export default App