import { AppBar ,IconButton,Stack,Toolbar, Typography, 
    Button , Menu , MenuItem} from "@mui/material";
import { useState } from "react";

export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  return (
    <AppBar>
        <Toolbar position="static">
            <IconButton size="large" edge='start' color="success" aria-label="logo" >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React MUI Demo
            </Typography>
            <Stack direction="row" spacing={2}  >
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Contact</Button>
                <Button color='inherit' on>login</Button>
            </Stack>
            <Menu id = 'login-menu' anchorEl={null} open={open}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
