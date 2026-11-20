import React, { useState } from 'react';

export default function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Enviamos o link de recuperação para o seu e-mail.');
      } else {
        setError(data.message || 'Não foi possível enviar o link de recuperação.');
      }
    } catch (err) {
      console.error('Erro ao solicitar recuperação:', err);
      setError('Erro de conexão com a API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recuperar Senha</h2>
        <p style={styles.subtitle}>
          Informe seu e-mail cadastrado para receber o link de redefinição.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {message && <p style={styles.success}>{message}</p>}
          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar Link'}
          </button>
        </form>

        <p style={styles.switchText}>
          Lembrou a senha?{' '}
          <span onClick={onBackToLogin} style={styles.link}>
            Voltar para o login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#121212' },
  card: { background: '#1e1e1e', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', color: '#fff' },
  title: { marginBottom: '10px', textAlign: 'center', color: '#00d2ff' },
  subtitle: { marginBottom: '20px', textAlign: 'center', fontSize: '14px', color: '#aaa' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '14px', color: '#aaa' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#2a2a2a', color: '#fff', fontSize: '16px' },
  button: { padding: '12px', borderRadius: '6px', border: 'none', background: '#00d2ff', color: '#000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '5px' },
  switchText: { marginTop: '15px', textAlign: 'center', fontSize: '14px', color: '#aaa' },
  link: { color: '#00d2ff', cursor: 'pointer', textDecoration: 'underline' },
  success: { fontSize: '13px', color: '#4ade80', textAlign: 'center', margin: 0 },
  error: { fontSize: '13px', color: '#f87171', textAlign: 'center', margin: 0 },
};

