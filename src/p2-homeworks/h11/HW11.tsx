import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value, setValue] = React.useState<number[]>([0, 100]);


    const onChangeRange = (
        event: Event,
        newValue: number | number[],
    ) => {
        if (!Array.isArray(newValue)) {
            setValue(prevState => [newValue, prevState[1]])
        } else {
            setValue(newValue)
        }
    };


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value[0]}</span>
                <SuperRange value1={value[0]}
                            handleChange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span style={{marginRight: "180px"}}>{value[0]}</span>
                <span>{value[1]}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={value}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
