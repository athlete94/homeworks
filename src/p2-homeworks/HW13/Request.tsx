import React, {useEffect, useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsApi} from "./RequestsAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {
    const [state, setState] = useState<any>(null)
    const [checked, onChangeChecked] = useState(false)

    const onClickHandler = () => {
        RequestsApi.createRequest(checked)
            .then(res => {
                console.log('success ', res.data)
                setState(res.data)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message)
                setState(error)
            })
    }


    return (
        <div>
            <SuperCheckbox onChangeChecked={onChangeChecked}
                           checked={checked}/>
            <SuperButton onClick={onClickHandler}>Send</SuperButton>
            <br/>
            <h4>Responce:</h4> {state ? JSON.stringify(state) : ''}

        </div>
    );
};

