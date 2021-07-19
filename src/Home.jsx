import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Text, VStack } from "@chakra-ui/react";
import queryString from "query-string";
import { TodoList } from "./TodoList";
import { createList } from "./Store";

const newList = async (history) => {
  const list = await createList(uuidv4());
  history.push(`/?uuid=${list.uuid}`);
};

function Home(props) {
  const history = useHistory();
  const uuid = queryString.parse(props.location.search).uuid;

  if (uuid) return TodoList(uuid);
  return (
    <VStack>
      <Text>Create new Task</Text>
      <Button variant="outline" onClick={() => newList(history)}>
        Go
      </Button>
    </VStack>
  );
}

export default Home;
