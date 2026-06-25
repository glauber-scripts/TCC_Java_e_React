import '../index.css'

export default function Carrinho({ cart = [], onRemove = () => {}, onNavigate = () => {} }) {
  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)

  return (
    <main className="cart-main">
      <section className="page-hero">
        <h1>Seu Carrinho</h1>
        <p>Confira seus livros selecionados e finalize suas escolhas antes da compra.</p>
      </section>

      {cart.length === 0 ? (
        <section className="empty-state">
          <h2>O carrinho está vazio</h2>
          <p>Adicione livros para começar sua jornada literária.</p>
          <button className="btn btn-primary" onClick={() => onNavigate('books')}>Ver Livros</button>
        </section>
      ) : (
        <section className="cart-list">
          <div className="cart-items">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <img
                  src={item.imagem_url}
                  alt={item.titulo}
                  onError={(e) => { e.target.style.opacity = '0.5' }}
                />
                <div className="cart-item-details">
                  <h3>{item.titulo}</h3>
                  <p>{item.autor || 'Autor Desconhecido'}</p>
                  <p className="cart-item-meta">{item.categoria || 'Categoria não informada'}</p>
                  <p className="cart-item-price">R$ {Number(item.price || 0).toFixed(2)}</p>
                  <button className="btn btn-secondary" onClick={() => onRemove(item.id)}>Remover</button>
                </div>
              </article>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumo do pedido</h2>
            <p>Itens no carrinho: {cart.length}</p>
            <p className="summary-total">Total: R$ {total.toFixed(2)}</p>
            <button className="btn btn-primary">Finalizar Compra</button>
          </div>
        </section>
      )}
    </main>
  )
}
