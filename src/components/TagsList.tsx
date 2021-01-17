import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Input, Popup, Form } from "semantic-ui-react";
import { v4 } from "uuid";
import { FAKE_API as axios } from "../fakeAPI";

import { AppState } from "../store";
import { toggleTagInFilters } from "../store/actions/filters";
import { addTagSucceed } from "../store/actions/tags";
import { Tag } from "../store/types/Tags";

export function TagsList() {
  const [tagName, setTagName] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { tags, filters } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTag = { id: v4(), name: tagName };
    setIsLoading(true);
    axios
      .post("tags", newTag)
      .then(() => {
        setTagName("");
        setIsPopupOpen(false);
        dispatch(addTagSucceed(newTag));
      })
      .catch((error: string) => alert(error))
      .finally(() => setIsLoading(false));
  };

  return <>
    <List link>
      {tags.map((tag : Tag) => (
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
            loading={isLoading}
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
