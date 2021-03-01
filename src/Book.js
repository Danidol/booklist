const Book = (props) => {
  const { img, title, author } = props
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert(title)
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt="book" />
      <h3 onClick={() => console.log(author)}>{title}</h3>
      <h5>{author}</h5>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <br />
      <button onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
  )
}

export default Book
