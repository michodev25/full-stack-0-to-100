import { Link } from 'react-router'

function Note(props) {
    const { title, content, _id } = props
  return (
    <div>
        <h1>{title}</h1>
        <Link to={`/notes/${_id}`}>{content}</Link>
        {console.log(_id)}
    </div>
  )
}

export default Note