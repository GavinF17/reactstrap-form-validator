import React, {useEffect, useState} from 'react';
import "./assets/reactivestrap.scss"
import {Routes} from "./routes/Routes";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "./theme";
import {Header} from "./components/Header";

const App = () => {
  const [dark, setDark] = useState(localStorage.getItem('darkTheme') === 'true');

  const toggleTheme = () => {
    const newVal = !dark;
    setDark(newVal);
    localStorage.setItem('darkTheme', String(newVal));
  };

  return (
    <>
      <Header dark={dark} toggleTheme={toggleTheme}/>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

export default App;
