import { useState, useEffect } from 'react';
import { libroService } from '../../services/livroService';
import './../../index.css';
import './../../indexBoxes.css';
import './Home.css';

function Home({ onNavigate = () => {} }) {
    const [livros, setLivros] = useState([]);
    const [featuredBooks, setFeaturedBooks] = useState([]);

    // --- ESTADOS DO FORMULÁRIO DE TESTE (SANDBOX) ---
    const [statusEnvio, setStatusEnvio] = useState('');
    const [formDados, setFormDados] = useState({
        titulo: '',
        autor: '',
        preco: '',
        categoria: '',
        ano: '',
        descricao: '',
        imagem_url: ''
    });

    // Função que captura a digitação do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDados({ ...formDados, [name]: value });
    };

    // Função que envia o registro para o Spring Boot (/api/banco)
    const handleEnviarTeste = async (e) => {
        e.preventDefault();
        setStatusEnvio('Enviando...');
        try {
            // Converte o preço para número antes de enviar
            const dadosParaEnviar = {
                ...formDados,
                preco: parseFloat(formDados.preco) || 0,
                ano: parseInt(formDados.ano) || 2026
            };

            const resultado = await libroService.criarLivro(dadosParaEnviar);
            console.log("Resposta do servidor:", resultado);
            setStatusEnvio('🎉 Sucesso! Registro salvo no banco.usuarios!');
            
            // Limpa o formulário após o sucesso
            setFormDados({
                titulo: '', autor: '', preco: '', categoria: '', ano: '', descricao: '', imagem_url: ''
            });
        } catch (erro) {
            console.error("Erro ao enviar:", erro);
            setStatusEnvio('❌ Erro ao conectar com o backend. Olhe o console.');
        }
    };
    // ------------------------------------------------

    const bentoItems = [
        { label: 'Ficção', subtitle: 'Mundos imaginários', area: 'bento-box1', category: 'Ficção' },
        { label: 'Fantasia', subtitle: 'Aventura e magia', area: 'bento-box2', category: 'Fantasia' },
        { label: 'Filosofia', subtitle: 'Ideias profundas', area: 'bento-box3', category: 'Filosofia' },
        { label: 'História', subtitle: 'Herança cultural', area: 'bento-box4', category: 'História' },
        { label: 'Romance', subtitle: 'Amor e emoção', area: 'bento-box5', category: 'Romance' },
        { label: 'Viagens', subtitle: 'Mundos para explorar', area: 'bento-box6', category: 'Viagens' }
    ];

    return (
        <main className="home-wrapper">
            
            {/* ================= FORMULÁRIO SANDBOX DE TESTE ================= */}
            <section style={{ backgroundColor: '#f4f3ec', padding: '30px', margin: '20px', borderRadius: '12px', border: '2px dashed var(--accent, #aa3bff)' }}>
                <h2 style={{ color: 'var(--text-h)', marginBottom: '10px' }}>🧪 Sandbox: Testar Conexão com o Banco</h2>
                <p style={{ color: 'var(--text)', fontSize: '14px', marginBottom: '20px' }}>
                    Insira dados abaixo. Ao clicar em enviar, o React chamará <code>/api/banco</code> para gravar diretamente na tabela <code>usuarios</code>.
                </p>

                <form onSubmit={handleEnviarTeste} style={{ display: 'grid', gap: '12px', maxWidth: '500px' }}>
                    <input type="text" name="titulo" placeholder="Título / Nome" value={formDados.titulo} onChange={handleInputChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="text" name="autor" placeholder="Autor / Usuário" value={formDados.autor} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="number" step="0.01" name="preco" placeholder="Preço (Ex: 29.90)" value={formDados.preco} onChange={handleInputChange} required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="text" name="categoria" placeholder="Categoria" value={formDados.categoria} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="number" name="ano" placeholder="Ano" value={formDados.ano} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <textarea name="descricao" placeholder="Descrição" value={formDados.descricao} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '60px' }} />
                    <input type="text" name="imagem_url" placeholder="URL da Imagem (Opcional)" value={formDados.imagem_url} onChange={handleInputChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    
                    <button type="submit" style={{ background: '#aa3bff', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Enviar para o Banco
                    </button>
                </form>

                {statusEnvio && <p style={{ marginTop: '15px', fontWeight: 'bold', color: statusEnvio.includes('🎉') ? 'green' : 'orange' }}>{statusEnvio}</p>}
            </section>
            {/* =============================================================== */}

            <section className="hero-full">
                <div className="hero-inner">
                    <h1>Sua Nova Livraria</h1>
                    <p>Conectada ao banco de dados MySQL</p>
                </div>
            </section>

            <section className="bento-wrapper">
                <div className="bento-section-title">
                    <h2>Explorar Categorias</h2>
                </div>
                <div className="bento-container-wrapper">
                    <div className="bento-container">
                        <div className="bento-grid">
                            {bentoItems.map((box) => (
                                <button key={box.label} type="button" className={`${box.area} bento-card`} onClick={() => onNavigate(`category:${box.category}`)}>
                                    <div>
                                        <strong>{box.label}</strong>
                                        <p>{box.subtitle}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;