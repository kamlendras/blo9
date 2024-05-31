"use client" 
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import BlogCard from "./BlogCard/card"
export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -2,
        overflowX: 'hidden',
      }}
    >
      <Tabs
        aria-label="Scrollable tabs"
        sx={{ width: 1250 }}
        value={index}
        onChange={(event, value) => setIndex(value as number)}
      >
        <TabList
          sx={{
      
            overflow: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
            // pt: 0,
          
            
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 4,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab indicatorInset    sx={{ fontSize: 18 }} >    
           + {' '}
           
          </Tab>
          <Tab indicatorInset  sx={{ fontSize: 18 }} >
            For you{' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Following {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Scam Alert{' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Monero {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Critical Security Vulnerability {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Dark Web{' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Hacker Leaks {' '}
           
          </Tab>
     
        </TabList>
        <Box
        //   sx={(theme) => ({
        //     '--bg': theme.vars.palette.background.surface,
        //     background: 'var(--bg)',
        //     boxShadow: '0 0 0 100vmax var(--bg)',
        //     clipPath: 'inset(0 -100vmax)',

        //   })}
        component="main"
              sx={{
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
        >
               <Box
              // maxWidth="xl"
maxWidth="100vw"


               sx={{ mt: 2 }}
              
              >
          <TabPanel value={0}><BlogCard/></TabPanel>
          <TabPanel value={1}><BlogCard/></TabPanel>
          <TabPanel value={2}><BlogCard/></TabPanel>
          <TabPanel value={3}><BlogCard/></TabPanel>
          <TabPanel value={4}><BlogCard/></TabPanel>
          <TabPanel value={5}><BlogCard/></TabPanel>
          <TabPanel value={6}><BlogCard/></TabPanel>
          <TabPanel value={7}><BlogCard/></TabPanel>
          </Box>
        </Box>
      </Tabs>
    </Box>
  );
}
