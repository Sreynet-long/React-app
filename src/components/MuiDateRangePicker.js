import { Box ,TextField} from "@mui/material"
import { useState } from "react";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker ,} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

export const MuiDateRangePicker = () => {
    // const [startDate, setStartDate] = useState(dayjs(null));
    // const [endDate, setEndDate] = useState(dayjs(null));
    const[value, setValue] = useState(dayjs[null, null]);
  return (
    <Box sx={{ width: 500, margin: 'auto', mt: 5 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker startText='Check-in' endText='Check-out' 
        value={value} onChange={(newValue)=>{setValue(newValue); 
          
        }} 
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
