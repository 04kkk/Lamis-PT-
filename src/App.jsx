
import { useState } from "react"
import Cards from "./components/Cards/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header/index.jsx"
import PageHeader from "./components/PageHeader/index.jsx"
import Likes from "./components/Likes/index.jsx"

export default function App() {
  const [card, setCard] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("");

  const addCard = (item) => {
    if (!item) return

    setCard(prev => [...prev, item])
    console.log("isOpen:", isOpen)
  }
  return (
    <>

      <Header openModal={() => setIsOpen(true)} query={query} setQuery={setQuery} />
      <PageHeader />
      <Cards addCard={addCard} query={query} />
      {isOpen && (
        <Likes card={card} closeModal={() => setIsOpen(false)} />
      )}
      <Footer />
    </>
  )
}
