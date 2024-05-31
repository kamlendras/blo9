import * as React from 'react';
import Typography from '@mui/joy/Typography';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
export default function TypographyScales() {
  return (
    <div>

      <Typography level="title-sm" sx={{mt:5}}>Reading list</Typography>
      <Typography level="body-xs" sx={{mt:2}}>Click the  <BookmarkAddOutlinedIcon fontSize="inherit"/> on any story to easily add it to your reading list or a custom list that you can share.</Typography>
      <Typography level="body-xs" sx={{mt:2}}>Help

Status

About

Careers

Press

Blog

Privacy

Terms

Text to speech

Teams.</Typography>
    </div>
  );
}
