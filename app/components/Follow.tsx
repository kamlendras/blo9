import * as React from 'react';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Link from '@mui/joy/Link';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
export default function BasicChip() {
  return (
    <>
     <Typography sx={{mt:3}}level="title-sm">Who to follow</Typography>
     <Box sx={{ width: 600 }}>
     
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ '--ListItemDecorator-size': '56px' }}
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/1.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">
Bella L</Typography>
            <Typography level="body-sm" noWrap>
             Your imperial mathematician & story teller |
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Nathan Rosidi</Typography>
            <Typography level="body-sm" noWrap>
            i like creating content and building tools for data
            </Typography>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>
            <Avatar src="/static/images/avatar/2.jpg" />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-sm">Rehan Pinjari</Typography>
            <Typography level="body-sm" noWrap>
            Self-Taught Developer & UI/UX Designer
            </Typography>
          </ListItemContent>
        </ListItem>
      </List>
    </Box>
    <Link href="#basics" level="body-xs">See more suggestions</Link>
    </>
  );
}