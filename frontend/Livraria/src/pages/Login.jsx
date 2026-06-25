import { useState } from 'react'
import '../index.css'

export default function Login({ user = null, onLogin = () => {}, onNavigate = () => {} }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) return
    const name = email.split('@')[0] || email
    onLogin({ name, email })
    setEmail('')
    setPassword('')
  }

  if (user) {
    return (
      <main className="auth-main">
        <section className="page-hero">
          <h1>Bem-vindo, {user.name}!</h1>
          <p>Você já está logado. Continue explorando nossa livraria.</p>
        </section>
        <div className="auth-action-row">
          <button className="btn btn-primary" onClick={() => onNavigate('home')}>Ir para Home</button>
        </div>
      </main>
    )
  }

  return (
    <main className="auth-main">
      <section className="page-hero">
        <h1>{mode === 'login' ? 'Login' : 'Criar Conta'}</h1>
        <p>{mode === 'login' ? 'Acesse sua conta para continuar comprando.' : 'Cadastre-se para salvar seus livros e endereços.'}</p>
      </section>

      <section className="auth-form-card">
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </label>

          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="btn btn-primary">
            {mode === 'login' ? 'Entrar' : 'Registrar'}
          </button>
        </form>

        <div className="auth-toggle">
          {mode === 'login' ? (
            <p>
              Não tem conta?{' '}
              <button type="button" className="link-button" onClick={() => setMode('register')}>
                Criar agora
              </button>
            </p>
          ) : (
            <p>
              Já tem conta?{' '}
              <button type="button" className="link-button" onClick={() => setMode('login')}>
                Entrar
              </button>
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
