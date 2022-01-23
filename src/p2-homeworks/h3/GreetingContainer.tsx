import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    let totalUsers = users.length
    let space = /\s/ // пробелы


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(!space.test(e.currentTarget.value)) {
            setName(e.currentTarget.value)
            setError('')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
    }
    const onBlurHandler = () => {
       if(name === '') {
           setError('Enter name')
       }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            addUser()
        }
    }
    const onFocusHandler = () => {
        setError('')
    }



    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onBlurHandler={onBlurHandler}
            onKeyPressHandler={onKeyPressHandler}
            onFocusHandler={onFocusHandler}
        />
    )
}

export default GreetingContainer
