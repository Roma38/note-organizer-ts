import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Input, Popup, Form } from "semantic-ui-react";
import { v4 } from "uuid";

import { AppState } from "../store";
import { toggleTagInFilters } from "../store/actions/filters";
import { postTag } from "../store/actions/tags";

export function TagsList() {
  const [tagName, setTagName] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { tags, filters } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postTag({ id: v4(), name: tagName }));
    setTagName("");
    setIsPopupOpen(false);
  };

  return <>
    <List link>
      {tags.map(tag => (
        <List.Item
          active={filters.tags.includes(tag.id)}
          key={tag.id}
          onClick={() => dispatch(toggleTagInFilters(tag.id))}
        >
          {tag.name}
        </List.Item>
      ))}
    </List>
    <Popup
      on="click"
      trigger={<Button basic content="Add New Tag" />}
      open={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
      onOpen={() => setIsPopupOpen(true)}
    >
      <Form className="category-form" onSubmit={submitHandler}>
        <Input
          value={tagName}
          placeholder="Tag name"
          onChange={(e, data) => setTagName(data.value)}
        />
        <div className="button-group">
          <Button
            compact
            type="submit"
            basic
            content="Add"
            disabled={!tagName}
          />
          <Button
            compact
            basic
            content="Cancel"
            onClick={() => setIsPopupOpen(false)}
          />
        </div>
      </Form>
    </Popup>
  </>;
}
