import { useState, useEffect } from 'react';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {});

  return (
    <AnimatePresence>
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
    </AnimatePresence>
  );
}

export default App;
