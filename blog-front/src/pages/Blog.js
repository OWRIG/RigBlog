/* eslint-disable */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import api from "../config/api";
import axios from "axios";
import "fontsource-roboto";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Chip from "@material-ui/core/Chip";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import DnsIcon from "@material-ui/icons/Dns";
import MarkNav from "markdown-navbar";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import "markdown-navbar/dist/navbar.css";
import Hidden from "@material-ui/core/Hidden";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Footer from "../components/Footer";

const topClick = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            marginLeft: "10%",
            marginTop: "1%",
            width: "65%",
            height: "auto",
            borderRadius: "1rem",
            overflow: " hidden",
        },
    },
    header: {
        marginTop: "1rem",
        width: "2rem",
        height: "2rem",
    },
    bread: {
        fontSize: "1rem",
    },
    title: {
        margin: "1rem",
    },
    breadtitle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    info: {
        marginLeft: "1rem",
    },
    type: {
        marginLeft: ".5rem",
    },
    hot: {
        marginLeft: ".5rem",
    },
    article: {
        width: "85%",
        marginTop: "3%",
        marginLeft: "7.5%",
        marginRight: "7.5%",
        overflow: "auto",
        fontSize: "1rem",
        overflow: " hidden",
    },
    nav: {
        width: "15%",
        display: "flex",
        height: "10%",
        marginTop: "5%",
        marginLeft: "3%",
        paddingTop: "2%",
        paddingBottom: "2%",
    },
    margin: {
        position: "fixed",
        top: "80%",
        right: "1.5%",
        width: theme.spacing(5),
        height: theme.spacing(5),
        borderRadius: theme.spacing(2.5),
        margin: theme.spacing(1),
    },
}));

export default function SimplePaper(props) {
    const classes = useStyles();
    const [article, setArticle] = useState([
        {
            id: 0,
            time: "",
            title: "",
            typeName: "",
            content: "",
            viewCount: "",
        },
    ]);

    useEffect(async () => {
        let blogId = props.match.params.id;
        const result = await axios(api.getArticle + blogId);
        setArticle(result.data.data);
        // console.log(article);
    }, []);

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        tables: true,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
    });

    // const a = article[0].content;
    // const markedblog = marked(a);

    return (
        <div>
            <div className={classes.root}>
                <span>
                    <AssignmentOutlinedIcon className={classes.header} />
                </span>
                <span>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        className={classes.bread}
                    >
                        <Link href="/" color="inherit">
                            Home
                        </Link>
                        <Typography
                            className={classes.breadtitle}
                            color="textPrimary"
                        >
                            {article[0].title}
                        </Typography>
                    </Breadcrumbs>
                </span>
                <Paper elevation={3}>
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.title}
                    >
                        {article[0].title}
                    </Typography>
                    <Chip
                        clickable
                        className={classes.info}
                        icon={<AccessTimeIcon />}
                        label={article[0].time.slice(0, 10)}
                        variant="outlined"
                    />
                    <Chip
                        clickable
                        className={classes.type}
                        icon={
                            <DnsIcon
                                style={{
                                    width: "1.3rem",
                                    height: "1.3rem",
                                }}
                            />
                        }
                        label={article[0].typeName}
                        variant="outlined"
                    />
                    <Chip
                        clickable
                        className={classes.hot}
                        icon={
                            <WhatshotIcon
                                style={{
                                    width: "1.3rem",
                                    height: "1.3rem",
                                }}
                            />
                        }
                        label={article[0].viewCount}
                        variant="outlined"
                        color="#ff9e80"
                    />
                    <div
                        className={classes.article}
                        dangerouslySetInnerHTML={{
                            __html: marked(article[0].content),
                        }}
                    ></div>
                </Paper>
                <Hidden smDown>
                    <Paper elevation={3} className={classes.nav}>
                        <MarkNav
                            className="article-menu"
                            source={article[0].content}
                            headingTopOffset={80}
                            ordered={false}
                        />
                    </Paper>
                </Hidden>
                <Link onClick={topClick}>
                    <Fab
                        size="medium"
                        color="inherit"
                        aria-label="top"
                        className={classes.margin}
                    >
                        <NavigationIcon />
                    </Fab>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
}
