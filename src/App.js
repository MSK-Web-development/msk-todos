import React from "react";

import { Container, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import TodoAdder from "./components/todo-adder";
import TodosContainer from "./components/todos-container";

const useStyles = makeStyles((theme) => ({
  root: {},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper: {
    textAlign: "center",
    width: "100%",
  },
}));

export default function MskTodosApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img
              alt="MSK Todos logo"
              style={{ width: "50px" }}
              src="logo.png"
            />
          </IconButton>
          <Typography variant="h5">Todos</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          <TodoAdder />
          <TodosContainer />
        </Paper>
      </Container>
    </div>
  );
}
