import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';

function App() {
  const {themeName} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={themeName} >
      <Home />
    </ThemeProvider>
  );
}

export default App;
