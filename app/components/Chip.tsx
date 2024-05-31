import * as React from 'react';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
export default function BasicChip() {
  return (
    <Box  sx={{display: 'flex', gap: 2 ,alignItems: 'center' }}>
        <Box  sx={{ flexWrap: 'wrap', gap: 5 }}>
      <Chip> Blockchain  </Chip>
      <Chip>Coding   </Chip>
      <Chip> Enterpreneurship  </Chip>
      <Chip> React  </Chip>
      <Chip> UX  </Chip>
      <Chip> Education  </Chip>
      <Chip>  History </Chip>
    </Box>
    </Box>
  );
}