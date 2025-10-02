import { useParams } from 'react-router'

const NoteDetail =({notes}) => {
    const {id }= useParams();
    const note = notes.find(n => n.id === id)
    if(!note) return <div>Note not found</div>
  return (
    <div>
        <h1>{note.title}</h1>
       <h2>{note.content}</h2>
       <p>{note?.user?.name}</p>
    </div>
  )
}

export default NoteDetail;