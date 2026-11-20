import React, { useState } from 'react';

export default function Register({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastrando:", { name, email, password });
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Gestor Facíl - Cadastro</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nome</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={styles.input} 
            required 
          />
        </div>
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
        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirmar Senha</label>
          <input 
            type="password" 
            value={passwordConfirmation} 
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
            style={styles.input} 
            required 
          />
        </div>

        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>
      <p style={styles.switchText}>
        Já tem uma conta?{' '}
        <span onClick={onSwitchToLogin} style={styles.link}>
          Faça login aqui
        </span>
      </p>
    </div>
  );
}

const styles = {
  card: { background: '#1e1e1e', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', color: '#fff' },
  title: { marginBottom: '20px', textAlign: 'center', color: '#00d2ff' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  label: { fontSize: '14px', color: '#aaa' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#2a2a2a', color: '#fff', fontSize: '16px' },
  button: { padding: '12px', borderRadius: '6px', border: 'none', background: '#00d2ff', color: '#000', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' },
  switchText: { marginTop: '15px', textAlign: 'center', fontSize: '14px', color: '#aaa' },
  link: { color: '#00d2ff', cursor: 'pointer', textDecoration: 'underline' }
};

