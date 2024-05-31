"use client" 
import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

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
            pt: 1,
            
            [`&& .${tabClasses.root}`]: {
              flex: 'initial',
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                '&::after': {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
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
          Self Improvement {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Technology {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Data Science {' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Programming{' '}
           
          </Tab>
          <Tab indicatorInset sx={{ fontSize: 18 }} >
          Technology {' '}
           
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


               sx={{ mt: 0 }}
              
              >
          <TabPanel value={0}>Deals</TabPanel>
          <TabPanel value={1}>Library</TabPanel>
          <TabPanel value={2}>Products</TabPanel>
          <TabPanel value={3}>Produnnncts</TabPanel>
          </Box>
        </Box>
      </Tabs>
    </Box>
  );
}
