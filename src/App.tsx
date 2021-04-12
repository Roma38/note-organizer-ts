import React, { useEffect, useState } from 'react';
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import './App.css';
import { FAKE_API as axios } from "./fakeAPI";

import { HeaderComponent as Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { notesLoadSucceed } from "./store/actions/notes";
import { initNotes, initTags } from "./constants";

function App() {
  const dispatch = useDispatch();
  const [isNotesLoading, setIsNotesLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('tags') && !localStorage.getItem('notes')) {
      localStorage.setItem('tags', JSON.stringify(initTags));
      localStorage.setItem('notes', JSON.stringify(initNotes));
      console.log("Init data")
    }
    setIsNotesLoading(true);
    axios.get("notes")
      .then(({ data }) => {
        setIsNotesLoading(false);
        dispatch(notesLoadSucceed(data || []));
      })
      .catch(error => {
        setIsNotesLoading(false);
        alert(error);
      });
  }, [dispatch]);

  return (
    <Container>
      {isNotesLoading ?
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer> :
        <>
          <Header />
          <HomePage />
        </>}

    </Container>
  );
}

export default App;
