import React from "react";
import page from "../static/page.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: "6%",
            width: "18%",
            height: "auto",
            borderRadius: "0.5rem",
            overflow: "hidden",
        },
    },
}));
export default function ImgPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Paper elevation={0}>
                    <img
                        alt="123"
                        style={{ width: "100%", height: "100%" }}
                        src={page}
                    ></img>
                </Paper>
            </div>
        </React.Fragment>
    );
}
