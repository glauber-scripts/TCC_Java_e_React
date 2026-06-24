import '../../index.css'
import './Sobre.css'

export default function Sobre(){
  const values = [
    {
      icon: '📚',
      title: 'Paixão',
      description: 'Vivemos e respiramos literatura, com amor genuíno por cada obra em nossa coleção.'
    },
    {
      icon: '🎯',
      title: 'Qualidade',
      description: 'Cada livro é cuidadosamente selecionado para garantir excelência e autenticidade.'
    },
    {
      icon: '👥',
      title: 'Comunidade',
      description: 'Criamos espaços onde leitores se conectam e compartilham suas histórias favoritas.'
    },
    {
      icon: '🌍',
      title: 'Acessibilidade',
      description: 'Acreditamos que todos devem ter acesso ao poder transformador dos livros.'
    },
    {
      icon: '✨',
      title: 'Inovação',
      description: 'Combinamos tradição clássica com tecnologia moderna para melhor servir.'
    },
    {
      icon: '🏛️',
      title: 'Preservação',
      description: 'Preservamos a herança literária para as gerações futuras com dedicação.'
    }
  ]

  const team = [
    {
      name: 'Maria Silva',
      role: 'Fundadora e Curadora Chefe',
      avatar: '📚',
      description: 'Apaixonada por livros desde criança, Maria dedicou sua vida à curadoria de obras raras e clássicas.'
    },
    {
      name: 'João Santos',
      role: 'Gerente de Coleção',
      avatar: '🔍',
      description: 'Com especialização em bibliografia, João garante que cada título atende nossos altos padrões de qualidade.'
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora de Eventos',
      avatar: '🎭',
      description: 'Ana organiza nossos círculos de leitura e eventos culturais que conectam nossa comunidade.'
    },
    {
      name: 'Lucas Ferreira',
      role: 'Especialista Digital',
      avatar: '💻',
      description: 'Lucas moderniza nossa experiência, levando nossa paixão por livros para o mundo digital.'
    }
  ]

  return (
    <main className="sobre-main">
      {/* Hero Section */}
      <section className="sobre-hero">
        <h1>Sobre a Livraria</h1>
        <p>Dedicados a preservar a magia dos livros e conectar leitores apaixonados em uma comunidade vibrante</p>
      </section>

      {/* Content Section */}
      <div className="sobre-content">
        {/* Introduction */}
        <section className="sobre-section">
          <h2>Quem Somos</h2>
          <p>
            Somos uma livraria dedicada à celebração do poder transformador dos livros. Fundada com a visão de 
            criar um refúgio para leitores apaixonados, nossa livraria combina o encanto das bibliotecas clássicas 
            com a acessibilidade da era moderna.
          </p>
          <p>
            Cada membro da nossa equipe é um verdadeiro amante de livros, comprometido em ajudar você a descobrir 
            as histórias que enriquecerão sua vida. Não somos apenas uma livraria - somos guardiões da literatura, 
            curadores de sonhos e facilitadores de conexões humanas através das palavras.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="sobre-section">
          <h2>Nossa Missão e Visão</h2>
          <h3>Missão</h3>
          <p>
            Preservar, celebrar e compartilhar a riqueza da literatura, criando um espaço acessível onde leitores 
            de todas as idades e origens possam descobrir novas perspectivas, expandir seus horizontes e conectar-se 
            com outros através da paixão compartilhada por livros.
          </p>
          <h3>Visão</h3>
          <p>
            Ser o destino preferido para leitores apaixonados em todo o mundo, reconhecida pela excelência na curadoria, 
            pela qualidade de nossas coleções e pelo impacto positivo que geramos na vida de nossos clientes e comunidades.
          </p>
        </section>

        {/* Values */}
        <section className="sobre-section">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Highlight */}
        <section className="services-highlight">
          <h3>Serviços Que Oferecemos</h3>
          <div className="services-list">
            <div className="service-item">📖 Coleção Curada</div>
            <div className="service-item">🎓 Ciclos de Leitura</div>
            <div className="service-item">🎨 Eventos Culturais</div>
            <div className="service-item">💌 Assinatura Premium</div>
            <div className="service-item">🔍 Recomendações</div>
            <div className="service-item">🌐 Acesso Digital</div>
          </div>
        </section>

        {/* Team */}
        <section className="sobre-section">
          <h2>Nossa Equipe</h2>
          <p>
            Pessoas apaixonadas por livros e dedicadas a criar a melhor experiência para nossos leitores.
          </p>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="sobre-section">
          <h2>Por Que Escolher Nos</h2>
          <p>
            <strong>Experiência Profunda:</strong> Com mais de uma década de dedicação à coleção e preservação de livros, 
            nossa experiência garante que você encontrará apenas as melhores obras.
          </p>
          <p>
            <strong>Comunidade Vibrante:</strong> Junte-se a milhares de leitores que encontraram seus livros favoritos e 
            conexões significativas através de nossa plataforma.
          </p>
          <p>
            <strong>Atendimento Personalizado:</strong> Cada cliente é único, e nosso time está pronto para fornecer 
            recomendações personalizadas baseadas em seus interesses e preferências.
          </p>
          <p>
            <strong>Compromisso com Qualidade:</strong> Não apenas vendemos livros - curamos experiências literárias 
            que transformam perspectivas e enriquecem vidas.
          </p>
          <p>
            <strong>Inovação Contínua:</strong> Mantemos nossa coleção atualizada, eventos relevantes e experiências digitais 
            modernas enquanto honramos a tradição dos livros clássicos.
          </p>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h3>Entre em Contato</h3>
          <p>Adoraríamos ouvir de você! Tire suas dúvidas ou saiba mais sobre nossos serviços.</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>📍 Localização</strong>
              <p>Rua dos Clássicos, 123<br/>Cidade de Leitura, Brasil</p>
            </div>
            <div className="contact-item">
              <strong>📞 Telefone</strong>
              <p>(11) 3000-BOOK<br/>(11) 3000-2665</p>
            </div>
            <div className="contact-item">
              <strong>💌 Email</strong>
              <p>contato@livraria.com.br<br/>info@livraria.com.br</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
