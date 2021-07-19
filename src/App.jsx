import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button, Text, VStack } from "@chakra-ui/react";
import queryString from "query-string";

import Home from "./Home";
// components
// import { TodoList } from "./TodoList";
// import { createList } from "./Store";

// const newList = async (history) => {
//   const list = await createList(uuidv4());
//   history.push(`/?uuid=${list.uuid}`);
// };

function App() {
  // const history = useHistory();
  // const uuid = queryString.parse(props.location.search).uuid;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
