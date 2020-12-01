import React, { useState } from "react";
import {
  Header,
  Container,
  Segment,
  Divider,
  Icon,
  Label,
  Button,
  Input,
  Dropdown,
  TextArea,
  Form
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppState } from "../store";

// import { editNote } from "../store/actions/notes";

export function NotePage() {
  const { id }: { id: string } = useParams();
  const note = useSelector((state: AppState) =>
    state.notes.find(note => note.id === id)
  );
  const tags = useSelector((state: AppState) => state.tags);
  const [isEditing, setIsEditing] = useState(false);
  // const [content, setText] = useState(note.content);
  // const [noteTags, setNoteTags] = useState(note.tags);
  // const dispatch = useDispatch();

  const submitHandler = () => {
    // dispatch(editNote({ id, content, tags }));
    setIsEditing(false);
  };

  return (
    <Container text textAlign="center">
      {/* {note && <Segment
        as={Form}
        onSubmit={submitHandler}
        textAlign="center"
      >
        {isEditing ? (
          <TextArea
            value={content}
            placeholder="Text"
            onChange={(e, data) => setText(String(data.value))}
          />
        ) : (
            <p>{note.content}</p>
          )}
        {(isEditing || note.tags.length > 0) && (
          <Header as="h4" textAlign="center" content="Tags:" />
        )}
        {isEditing ? (
          <Dropdown
            placeholder="Tags"
            multiple
            selection
            options={tags.map(tag => ({
              key: tag.id,
              text: tag.name,
              value: tag.id
            }))}
            value={tags}
            onChange={(e, data) => setNoteTags(data.value)}
          />
        ) : (
            note.tags.length > 0 &&
            note.tags.map(tagId => (
              <Label
                key={tagId}
                content={tags.find(tag => tag.id === tagId).name}
                tag
              />
            ))
          )}
        <Divider />
        {isEditing && (
          <Button type="submit" color={note.color} basic content="Save" />
        )}
        <Button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          basic={!isEditing}
          content={isEditing ? "Cancel" : "Edit note"}
        />
      </Segment>} */}
      <Button
        as={Link}
        to="/"
        icon="arrow left"
        content="Back to Home page"
      />
    </Container>
  );
}
