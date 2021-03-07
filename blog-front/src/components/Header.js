/* eslint-disable */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
// import Drawer from "@material-ui/core/Drawer";
import ava from "../static/avatar.png";
import weibo from "../static/weibo.png";
import qq from "../static/QQ.png";
import bili from "../static/bilibili-line.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import { deepOrange } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GavelIcon from "@material-ui/icons/Gavel";
import Popover from "@material-ui/core/Popover";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
    small: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
        fontSize: ".7rem",
        color: deepOrange[500],
        backgroundColor: "inherit",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: "bold",
        flexGrow: 1,
    },
    img: {
        width: theme.spacing(300),
        height: theme.spacing(300),
    },
}));

export default function Header() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [copy, setcopy] = React.useState(false);

    const id = open ? "simple-popover" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const openGit = () => {
        window.open("https://github.com/OWRIG");
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseW = () => {
        setAnchorEl(null);
        window.open("https://weibo.com/7137731798");
    };
    const handleCloseB = () => {
        setAnchorEl(null);
        window.open("https://space.bilibili.com/471343987");
    };
    const handleCloseO = () => {
        setAnchorEl(null);
        window.open("https://www.owmod.net/user/4");
    };

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <Avatar className={classes.avatar} alt="RIG" src={ava} />
                <Typography variant="h6" className={classes.title}>
                    RigBlog
                </Typography>
                <Tooltip title="Github">
                    <IconButton color="inherit" onClick={openGit}>
                        <GitHubIcon></GitHubIcon>
                    </IconButton>
                </Tooltip>

                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    KNOW Me
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleCloseW}>
                        <Tooltip title="Weibo">
                            <IconButton color="inherit">
                                <Avatar
                                    className={classes.small}
                                    alt="weibo"
                                    src={weibo}
                                ></Avatar>
                            </IconButton>
                        </Tooltip>
                    </MenuItem>

                    <MenuItem onClick={handleCloseB}>
                        <Tooltip title="Bilibili">
                            <IconButton color="inherit">
                                <Avatar
                                    className={classes.small}
                                    alt="bili"
                                    src={bili}
                                ></Avatar>
                            </IconButton>
                        </Tooltip>
                    </MenuItem>

                    <MenuItem onClick={handleCloseO}>
                        <Tooltip title="OWMOD">
                            <IconButton color="inherit">
                                <GavelIcon></GavelIcon>
                            </IconButton>
                        </Tooltip>
                    </MenuItem>
                    
                    <MenuItem>
                        <CopyToClipboard
                            text={"a14973032@126.com"}
                            onCopy={() => setcopy(true)}
                        >
                            <Tooltip title="点击复制邮箱 a14973032@126.com">
                                <IconButton color="inherit">
                                    <MailOutlineIcon></MailOutlineIcon>
                                </IconButton>
                            </Tooltip>
                        </CopyToClipboard>
                    </MenuItem>

                    <MenuItem>
                        <CopyToClipboard
                            text={"919318445"}
                            onCopy={() => setcopy(true)}
                        >
                            <Tooltip title="点击复制 QQ: 919318445">
                                <IconButton color="inherit">
                                    <Avatar
                                        className={classes.small}
                                        alt="qq"
                                        src={qq}
                                    ></Avatar>
                                </IconButton>
                            </Tooltip>
                        </CopyToClipboard>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
