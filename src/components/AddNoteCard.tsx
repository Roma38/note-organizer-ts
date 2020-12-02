import React, { useState } from "react";
import { Button, Card, TextArea, Form, Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";

import { postNote } from "../store/actions/notes";
import { AppState } from "../store";
import { Tag } from "../store/types/Tags";

type Tags = string[];

export function AddNoteCard() {
  const [content, setContent] = useState("");
  const [noteTags, setNoteTags] = useState<Tags>([]);
  const tags = useSelector((state: AppState) => state.tags);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      postNote({
        id: v4(),
        content: content,
        tags: noteTags,
        isPinned: false
      })
    );
    setContent("");
    setNoteTags([]);
  };

  return (
    <Card as={Form} onSubmit={submitHandler}>
      <Card.Content>
        <Card.Description>
          <TextArea
            className="card-input"
            value={content}
            placeholder="Text"
            onChange={(_e, data) => setContent(String(data.value))}
          />
          <Dropdown
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
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          type="submit"
          disabled={!Boolean(content)}
          content="Add Note"
        />
      </Card.Content>
    </Card>
  );
}
