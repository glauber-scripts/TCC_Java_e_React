import '../index.css'

export default function Enderecos({ onNavigate = () => {} }) {
  return (
    <main className="enderecos-main">
      <section className="page-hero">
        <h1>Endereços</h1>
        <p>Gerencie seus locais de entrega e escolha onde receber suas próximas compras.</p>
      </section>

      <section className="address-cards">
        <article className="address-card">
          <h3>Casa</h3>
          <p>Rua dos Livros, 123</p>
          <p>Bairro Literário, Cidade de Leitura</p>
          <p>CEP 01234-567</p>
        </article>
        <article className="address-card">
          <h3>Trabalho</h3>
          <p>Avenida do Conhecimento, 456</p>
          <p>Centro Histórico, Cidade de Leitura</p>
          <p>CEP 04567-890</p>
        </article>
      </section>
    </main>
  )
}
