import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import { FAKE_API as axios } from "../fakeAPI";

import { AppState } from "../store";
import { editNoteSucceed } from "../store/actions/notes";
import { Note } from "../store/types/Notes";
import { Tag } from "../store/types/Tags";

export function EditNoteForm({ note }: { note: Note }) {
  const [content, setContent] = useState(note.content);
  const [noteTags, setNoteTags] = useState(note.tags);
  const [isLoading, setIsLoading] = useState(false);
  const tags = useSelector((state: AppState) => state.tags);
  const dispatch = useDispatch();

  const submitHandler = () => {
    setIsLoading(true);
    axios
      .put("notes", { ...note, tags: noteTags })
      .then(() => {
        setIsLoading(false);
        dispatch(editNoteSucceed({ ...note, content, tags: noteTags }));
      })
      .catch(error => {
        setIsLoading(false);
        alert(error);
        console.log(error);
      });
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.TextArea
        className="card-input"
        value={content}
        placeholder="Text"
        onChange={(_e, data) => setContent(String(data.value))}
      />
      <Form.Dropdown
        className="card-input"
        placeholder="Tags"
        fluid
        multiple
        selection
        options={tags.map((tag: Tag) => ({
          key: tag.id,
          text: tag.name,
          value: tag.id,
        }))}
        value={noteTags}
        onChange={(_e, data: any) => setNoteTags(data.value)} // TODO: get rid of any
      />
      <Form.Button loading={isLoading}>Submit</Form.Button>
    </Form>
  );
}
