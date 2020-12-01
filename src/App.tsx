import React, { useEffect } from 'react';
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import './App.css';

import { HeaderComponent as Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NotePage } from "./pages/NotePage";
import { getNotes } from "./store/actions/notes";
import { getTags } from './store/actions/tags';
// import { getTags } from "./store/actions/tags";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getNotes());
    dispatch(getTags());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/note/:id" component={NotePage} />
    </Container>
  );
}

export default App;
