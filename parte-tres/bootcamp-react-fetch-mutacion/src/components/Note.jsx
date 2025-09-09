import React from 'react'


function Note(props) {
    const { title, body, id } = props
  return (
    <div>
        <h1>{id}. {title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Note