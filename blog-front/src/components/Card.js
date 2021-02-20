import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import myContext from "./createContext";

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    marginLeft: 0,
    borderRadius: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const item = useContext(myContext);
  // console.log(item);
  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   // <IconButton
        //   //   className={clsx(classes.expand, {
        //   //     [classes.expandOpen]: expanded,
        //   //   })}
        //   //   onClick={handleExpandClick}
        //   //   aria-expanded={expanded}
        //   //   aria-label="show more"
        //   // >
        //   //   <ExpandMoreIcon />
        //   // </IconButton>
        //   // <IconButton aria-label="settings">
        //   //   <MoreVertIcon />
        //   // </IconButton>
        // }
        title={item.title}
        subheader={item.typeName}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.introduce}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
