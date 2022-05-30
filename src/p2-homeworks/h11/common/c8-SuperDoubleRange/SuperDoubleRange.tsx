// import React, {ChangeEvent} from 'react'
// import {Slider} from "@material-ui/core";
import * as React from 'react';
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (event: Event,
                     newValue: number | number[],
    ) => void
    value?: number[]
    // min, max, step, disable, ...
}
//
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,

        // min, max, step, disable, ...
    }
) => {



    return (
        <Box sx={{ width: 200 }}>
            {/*<Slider*/}
            {/*    value={value}*/}
            {/*    onChange={onChangeRange}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*/>*/}

            <Slider
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    );
}

export default SuperDoubleRange

