import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import RestoreIcon from "@material-ui/icons/Restore";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    marginBottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <span>
        <Typography color="textSecondary">简单是美 & &nbsp;</Typography>
      </span>
      <span>

        <Typography color="textSecondary"> rigblog.top</Typography>
      </span>
    </BottomNavigation>
  );
}
