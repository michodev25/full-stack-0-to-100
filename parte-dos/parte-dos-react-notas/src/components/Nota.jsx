export const Nota = ({ content, date }) => {

  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  )
}

export default Nota;