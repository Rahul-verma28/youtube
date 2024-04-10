import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { Link } from 'react-router-dom';
import { SiYoutubeshorts } from "react-icons/si";


const SideBar = () => {
  return (
    <div className='pt-20 w-[80px] max-h-[100%] bg-white sticky start-0'>
      <List sx={{ backgroundColor: "black", color: "white" }}>
        {[
          { list: "Home", icon: <HomeIcon />, link: "/" },
          { list: "Sorts", icon: <SiYoutubeshorts />, link: "/" },
          { list: "Subscription", icon: <SubscriptionsOutlinedIcon />, link: "/" },
        ].map((icon) => (
          <Link to={icon.link} key={icon.list}>
            <ListItem
            disablePadding
            sx={{ display: "block", bgcolor: "black" , color:"white"}}
            
            className='hover:bg-gray-800 rounded-xl py-2'
          >
            <ListItemButton
              sx={{
                minHeight: 48,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mx:"auto",
                  color: "white",
                }}
                className=' text-white'
              >
                {icon.icon}
              </ListItemIcon>
            </ListItemButton>
              <p className='text-center text-xs'>{icon.list}</p>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default SideBar
