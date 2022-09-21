import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/memories.png";
import { useAppDispatch } from "./redux/hooks";
import "./App.scss";
import useStyles from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./redux/actions/posts";
import { AppDispatch } from "./Types";

function App(): JSX.Element {
  const classes = useStyles();
  // console.log({ classes });
  const dispatch: AppDispatch = useAppDispatch();

  const [currentId, setCurrentId] = React.useState<string>("");
  // console.log({ currentId });

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
              className={classes.mainContainer}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </React.Fragment>
  );
}

export default App;
