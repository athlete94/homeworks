import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ChangeThemeCType, ThemeInitStateType} from "./bll/themeReducer";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'blue', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, ThemeInitStateType>(state => state.themes); // useSelector
    const dispatch = useDispatch<Dispatch<ChangeThemeCType>>()

    const onChangeOption = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio value={theme}
                            options={themes}
                            onChangeOption={onChangeOption}
                />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
