import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import CardGenerator from './components/CardGenerator';

type Screen = 'loading' | 'landing' | 'generator';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('landing');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (currentScreen === 'loading') {
    return <LoadingScreen />;
  }

  if (currentScreen === 'generator') {
    return <CardGenerator onNavigateToHome={() => setCurrentScreen('landing')} />;
  }

  return <LandingPage onNavigateToGenerator={() => setCurrentScreen('generator')} />;
}

export default App;
