import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        borderRadius: "1.5rem",
        marginTop: "1.6%",
        marginBottom: "1.6%",
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();

    const item = props.data;


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
                subheader={item.time.slice(0, 10) + "  " + item.typeName}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.introduce}
                </Typography>
            </CardContent>
        </Card>
    );
}
