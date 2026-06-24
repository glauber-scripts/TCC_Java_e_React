/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/


/* CODE 2*/

/*
function App(){
  return <h1>Olá mundo!</h1>
}
export default App
*/

import { useState } from 'react'
import Home from "./pages/Home/Home"
import Header from './Header'
import Sobre from './pages/Sobre/Sobre'
import Historia from './pages/Historia/Historia'
import Books from './pages/Books/Books'
import Carrinho from './pages/Carrinho'
import Enderecos from './pages/Enderecos'
import Login from './pages/Login'
import './App.css'

function App(){
  const [page, setPage] = useState('home')
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const handleNavigate = (destination) => {
    setPage(destination)
  }

  const handleLogin = (userData) => {
    setUser(userData)
    setPage('home')
  }

  const handleAddToCart = (book) => {
    if(!user){
      setPage('login')
      return
    }

    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === book.id)
      if(existing){
        return currentCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentCart, { ...book, quantity: 1, price: Number(book.preco || 0) }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id))
  }

  const renderPage = () => {
    if(typeof page === 'string'){
      if(page.startsWith('search:')){
        const q = page.split(':').slice(1).join(':')
        return <Books search={q} onAddToCart={handleAddToCart} onNavigate={handleNavigate} isLogged={Boolean(user)} />
      }
      if(page.startsWith('category:')){
        const cat = page.split(':')[1]
        return <Books category={cat} onAddToCart={handleAddToCart} onNavigate={handleNavigate} isLogged={Boolean(user)} />
      }
    }
    switch(page){
      case 'sobre': return <Sobre />
      case 'historia': return <Historia />
      case 'books': return <Books onAddToCart={handleAddToCart} onNavigate={handleNavigate} isLogged={Boolean(user)} />
      case 'carrinho': return <Carrinho cart={cart} onRemove={handleRemoveFromCart} onNavigate={handleNavigate} />
      case 'enderecos': return <Enderecos />
      case 'login': return <Login user={user} onLogin={handleLogin} onNavigate={handleNavigate} />
      default: return <Home onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="app-root">
      <Header onNavigate={handleNavigate} cartCount={cart.length} isLogged={Boolean(user)} />
      {renderPage()}
    </div>
  )
}

export default App