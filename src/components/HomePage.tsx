import React from "react";
import { useSelector } from "react-redux";
import { Card, Grid } from "semantic-ui-react";

import { SideBar } from "./SideBar";
import { NoteCard } from "./NoteCard";
import { AppState } from "../store";
import { Note } from "../store/types/Notes";
import { AddNoteCard } from "./AddNoteCard";
import { Filter } from "../store/reducers/filters";

const filterNotes = (notes: Note[], filters: Filter): Note[] => {
  return notes.filter(note => {
    const isMatchSearch = note.content.includes(filters.search);
    
    // note match every filter tag
    // const isIncludesTags = filters.tags.every(tag => note.tags.includes(tag));

    // note match any filter tag
    const isIncludesTags = filters.tags.some(tag => note.tags.includes(tag));

    return isMatchSearch && (isIncludesTags || !filters.tags.length)
  })
}

const sortPinned = (notes: Note[]) => notes.sort((x, y) => (x.isPinned === y.isPinned) ? 0 : x.isPinned ? -1 : 1);

export function HomePage() {
  const { notes, filters } = useSelector((state: AppState) => state);

  return <Grid divided>
    <Grid.Row className="grid-row">
      <Grid.Column as="aside" width={4}>
        <SideBar />
      </Grid.Column>
      <Grid.Column as="main" width={12}>
        <Card.Group>
          <AddNoteCard />
          {sortPinned(filterNotes(notes, filters))
            .map((note: Note) => <NoteCard key={note.id} note={note} />)}
        </Card.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
}
