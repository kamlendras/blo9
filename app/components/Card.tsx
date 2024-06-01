import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
export default function CardVariants() {
  return (
    <Box
      sx={{
        mt:2,
        // width: '100%',
        // maxWidth: 1000,
        // display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        // gap: 2,
      }}
    >
     

      <Card variant="solid" color="primary" invertedColors>
        <CardContent>
          <Typography level="title-sm" textColor="inherit">
          Writing on Blo9
          </Typography>
          <Typography sx={{mt:1.5}} level="body-sm" textColor="inherit">New writer FAQ <br/>
Expert writing advice <br/>
Grow your readership</Typography>
<Button>Start Writing</Button>
        </CardContent>
      </Card>
    </Box>
  );
}
