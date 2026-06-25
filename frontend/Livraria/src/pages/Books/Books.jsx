import { useEffect, useState } from 'react'
import '../../index.css'
import './Books.css'
import { libroService } from '../../services/livroService'

export default function Books({ category = null, search = null, onAddToCart = () => {}, onNavigate = () => {}, isLogged = false }){
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState(category)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ fetchBooks() }, [])

  useEffect(()=>{ setFilter(category) }, [category])

  const fetchBooks = async () => {
    try{
      setLoading(true)
      const dados = await libroService.buscarTodos()
      setBooks(dados || [])
    }catch(e){ 
      console.error(e) 
    }finally{
      setLoading(false)
    }
  }

  const categories = Array.from(new Set(books.map(b=>b.categoria).filter(Boolean)))

  const q = search ? search.toLowerCase() : null
  const visible = books.filter(b => {
    if(filter && b.categoria !== filter) return false
    if(q){
      return (b.titulo||'').toLowerCase().includes(q) || (b.autor||'').toLowerCase().includes(q) || (b.categoria||'').toLowerCase().includes(q)
    }
    return true
  })

  const pageTitle = filter ? `${filter}` : search ? `Resultados: ${search}` : 'Todos os Livros'

  return (
    <main className="books-main">
      {/* Hero Section */}
      <section className="books-hero">
        <h1>📚 Acervo de Livros</h1>
        <p>Explore nossa coleção cuidadosamente curada de obras clássicas e contemporâneas</p>
      </section>

      {/* Filter Section */}
      <section className="books-filter-section">
        <div className="filter-header">
          <h2>{pageTitle}</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${!filter ? 'active' : ''}`}
              onClick={()=>setFilter(null)}
            >
              Todos ({books.length})
            </button>
            {categories.map(c=> (
              <button 
                key={c} 
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={()=>setFilter(c)}
              >
                {c} ({books.filter(b=>b.categoria === c).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="books-content">
        {loading ? (
          <div className="books-loading">
            {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="book-skeleton"></div>)}
          </div>
        ) : visible.length > 0 ? (
          <div className="books-grid">
            {visible.map(b=> (
              <div key={b.id} className="book-card">
                <img 
                  className="book-image" 
                  src={b.imagem_url} 
                  alt={b.titulo}
                  onError={(e)=>{e.target.style.opacity = '0.5'}}
                />
                <div className="book-info">
                  <div className="book-title">{b.titulo}</div>
                  <div className="book-meta">
                    <strong>{b.autor || 'Autor Desconhecido'}</strong>
                  </div>
                  {b.categoria && (
                    <span className="book-category">{b.categoria}</span>
                  )}
                  <div className="book-actions">
                    <span className="book-price">R$ {Number(b.preco || 0).toFixed(2)}</span>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onAddToCart(b)}
                    >
                      {isLogged ? 'Adicionar ao Carrinho' : 'Entrar para Adicionar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="books-empty">
            <h3>📭 Nenhum livro encontrado</h3>
            <p>Tente ajustar seus filtros ou pesquisar por outro termo</p>
          </div>
        )}
      </section>
    </main>
  )
}
 
