import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import Slider from "@mui/material/Slider";
import {Box} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    handleChange?: (event: Event, newValue: number | number[]) => void,
    value1?: number,
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, handleChange ,
        className,
        value1,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const finalRangeClassName = `${s.range} ${className ? className : ''}`



    return (
        <>
            {/*<input*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}
            {/*    value={value1}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}

            <Box sx={{ width: 200 }}>
            <Slider aria-label="Volume" value={value1} onChange={handleChange} />
            </Box>
        </>
    )
}

export default SuperRange
