import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import style from './SuperButton/SuperButton.module.css'
import SuperButton from "./SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void
}

const Affair: React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {

    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }

    return (
        <div className={s.affair}>
            <span>{affair._id}</span>
            <span>{affair.name}</span>
            <span>{affair.priority}</span>

            <SuperButton className={style.red} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
