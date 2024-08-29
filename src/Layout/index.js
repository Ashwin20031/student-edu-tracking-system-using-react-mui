import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CountCard from '../components/CountCard';
import "./index.css"
import MenuCard from '../components/MenuCard';


const drawerWidth = 240;

export default function Layout() {
    
    let studentCard=[
        {
            icon:"person",
            title:"Regular Students",
            color:"purple"

        },
        {
            icon:"person_check",
            title:"Remedial Students",
            color:"red"

        },
        {
            icon:"supervisor_account",
            title:"In Paid Club",
            color:"black"

        },
      
    ]
    
    const menuCard=[
        {
            icon:"person",
            title:"Regular Enrollment",

        },
        {
            icon:"book",
            title:"Remedial Enrollment",


        },
        {
            icon:"boy",
            title:"Club Management",


        },
        {
            icon:"local_library",
            title:"Classroom Management",
       
        },
        {
            icon:"message",
            title:"SMS/EMAIL",
       
        },
        {
            icon:"draft",
            title:"Attachment",
       
        },
        {
            icon:"apartment",
            title:"Client",
       
        }
    ]


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
            
                style={{backgroundColor:"black"}}
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Student Management
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer

                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />

                <img src="https://hicet.ac.in/images/logo/hicet-header--logo-Naac.jpg" alt='logo' style={{ marginBottom: "1rem" }} />
                <br />
                <Divider />
                <List >
                    {[
                    {name:"Student Management",icon:"group"},
                    {name:"Financial Management",icon:"Inbox"},
                    {name:"Quality Center",icon:"Percent"},
                    {name:"Request Delivery",icon:"Dashboard"},
                    {name:"Attachment",icon:"Draft"}
                ].map((text, index) => (
                        <ListItem key={text.name} disablePadding >
                            <ListItemButton style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <ListItemIcon style={{ display: "flex", justifyContent: "center" }}>
                                    <span class="material-symbols-outlined" style={{fontSize:"2.5rem"}}>
                                        {text.icon}
                                    </span>
                                </ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{  bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <div className='card-container'>
                {studentCard.map((card,ind)=>{
                    return <CountCard  {...card} key={ind}/>
                })}
                </div>

                <br/>
                <br/>
                <h3 style={{textAlign:"center",fontSize:"1.5rem"}}>Menu</h3>
                <div className='card-container'>
                {menuCard.map((card,ind)=>{
                    return <MenuCard  {...card} key={ind}/>
                })}

                </div>
                
            </Box>
        </Box>
    );
}
