/* eslint-disable */
import React, { useEffect, useState } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Card from "./Card";
import api from "../config/api";
import myContext from "./createContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OppositeContentTimeline() {
  const [mylist, setMylist] = useState([
    { id: 0, time: "", title: "", typeName: "", introduce: "", viewCount: "" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
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
    console.log(result);
    setMylist(result.data.data);
  }, []);

  // console.log(a.sort(compare));

  return (
    <React.Fragment>
      <Timeline align="alternate">
        {mylist.sort(compare).map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <motion.div
                layout
                data-isOpen={isOpen}
                animate={{ scale: [1.2, 1] }}
                transition={{ duration: 1.6 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Typography color="textSecondary">
                  {item.time.slice(0, 10)}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Typography>
                <motion.div
                  data-isOpen={isOpen}
                  whileHover={{ scale: 0.9 }}
                  transition={{ duration: 1 }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    // target="_blank" 
                    to={{
                      pathname: "/rigblog/" + item.id,
                      query: { id: item.id },
                      state: { id: item.id },
                    }}
                  >
                    <myContext.Provider value={item}>
                      <Card></Card>
                    </myContext.Provider>
                  </Link>
                </motion.div>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}
