import React, { useState } from 'react';

export default function Login({ onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logando com:", { email, password });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Gestor Facíl - Login</h2>
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
          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={styles.input} 
              required 
            />
          </div>
          <button type="submit" style={styles.button}>Entrar</button>
        </form>
        <p style={styles.switchText}>
          Não tem uma conta?{' '}
          <span onClick={onSwitchToRegister} style={styles.link}>
            Cadastre-se aqui
          </span>
        </p>
        <p style={styles.switchText}>
          Esqueceu a Senha?{' '}
          <span onClick={onSwitchToForgotPassword} style={styles.li}>
           Clique aqui
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#121212', color: '#fff' },
  card: { background: '#1e1e1e', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' },
  title: { marginBottom: '20px', textAlign: 'center', color: '#00d2ff' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '14px', color: '#aaa' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#2a2a2a', color: '#fff', fontSize: '16px' },
  button: { padding: '12px', borderRadius: '6px', border: 'none', background: '#00d2ff', color: '#000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' },
  switchText: { marginTop: '15px', textAlign: 'center', fontSize: '14px', color: '#aaa' },
  link: { color: '#00d2ff', cursor: 'pointer', textDecoration: 'underline' }
};
