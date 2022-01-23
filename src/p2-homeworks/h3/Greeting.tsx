import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onBlurHandler: () => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onFocusHandler: () => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onBlurHandler, onKeyPressHandler, onFocusHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInputName : s.inputName


    return (
        <div className={s.HW3}>
            <input value={name}
                   onChange={setNameCallback}
                   onBlur={onBlurHandler}
                   onFocus={onFocusHandler}
                   className={inputClass}
                   onKeyPress={onKeyPressHandler}
            />

            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div className={s.error}><span>{error}</span></div>
        </div>
    )
}

export default Greeting
