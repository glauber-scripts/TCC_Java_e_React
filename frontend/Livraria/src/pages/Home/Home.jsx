// Importing the tools which will manage the data in CRUD
import { useState, useEffect } from 'react';
import { libroService } from '../../services/livroService';
import './../../index.css';
import './../../indexBoxes.css';
import './Home.css';

function Home({ onNavigate = () => {} }) {
    // Estado dinâmico que armazena a lista de livros vinda do banco
    const [livros, setLivros] = useState([]);
    const [featuredBooks, setFeaturedBooks] = useState([]);

    const bentoItems = [
        { label: 'Ficção', subtitle: 'Mundos imaginários', area: 'bento-box1', category: 'Ficção' },
        { label: 'Fantasia', subtitle: 'Aventura e magia', area: 'bento-box2', category: 'Fantasia' },
        { label: 'Filosofia', subtitle: 'Ideias profundas', area: 'bento-box3', category: 'Filosofia' },
        { label: 'História', subtitle: 'Herança cultural', area: 'bento-box4', category: 'História' },
        { label: 'Romance', subtitle: 'Amor e emoção', area: 'bento-box5', category: 'Romance' },
        { label: 'Viagens', subtitle: 'Mundos para explorar', area: 'bento-box6', category: 'Viagens' },
        { label: 'Conhecimento', subtitle: 'Aprendizado contínuo', area: 'bento-box7', category: 'Conhecimento' },
        { label: 'Literatura', subtitle: 'Clássicos e modernos', area: 'bento-box8', category: 'Literatura' },
        { label: 'Clássicos', subtitle: 'Livros atemporais', area: 'bento-box9', category: 'Clássicos' }
    ];

    // Executa assim que a página carrega para trazer os dados reais do Java
    useEffect(() => {
        carregarLivros();
    }, []);

    const carregarLivros = async () => {
        try {
            const dados = await libroService.buscarTodos();
            setLivros(dados);
            // Get first 10 books for featured section
            setFeaturedBooks(dados.slice(0, 10) || []);
        } catch (erro) {
            console.error("Erro ao conectar com o backend Java:", erro);
        }
    };

    const services = [
        {
            icon: '📚',
            title: 'Acervo Diverso',
            description: 'Explore nossa vasta coleção de livros raros, clássicos e contemporâneos, cuidadosamente selecionados para entusiastas da leitura.'
        },
        {
            icon: '🎓',
            title: 'Ciclos de Leitura',
            description: 'Participe de nossos círculos de leitura temáticos e conecte-se com outros leitores apaixonados por literatura.'
        },
        {
            icon: '🎨',
            title: 'Eventos Culturais',
            description: 'Acompanhe palestras, lançamentos de livros e exposições que celebram a importância da literatura na sociedade.'
        },
        {
            icon: '💌',
            title: 'Assinatura Premium',
            description: 'Desfrute de benefícios exclusivos, acesso antecipado a novidades e atendimento personalizado com nossa assinatura premium.'
        },
        {
            icon: '🔍',
            title: 'Recomendações Personalizadas',
            description: 'Receba sugestões de leitura baseadas em seus interesses e histórico de leitura na nossa plataforma.'
        },
        {
            icon: '🏛️',
            title: 'Preservação do Conhecimento',
            description: 'Apoiamos a preservação de obras raras e contribuímos para manter viva a herança literária clássica.'
        }
    ];

    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero-full">
                <div className="hero-inner">
                    <h1>Livraria Clássica</h1>
                    <p className="hero-sub">Descubra um refúgio literário onde a tradição encontra a paixão pela leitura. Explore nosso acervo cuidadosamente curado e vivencie a magia dos livros.</p>
                    <div className="hero-ctas">
                        <button className="btn btn-primary" onClick={() => onNavigate('books')}>Explorar Coleção</button>
                        <button className="btn" onClick={() => onNavigate('enderecos')}>Nossos Endereços</button>
                    </div>
                </div>
            </section>

            {/* FEATURED BOOKS SECTION */}
            <section className="featured-section">
                <div className="section-header">
                    <h2>Livros em Destaque</h2>
                    <p>Confira uma seleção dos nossos títulos mais procurados e recomendados</p>
                </div>
                <div className="books-grid">
                    {featuredBooks.length > 0 ? (
                        featuredBooks.map(livro => (
                            <div key={livro.id} className="featured-book-card">
                                <div className="book-image-wrapper">
                                    {livro.imagem_url ? (
                                        <img src={livro.imagem_url} alt={livro.titulo} />
                                    ) : (
                                        <span className="book-image-placeholder">📖</span>
                                    )}
                                </div>
                                <div className="book-card-content">
                                    <h3 className="book-card-title">{livro.titulo}</h3>
                                    <p className="book-card-author">por {livro.autor || 'Autor Desconhecido'}</p>
                                    {livro.categoria && (
                                        <span className="book-card-category">{livro.categoria}</span>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px' }}>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text)' }}>Carregando livros...</p>
                        </div>
                    )}
                </div>
            </section>

            {/* LIBRARY PRESENTATION SECTION */}
            <section className="library-section">
                <div className="library-content">
                    <div className="library-text">
                        <h2>Sobre Nossa Livraria</h2>
                        <p>
                            Nossa livraria foi fundada com a missão de preservar o clima encantador das antigas bibliotecas, 
                            oferecendo um espaço aconchego para leitores apaixonados. Cada título em nosso acervo foi cuidadosamente 
                            selecionado para oferecer qualidade, autenticidade e relevância.
                        </p>
                        <p>
                            Acreditamos que os livros são portas para mundos infinitos e que a leitura tem o poder de transformar vidas. 
                            Por isso, dedicamos-nos a conectar leitores com as obras que tocarão suas almas e expandirão seus horizontes.
                        </p>
                        <div className="library-highlights">
                            <div className="highlight-item">
                                <h4>📦 Variedade</h4>
                                <p>Ficção, história, filosofia, fantasia, romance e muito mais</p>
                            </div>
                            <div className="highlight-item">
                                <h4>🎯 Qualidade</h4>
                                <p>Curadoria cuidadosa de cada obra em nosso acervo</p>
                            </div>
                            <div className="highlight-item">
                                <h4>👥 Comunidade</h4>
                                <p>Conecte-se com outros leitores e compartilhe experiências</p>
                            </div>
                            <div className="highlight-item">
                                <h4>✨ Experiência</h4>
                                <p>Ambiente clássico e acolhedor para seus momentos de leitura</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                            fontSize: '8rem',
                            textAlign: 'center',
                            opacity: 0.1,
                            userSelect: 'none'
                        }}>
                            📚
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services-section">
                <div className="section-header">
                    <h2>Nossos Serviços</h2>
                    <p>Oferecemos mais que livros - oferecemos uma experiência completa de leitura</p>
                </div>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BENTO BOX SECTION */}
            <section className="bento-wrapper">
                <div className="bento-section-title">
                    <h2>Explorar Categorias</h2>
                    <p>Navegue por nossas categorias principais</p>
                </div>
                <div className="bento-container-wrapper">
                    <div className="bento-container">
                        <div className="center-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="bento-grid">
                                {bentoItems.map((box) => (
                                    <button
                                        key={box.label}
                                        type="button"
                                        className={`${box.area} bento-card`}
                                        onClick={() => onNavigate(`category:${box.category}`)}
                                    >
                                        <div>
                                            <strong>{box.label}</strong>
                                            <p>{box.subtitle}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;