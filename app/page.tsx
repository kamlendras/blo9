import Chip from "./components/Chip"
import Card from "./components/Card"
import Tabs from "./components/Tabs";
import Grid from '@mui/joy/Grid';
import Picks from "./components/Picks"
import Follow from "./components/Follow"
import Footer from "./components/Footer"
export const metadata = {
  title: "Blo9",
  description: "Open & Decentralized",
};
export default function C() {
  return (
    <>
          <Grid 
          container
          spacing={2} 
         
           sx={{ flexGrow: 1, mt:1 }}
          >
      <Grid disableEqualOverflow xs={9}>
      <Tabs />
      </Grid>
      <Grid disableEqualOverflow  xs={3}>
        <Picks/>
        <Card/>
        <Chip/>
      <Follow/>
      <Footer/>
      </Grid>

    </Grid>
      
      

    </>
  );
}