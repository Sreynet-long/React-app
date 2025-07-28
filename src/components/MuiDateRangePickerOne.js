import { Box ,TextField} from "@mui/material"
import { useState } from "react";
import {DateRangePicker, DatePicker} from '@mui/lab';


export const MuiDateRangePicker = () => {
    const [value, setValue] = useState(dayjs([null, null]));
  return (
    <Box sx={{ width: 500, margin: 'auto', mt: 5 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker startText='Check-in' endText='Check-out' 
        value={value} onChange={(newValue)=>{setValue(newValue)}} 
         renderInput={(startProps, endProps) => (
            <>
                <TextField {...startProps} variant="standard" margin="normal" fullWidth />
                <Box sx={{ mx: 2}}> to </Box>
                <TextField {...endProps} variant="standard" margin="normal" fullWidth />
            </>
         )}
        />
      </LocalizationProvider>
    </Box>
  )
}
