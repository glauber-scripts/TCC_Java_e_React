import './Definion.css'
import '../../index.css'

export default function Definition() {
  const definitions = [
    {
      title: 'O Que é Uma Livraria?',
      description: 'Uma livraria é mais que um estabelecimento comercial - é um templo do conhecimento onde livros de todas as categorias são cuidadosamente selecionados para enriquecer a vida de seus visitantes.'
    },
    {
      title: 'Nossa Especialidade',
      description: 'Especializamo-nos em obras clássicas, raras e contemporâneas que transportam leitores para mundos extraordinários, oferecendo uma experiência imersiva na literatura.'
    },
    {
      title: 'Comunidade de Leitores',
      description: 'Aqui você não encontra apenas livros, mas uma comunidade vibrante de pessoas que compartilham a paixão pela leitura e pelo conhecimento.'
    }
  ]

  const features = [
    {
      icon: '📖',
      title: 'Acervo Diverso',
      description: 'Ficção, história, filosofia, técnicos, auto-ajuda e muito mais'
    },
    {
      icon: '🏛️',
      title: 'Obras Raras',
      description: 'Primeiras edições e publicações clássicas de autores renomados'
    },
    {
      icon: '👥',
      title: 'Comunidade',
      description: 'Conecte-se com outros leitores e participe de eventos especiais'
    },
    {
      icon: '🎓',
      title: 'Educação',
      description: 'Aprenda com especialistas através de nossas palestras e workshops'
    },
    {
      icon: '💡',
      title: 'Recomendações',
      description: 'Receba sugestões personalizadas baseadas em seus interesses'
    },
    {
      icon: '🌐',
      title: 'Acesso Digital',
      description: 'Explore nossa coleção online de qualquer lugar e a qualquer hora'
    }
  ]

  const benefits = [
    {
      icon: '🚀',
      title: 'Expandir Horizontes',
      description: 'Descubra novos mundos e perspectivas através da leitura'
    },
    {
      icon: '🧠',
      title: 'Desenvolver Conhecimento',
      description: 'Aprofunde seus conhecimentos em diversos tópicos de interesse'
    },
    {
      icon: '💭',
      title: 'Crescimento Pessoal',
      description: 'Encontre inspiração e sabedoria que transformam sua vida'
    },
    {
      icon: '🤝',
      title: 'Fazer Conexões',
      description: 'Encontre amigos e mentores que compartilham suas paixões'
    }
  ]

  return (
    <main className="definion-main">
      {/* Hero Section */}
      <section className="definion-hero">
        <h1>O Que Somos</h1>
        <p>Entenda nossa missão, valores e o que nos torna especiais no mundo das livrarias</p>
      </section>

      {/* Content Section */}
      <div className="definion-content">
        {/* Introduction */}
        <section className="definion-section">
          <h2>Nossa Definição</h2>
          <div className="definition-grid">
            {definitions.map((def, idx) => (
              <div key={idx} className="definition-card">
                <h3>{def.title}</h3>
                <p>{def.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="highlight-quote">
          <blockquote>
            "Uma livraria não é apenas um lugar onde se vendem livros, é um espaço sagrado onde os conhecimentos se encontram, sonhos ganham forma e vidas são transformadas."
          </blockquote>
          <p>— Nossa Filosofia Fundamental</p>
        </section>

        {/* What We Offer */}
        <section className="definion-section">
          <h2>O Que Oferecemos</h2>
          <p>
            Vai muito além de simplesmente vender livros. Somos guardians do conhecimento, conectores de mentes 
            e criadores de experiências memoráveis ao redor da literatura.
          </p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-box">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="definion-section">
          <h2>Como Funcionamos</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Curação</h3>
              <p>Selecionamos cuidadosamente cada livro</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Catalogação</h3>
              <p>Organizamos por categorias e temas</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Acesso</h3>
              <p>Disponibilizamos em múltiplos formatos</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Comunidade</h3>
              <p>Conectamos leitores em torno dos livros</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="definion-section">
          <h2>Benefícios de Usar Nossa Plataforma</h2>
          <p>
            Ao escolher nossa livraria, você investe em si mesmo e em um ecossistema que valoriza o conhecimento 
            e a comunidade.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Reading Matters */}
        <section className="definion-section">
          <h2>Por Que a Leitura Importa</h2>
          <p>
            A leitura é uma das atividades mais enriquecedoras que um ser humano pode realizar. Ela não apenas 
            nos fornece informações, mas também nos permite experimentar vidas diferentes, explorar ideias complexas 
            e desenvolver empatia.
          </p>
          <p>
            Estudos comprovam que leitura regular melhora a concentração, reduz o estresse, expande vocabulário e 
            estimula a criatividade. Através de histórias, nos encontramos a nós mesmos e entendemos melhor o mundo.
          </p>
          <p>
            Nossa livraria existe porque acreditamos que cada pessoa merece ter acesso a essas transformações que 
            apenas os livros podem proporcionar. Somos guardiões dessa magia e facilitadores dessa jornada.
          </p>
        </section>

        {/* Values Section */}
        <section className="definion-section">
          <h2>Nossos Princípios Centrais</h2>
          <p>
            Cada decisão que tomamos é guiada por princípios fundamentais que refletem quem somos:
          </p>
          <p>
            <strong>Conhecimento sem Barreiras:</strong> Acreditamos que a informação e a literatura devem ser acessíveis 
            a todos, independentemente de origem ou circunstâncias.
          </p>
          <p>
            <strong>Qualidade Absoluta:</strong> Cada título em nossa coleção passa por rigorosa avaliação para garantir 
            que oferecemos apenas o melhor.
          </p>
          <p>
            <strong>Comunidade Ativa:</strong> Fomentamos conexões genuínas entre leitores que enriquecem a experiência 
            de todos.
          </p>
          <p>
            <strong>Inovação Equilibrada:</strong> Honramos a tradição enquanto abraçamos a tecnologia moderna para 
            melhor servir.
          </p>
          <p>
            <strong>Impacto Positivo:</strong> Buscamos deixar o mundo melhor através do poder transformador dos livros 
            e do conhecimento.
          </p>
        </section>
      </div>
    </main>
  )
}