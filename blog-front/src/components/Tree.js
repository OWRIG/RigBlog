/* eslint-disable */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import api from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tree: {
        width: "63%",
        marginLeft: "20%",
    },
}));

export default function OppositeContentTimeline() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [mylist, setMylist] = useState([
        {
            id: 0,
            time: "",
            title: "",
            typeName: "",
            introduce: "",
            viewCount: "",
        },
    ]);

    const width = document.documentElement.clientWidth;
    console.log(width);

    const a = width < 500 ? true : false;

    console.log(a);
    var compare = function (obj1, obj2) {
        var val1 = obj1.id;
        var val2 = obj2.id;
        if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }
    };

    useEffect(async () => {
        const result = await axios(api.getArticleList);
        setMylist(result.data.data);
    }, []);

    // console.log(a.sort(compare));

    return (
        <React.Fragment>
            <div
                className={classes.tree}
                style={a ? { width: "94%", marginLeft: "3%" } : {}}
            >
                {mylist.sort(compare).map((item, index) => (
                    <Link
                        style={{ textDecoration: "none" }}
                        // target="_blank"
                        to={{
                            pathname: "/rigblog/" + item.id,
                            query: { id: item.id },
                            state: { id: item.id },
                        }}
                    >
                        <motion.div
                            data-isOpen={isOpen}
                            whileHover={{ scale: 0.9 }}
                            transition={{ duration: 1 }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Card data={item} key={index}></Card>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </React.Fragment>
    );
}
