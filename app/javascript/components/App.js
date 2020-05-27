import React from "react";
import { Route, Switch } from "react-router-dom";
import Books from "./Books/Books";
import Book from "./Book/Book";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:slug" component={Book} />
    </Switch>
  );
};

export default App;
