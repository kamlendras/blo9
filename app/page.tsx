import Chip from "./components/Chip"
import Tabs from "./components/Tabs";
import Grid from '@mui/joy/Grid';
export const metadata = {
  title: "Blo9",
  description: "Open & Decentralized",
};
export default function C() {
  return (
    <>
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={8}>
      <Tabs />
      </Grid>
      <Grid xs={4}>
        <Chip/>
      
      </Grid>
    </Grid>
      
      

    </>
  );
}