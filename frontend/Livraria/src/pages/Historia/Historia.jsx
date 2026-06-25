import '../../index.css'
import './Historia.css'

export default function Historia(){
  const timelineItems = [
    {
      year: '2010',
      title: 'O Início',
      description: 'Nossa livraria nasceu da paixão de um pequeno grupo de apaixonados por livros que acreditava que cada obra merecia ser preservada e compartilhada.'
    },
    {
      year: '2014',
      title: 'Expansão da Coleção',
      description: 'Após 4 anos de dedicação, nossa coleção cresceu para incluir rare books, primeiras edições e obras clássicas de diversos períodos históricos.'
    },
    {
      year: '2018',
      title: 'Comunidade em Crescimento',
      description: 'Iniciamos nossos ciclos de leitura e eventos culturais, criando um espaço onde leitores poderiam se conectar e compartilhar suas descobertas literárias.'
    },
    {
      year: '2022',
      title: 'Era Digital',
      description: 'Expandimos para a plataforma digital, permitindo que clientes do mundo inteiro acessassem nossa coleção e participassem de eventos virtuais.'
    },
    {
      year: '2024',
      title: 'Presente e Futuro',
      description: 'Continuamos nossa missão de preservar o conhecimento e conectar leitores apaixonados, combinando tradição com inovação tecnológica.'
    }
  ]

  return (
    <main className="historia-main">
      {/* Hero Section */}
      <section className="historia-hero">
        <h1>A Nossa História</h1>
        <p>Descubra a jornada que transformou nossa paixão por livros em uma comunidade vibrante de leitores</p>
      </section>

      {/* Content Section */}
      <div className="historia-content">
        {/* Introduction */}
        <section className="historia-section">
          <h2>Origem e Missão</h2>
          <p>
            A história de nossa livraria começa com uma simples paixão: o amor aos livros. Fundada em 2010, 
            começamos como um pequeno refúgio literário em um espaço acolhedor, com uma coleção cuidadosamente 
            curada de obras clássicas e contemporâneas. Nosso objetivo sempre foi criar um espaço onde a magia 
            dos livros pudesse ser vivenciada plenamente.
          </p>
          <p>
            Desde o início, nossa missão tem sido simples, mas profunda: preservar o conhecimento, manter viva 
            a herança literária clássica e conectar leitores apaixonados em uma comunidade que celebra as palavras 
            impressas. Acreditamos que cada livro é uma porta para um mundo diferente, e cada leitor merece ter 
            acesso às histórias que tocam sua alma.
          </p>
        </section>

        {/* Timeline */}
        <section className="historia-section">
          <h2>Nossa Jornada</h2>
          <div className="historia-timeline">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="historia-section">
          <h2>O Que Nos Define</h2>
          <div className="highlights-grid">
            <div className="highlight-box">
              <h3>📚 Paixão por Livros</h3>
              <p>Cada membro da nossa equipe é um leitor dedicado que compreende e compartilha a alegria de descobrir novas histórias.</p>
            </div>
            <div className="highlight-box">
              <h3>🏛️ Preservação</h3>
              <p>Nos comprometemos a preservar obras raras e garantir que as gerações futuras tenham acesso ao conhecimento acumulado.</p>
            </div>
            <div className="highlight-box">
              <h3>👥 Comunidade</h3>
              <p>Nossa livraria é mais que um lugar - é um espaço de encontro e conexão entre pessoas que compartilham a paixão pela leitura.</p>
            </div>
            <div className="highlight-box">
              <h3>✨ Qualidade</h3>
              <p>Cada livro em nossa coleção é selecionado com cuidado para garantir qualidade, autenticidade e relevância.</p>
            </div>
            <div className="highlight-box">
              <h3>🎓 Conhecimento</h3>
              <p>Acreditamos no poder transformador da educação e da leitura para expandir horizontes e enriquecer vidas.</p>
            </div>
            <div className="highlight-box">
              <h3>🌍 Alcance Global</h3>
              <p>Através de nossa plataforma digital, conectamos leitores do mundo inteiro em uma comunidade literária sem fronteiras.</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="quote-section">
          <blockquote>
            "Um livro é um sonho que você segura em suas mãos. Uma livraria é um lugar onde esses sonhos se encontram e inspiram novos sonhos."
          </blockquote>
          <p>— Nossa Filosofia</p>
        </section>

        {/* Values */}
        <section className="historia-section">
          <h2>Nossos Valores</h2>
          <p>
            No coração de tudo o que fazemos estão valores fundamentais que guiam nossas decisões e nos definem como organização:
          </p>
          <p>
            <strong>Integridade:</strong> Somos honestos em nossa curadoria e comprometidos com a qualidade de cada serviço que oferecemos.
          </p>
          <p>
            <strong>Inclusão:</strong> Acreditamos que todos merecem acesso a livros e histórias, independentemente de sua origem ou circunstâncias.
          </p>
          <p>
            <strong>Inovação:</strong> Enquanto honramos a tradição, abraçamos a tecnologia para melhor servir nossa comunidade.
          </p>
          <p>
            <strong>Sustentabilidade:</strong> Nos importamos com o meio ambiente e promovemos práticas responsáveis em todas as nossas operações.
          </p>
          <p>
            <strong>Conexão:</strong> Fomentamos relacionamentos significativos entre leitores, criadores e o conhecimento que compartilhamos.
          </p>
        </section>

        {/* Future */}
        <section className="historia-section">
          <h2>Olhando para o Futuro</h2>
          <p>
            À medida que continuamos a crescer, nossa visão permanece clara: ser o destino preferido para leitores apaixonados 
            em todo o mundo. Planejamos expandir ainda mais nossa coleção, oferecer experiências literárias inovadoras e fortalecer 
            nossa comunidade global.
          </p>
          <p>
            Com cada novo leitor que nos encontra e cada nova história que adicionamos à nossa coleção, nos movemos mais perto 
            de nossa missão: transformar vidas através do poder dos livros. Estamos honrados por fazer parte de sua jornada literária 
            e esperamos continuar inspirando a paixão pela leitura para as gerações vindouras.
          </p>
        </section>
      </div>
    </main>
  )
}
