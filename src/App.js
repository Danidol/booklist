import "./App.css"
import Book from "./Book"
import MainHeading from "./MainHeading"
import { books } from "./Books"

function App() {
  return (
    <div className="App">
      <header>
        <MainHeading />
      </header>

      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </div>
  )
}

export default App
