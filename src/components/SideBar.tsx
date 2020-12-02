import React, { useEffect, useState } from "react";
import { Header, Input, Placeholder, Button, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { FAKE_API as axios } from "../fakeAPI";

import { TagsList } from "./TagsList";
import { tagsLoadSucceed } from "../store/actions/tags";
import { AppState } from "../store";
import { clearFilters, setSearchString } from "../store/actions/filters";
import { initialState } from "../store/reducers/filters";

export function SideBar() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: AppState) => state);
  const [isTagsLoading, setIsTagsLoading] = useState(false);

  useEffect(() => {
    setIsTagsLoading(true);
    axios.get("tags")
      .then(({ data }) => {
        setIsTagsLoading(false);
        dispatch(tagsLoadSucceed(data));
      })
      .catch(error => {
        setIsTagsLoading(false);
        alert(error);
      });
  }, [dispatch]);

  return (
    <>
      <Header as="h2" content="Search" />
      <Input value={filters.search} onChange={(_e, { value }) => dispatch(setSearchString(value))} />
      <Header as="h2" content="Tags" />
      {isTagsLoading ?
        <Placeholder>
          {[...Array(5)].map((_, index) => <Placeholder.Line key={index}/>)}
        </Placeholder> :
        <TagsList />}

      {filters !== initialState && <>
        <Divider />
        <Button
          className="remove-filter-button"
          content="Clear Filters"
          onClick={() => dispatch(clearFilters())}
        />
      </>}
    </>
  );
}
