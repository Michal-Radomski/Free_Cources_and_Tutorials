import React from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Products", "Services", "ABoutUs", "ContactUs"];

const DrawerComp = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color="action" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;