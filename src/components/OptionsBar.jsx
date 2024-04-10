import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function OptionsBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 1000 }, bgcolor: 'black'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" sx={{color:'white'}} />
        <Tab label="Item Two" sx={{color:'white'}}/>
        <Tab label="Item Three" sx={{color:'white'}}/>
        <Tab label="Item Four" sx={{color:'white'}}/>
        <Tab label="Item Five" sx={{color:'white'}}/>
        <Tab label="Item Six" sx={{color:'white'}}/>
        <Tab label="Item Seven" sx={{color:'white'}}/>
      </Tabs>
    </Box>
  );
}