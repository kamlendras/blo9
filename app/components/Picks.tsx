import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
export default function TypographyScales() {
  return (
    <Box sx={{mt:1}}>
      <Typography level="title-sm">Staff Picks</Typography>
      <Typography level="body-xs">Grace Loh Prasad
Grace Loh Prasad
in
Asian American Book Club</Typography>
<Typography level="title-sm">It’s OK If Your Writing Isn’t for Everyone</Typography>
<Typography level="body-xs">Grace Loh Prasad
Slava Polonski, PhD in
UX Collective</Typography>
<Typography level="title-sm">What no one tells you about personalization</Typography>

<Typography level="body-xs">Raphael Moutard</Typography>
<Typography level="title-sm">The Controversial Truth about Tech Debt</Typography>
<Link href="#basics" level="body-xs">See the full list</Link>
    </Box>
  );
}