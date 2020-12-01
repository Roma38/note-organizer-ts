import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Grid } from "semantic-ui-react";

import { SideBar } from "../components/SideBar";
// import { AddNoteCard } from "./AddNoteCard";
import { NoteCard } from "../components/NoteCard";
import { AppState } from "../store";
import { Note } from "../store/types/Notes";
import { AddNoteCard } from "../components/AddNoteCard";

// import { setFilter } from "../redux/actions/notesFilter";
// import { filterNotes } from "../utils";

export function HomePage() {
  const notes = useSelector((state: AppState) => state.notes);
  // const filteredNotes = filterNotes(notes, filter, categories);
  // const dispatch = useDispatch();

  // const removeFilterHandler = () => dispatch(setFilter({}));

  return (
    <Grid divided>
      <Grid.Row className="grid-row">
        <Grid.Column as="aside" width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column as="main" width={12}>
          {/* {filter.type && (
            <Button
              className="remove-filter-button"
              content="Remove filter"
              onClick={removeFilterHandler}
            />
          )} */}
          <Card.Group>
            <AddNoteCard />
            {notes.items.map((note: Note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
