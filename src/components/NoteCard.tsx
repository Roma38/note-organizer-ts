import React from "react";
import { Card, Label, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { setFilter } from "../store/actions/notesFilter";
import { Note } from "../store/types/Notes";
import { Tag } from "../store/types/Tags";
import { AppState } from "../store";
// import { deleteNote } from "../store/actions/notes";

export function NoteCard({ note }: { note: Note }) {
  const tags = useSelector((state: AppState) => state.tags);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const { note } = props;

  const renderLabel = (tagId: string) => {
    const tag = tags.find((tag: Tag) => tag.id === tagId);
    return tag && (
      <Label
        className="tag-tag"
        key={tag.id}
        as="a"
        // onClick={() => dispatch(setFilter({ type: "tags", id: tag.id }))}
        // active={filter.type === "tags" && tag.id === filter.id}
        // color={note.color}
        content={tag.name}
        tag
      />
    );
  };

  // const deleteHandle = (event, id) => {
  //   event.preventDefault();
  //   // eslint-disable-next-line no-restricted-globals
  //   if (confirm("Are you sure want to delete this card?"))
  //     dispatch(deleteNote(id));
  // };

  return (
    <Card fluid className="note-card">
      <Card.Content
        // as={Link}
        // to={"/note/" + note.id}
        // title="Note details"
        className="card-content"
      >
        <Card.Description textAlign="left">
          {note.content}
          <Icon link name='pin' color={note.isPinned ? "red" : "grey"} /* onClick={} */ />
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="center" extra>
        {note.tags.length > 0 && (
          <div>{note.tags.map(tagId => renderLabel(tagId))}</div>
        )}
      </Card.Content>
    </Card>
  );
}
