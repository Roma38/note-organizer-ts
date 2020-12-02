import React, { useState } from "react";
import { Card, Label, Icon, Modal } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { FAKE_API as axios } from "../fakeAPI";

import { Note } from "../store/types/Notes";
import { Tag } from "../store/types/Tags";
import { AppState } from "../store";
import { editNoteSucceed, deleteNoteSucceed } from "../store/actions/notes";
import { EditNoteForm } from "./EditNoteForm";
import { toggleTagInFilters } from "../store/actions/filters";

export function NoteCard({ note }: { note: Note }) {
  const { tags, filters } = useSelector((state: AppState) => state);
  const [isPinLoading, setIsPinLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useDispatch();

  const noteTag = (tagId: string) => {
    const tag = tags.find((tag: Tag) => tag.id === tagId);
    return tag && (
      <Label tag
        key={tag.id}
        onClick={() => dispatch(toggleTagInFilters(tag.id))}
        active={filters.tags.includes(tag.id)}
        content={tag.name}
      />
    );
  };

  const togglePin = () => {
    setIsPinLoading(true);
    axios
      .put("notes", { ...note, isPinned: !note.isPinned })
      .then(() => {
        setIsPinLoading(false);
        dispatch(editNoteSucceed({ ...note, isPinned: !note.isPinned }));
      })
      .catch(error => {
        setIsPinLoading(false);
        alert(error);
        console.log(error);
      });
  }

  const deleteHandle = () => {
    // TODO: implement styled confirm window
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure want to delete this note?")) {
      setIsDeleting(true);
      axios
        .delete("notes", note.id)
        .then(() => {
          setIsDeleting(false);
          dispatch(deleteNoteSucceed(note.id));
        })
        .catch(error => {
          setIsDeleting(false);
          alert(error);
          console.log(error);
        });
    }
  };

  return <>
    <Card fluid className="note-card" link onClick={() => setIsModalOpened(true)}>
      <Card.Content>
        <Card.Description textAlign="left" className="card-content">
          <div className="icon-buttons" onClick={e => e.stopPropagation()}>
            <Icon link
              name='pin'
              loading={isPinLoading}
              color={note.isPinned ? "red" : "grey"}
              title={note.isPinned ? "Unpin" : "Pin"}
              onClick={togglePin}
            />
            <Modal closeIcon
              trigger={<Icon name='edit' title="Edit" link />}
              header='Edit Note'
              content={<EditNoteForm note={note} />}
            />
            <Icon name='delete' title="Delete" link loading={isDeleting} onClick={deleteHandle} />
          </div>
          {note.content}
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="center" extra>
        {note.tags.map(tagId => noteTag(tagId))}
      </Card.Content>
    </Card>
    <Modal closeIcon open={isModalOpened} content={note.content} onClose={() => setIsModalOpened(false)} />
  </>
}
