import {Box, Paper,Accordion, AccordionSummary,AccordionDetails, Typography} from '@mui/material';
import { Masonry } from '@mui/lab';


const height = [150,30,90,70,110,130,80,50,90,100,150,30,50,80,]
function MuiMasonry() {
  return 
  <Box>
    <Masonry columns={4} spacing={2}>
      {height.map((height, index) => (
        <Paper key={index} style={{ 
            // height, 
            //  display: 'flex', 
            //  alignItems: 'center', 
            //  justifyContent: 'center', 
             border: '1px solid',}}>
            <Accordion style={{minHeight: height}}>
                <AccordionSummary>
                    <Typography>Accordion {index +1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content</AccordionDetails>
            </Accordion>
        </Paper>
      ))}
    </Masonry>
  </Box>
}

export default MuiMasonry