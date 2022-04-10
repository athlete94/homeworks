// import React, {ChangeEvent} from 'react'
// import {Slider} from "@material-ui/core";
import * as React from 'react';
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";
function valuetext(value: number) {
    return `${value}°C`;
}

type SuperDoubleRangePropsType = {
    onChangeRange1?: (value: [number, number]) => void
    value?: number[]
    setValue: (newValue: number[]) => void
    // min, max, step, disable, ...
}
//
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange1, value,
        setValue

        // min, max, step, disable, ...
    }
) => {


    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        console.log(newValue)
    };

    return (
        <Box sx={{ width: 200 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}

export default SuperDoubleRange

