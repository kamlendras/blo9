import * as React from 'react';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
export default function BasicChip() {
  return (
    <>
     <Typography level="title-sm" sx={{mt:3}}>Recommended topics</Typography>
    <Box  sx={{display: 'flex', gap: 2 ,alignItems: 'center' , mt : 1}}>
           
              <Stack spacing={1} direction="row" flexWrap="wrap" useFlexGap>
      <Chip> Blockchain  </Chip>
      <Chip>Coding   </Chip>
      <Chip> Enterpreneurship  </Chip>
      <Chip> React  </Chip>
      <Chip> UX  </Chip>
      <Chip> Education  </Chip>
      <Chip>  History </Chip>
      </Stack>
    </Box>
    <Link href="#basics" level="body-xs">See more topics</Link>
    </>
  );
}