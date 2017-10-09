import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './themes/theme';
import Header from './components/Header';
import Section from './components/Section';
import MainContent from './containers/MainContent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>
          <h1>Hola Header</h1>
        </Header>
        <MainContent>
          <Section>
            <p>section 1</p>
          </Section>
        </MainContent>
      </div>
    </ThemeProvider>
  );
}

export default App;
