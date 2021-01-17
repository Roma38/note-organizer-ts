import React, { useEffect, useState } from 'react';
import { Container, Dimmer, Loader } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import './App.css';
import { FAKE_API as axios } from "./fakeAPI";

import { HeaderComponent as Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { notesLoadSucceed } from "./store/actions/notes";

function App() {
  const dispatch = useDispatch();
  const [isNotesLoading, setIsNotesLoading] = useState(false);

  useEffect(() => {
    setIsNotesLoading(true);
    axios.get("notes")
      .then(({ data }) => {
        setIsNotesLoading(false);
        dispatch(notesLoadSucceed(data));
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
          <HomePage/>
        </>}

    </Container>
  );
}

export default App;
