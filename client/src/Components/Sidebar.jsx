import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
