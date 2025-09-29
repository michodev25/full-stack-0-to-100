import React from 'react'


function Note(props) {
    const { title, content, _id } = props
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        {console.log(_id)}
    </div>
  )
}

export default Note