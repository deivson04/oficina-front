import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  const [screen, setScreen] = useState('login');

  return (
    <main style={styles.wrapper}>
      {screen === 'login' && (
        <Login
          onSwitchToRegister={() => setScreen('register')}
          onSwitchToForgotPassword={() => setScreen('forgot-password')}
        />
      )}

      {screen === 'register' && (
        <Register onSwitchToLogin={() => setScreen('login')} />
      )}

      {screen === 'forgot-password' && (
        <ForgotPassword onBackToLogin={() => setScreen('login')} />
      )}
    </main>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    boxSizing: 'border-box',
  },
};





