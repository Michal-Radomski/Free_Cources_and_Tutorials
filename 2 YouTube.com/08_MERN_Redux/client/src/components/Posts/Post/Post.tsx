import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Tooltip } from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";
import { AppDispatch, IPost } from "../../../Types";
import { useAppDispatch } from "../../../redux/hooks";
import { deletePost, likePost } from "../../../redux/actions/posts";

const Post = ({
  post,
  setCurrentId,
}: {
  post: IPost;
  setCurrentId: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element => {
  const classes = useStyles();
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Tooltip title="Select this Memory">
            <Button style={{ color: "white" }} size="medium" onClick={() => setCurrentId(post._id)}>
              <MoreHorizIcon fontSize="large" />
            </Button>
          </Tooltip>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {(post.tags as string[]).map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize="small" /> Like &nbsp; {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Post;
