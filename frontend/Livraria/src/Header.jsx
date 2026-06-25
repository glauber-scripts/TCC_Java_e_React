import './index.css'
import './indexBoxes.css'
import { useState } from 'react'

function Header({ onNavigate = () => {}, cartCount = 0, isLogged = false }){
  const genres = ['Ficção', 'História', 'Filosofia', 'Fantasia', 'Romance', 'Viagens', 'Autoajuda', 'Literatura']
  const [query, setQuery] = useState('')

  const handleSearchKey = (e) => {
    if(e.key === 'Enter'){
      const q = (e.target.value || '').trim()
      if(q) onNavigate(`search:${q}`)
    }
  }

  return (
    <header>
      <div className="top-navbar-container">
        <div className="top-left-navbar">
          {genres.map((g) => (
            <button key={g} className="nav-top-btn" onClick={() => onNavigate(`category:${g}`)}>{g}</button>
          ))}
        </div>
        <div className="top-right-navbar">
          <button className="nav-top-btn cart-button" onClick={() => onNavigate('carrinho')}>
            Carrinho{cartCount > 0 ? <span className="cart-badge">{cartCount}</span> : ''}
          </button>
          <button className="nav-top-btn" onClick={() => onNavigate('enderecos')}>Endereços</button>
          <button className="nav-top-btn" onClick={() => onNavigate('login')}>{isLogged ? 'Minha Conta' : 'Login'}</button>
        </div>
      </div>

      <div className="bottom-navbar-container">
        <div className="bottom-navbar-items">
          <button className="nav-bottom" onClick={() => onNavigate('sobre')}>Sobre</button>
          <button className="nav-bottom" onClick={() => onNavigate('historia')}>História</button>
          <button className="nav-bottom" onClick={() => onNavigate('books')}>Livros</button>
        </div>
        <div className="bottom-navbar-title">
          <div className='bottom-navbar-title-p' onClick={() => onNavigate('home')}>Livraria</div>
        </div>
        <div className="bottom-navbar-components">
          <div className="search-wrapper">
            <div className="search-box header-search-box">
              <input 
                className="search-input header-search"
                placeholder="Buscar livros..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyDown={handleSearchKey}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header