import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {initStateType, loadingAC, loadingACType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from './HW10.module.css'

function HW10() {
    let {loading} = useSelector<AppStoreType, initStateType>(state => state.loading)
    let dispatch = useDispatch<Dispatch<loadingACType>>()
    console.log(loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)

    };

    return (
        <div className={s.HW10}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loading}>
                        <iframe src="https://gifer.com/embed/7VE" width="100%" height="100%" frameBorder="0"
                                allowFullScreen> </iframe>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
