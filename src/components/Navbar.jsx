import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SearchButton from "./SearchButton";
import Avatar from "@mui/material/Avatar";
import { SiYoutubeshorts } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { RiLiveLine } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { FaShopify } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";


const drawerWidth = 220;

const Navbar = ({ setsearchedText }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const drawerList = (
    <Box
      sx={{
        width: drawerWidth,
        height: "auto",
        backgroundColor: "black",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="flex items-center bg-black text-white py-4 ps-6 fixed z-10 w-full">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="ps-2 bg-black"
            onClick={scrollToTop()}
          >
            <YouTubeIcon sx={{ color: red[600], fontSize: 30 }} onClick={scrollToTop()}/>YouTube
          </Typography>
        </Link>
      </div>

      <List sx={{ backgroundColor: "black", mt: 8, color: "white" }}>
        {[
          { list: "Home", icon: <HomeIcon />, link: "/" },
          { list: "Sorts", icon: <SiYoutubeshorts />, link: "/" },
          {
            list: "Subscription",
            icon: <SubscriptionsOutlinedIcon />,
            link: "/",
          },
        ].map((text) => (
          <Link to={text.link} key={text.list}>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              className={` bg-black rounded-2xl hover:bg-gray-900`}
            >
              <ListItemButton sx={{ minHeight: 48 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.list} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <hr />
      <h2
        component="div"
        className="ps-5 pt-4 text-xl font-semibold bg-black text-white"
      >
        Explore
      </h2>
      <List sx={{ backgroundColor: "black", color: "white" }}>
        {[
          { list: "Trending", icon: <HiTrendingUp /> },
          { list: "Shoping", icon: <GiShoppingCart /> },
          { list: "Music", icon: <IoIosMusicalNotes /> },
          { list: "Films", icon: <PiFilmSlateBold /> },
          { list: "Live", icon: <RiLiveLine /> },
          { list: "Gaming", icon: <IoLogoGameControllerB /> },
          { list: "News", icon: <LuNewspaper /> },
          { list: "Sport", icon: <TfiCup /> },
          { list: "Courses", icon: <MdAccountBalance /> },
          { list: "Fashion & Beauty", icon: <FaShopify /> },
          { list: "Podcast", icon: <MdOutlinePodcasts /> },
        ].map((text) => (
          <Link
            to="/SearchDetails"
            key={text.list}
            onClick={() => {
              setsearchedText(text.list);
              scrollToTop();
            }}
          >
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              className={` bg-black rounded-2xl hover:bg-gray-900`}
            >
              <ListItemButton sx={{ minHeight: 48 }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.list} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <hr />
      <div className="p-5 bg-black text-white ">
        <p>© 2024 Rahul Verma</p>
      </div>
    </Box>
  );

  return (
    <div className="bg-black">
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "black", width: "100%", py: 1 }}
      >
        <Toolbar sx={{ backgroundColor: "black" }}>
          <div className="flex items-center justify-between w-full bg-black">
            <div className="flex items-center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  className="md:ps-2 pr-2 bg-black"
                  onClick={scrollToTop()}
                >
                  <YouTubeIcon sx={{ color: red[600], fontSize: 30 }} onClick={scrollToTop()}/>
                  YouTube
                </Typography>
              </Link>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <SearchButton setsearchedText={setsearchedText} />
              <span>
                <Link to='/about'>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 40, height: 40 }}
                /></Link>
              </span>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </div>
  );
};

export default Navbar;
