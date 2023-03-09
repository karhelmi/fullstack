// const App = (props) => {
//   const { notes } = props
import Note from './components/Note'

// const Note = ({ note }) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* {notes.map((note, i) => // ei suositeltavaa.
          <li key={i}>
            {note.content}
          </li>
        )} */}
        {/* {notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>
        )} */}
        {notes.map(note =>
          <Note key={note.id} note={note} />
          )}
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
      </ul>
    </div>
  )
}

export default App