import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SettingIcon from "@mui/icons-material/Settings";
import { useState } from "react";

export default function MuiBottomNavigation() {
    const [value, setValue] = useState(0);
  return (
    <BottomNavigation style={{ width: "100%" , position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);}}
        showLabels
        >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingIcon />} />
    </BottomNavigation>
  )
}
