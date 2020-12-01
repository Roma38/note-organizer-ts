import React from "react";
import { Header } from "semantic-ui-react";

import { TagsList } from "./TagsList";

export function SideBar() {
  return (
    <>
      <Header as="h2" content="Tags" />
      <TagsList />
    </>
  );
}
