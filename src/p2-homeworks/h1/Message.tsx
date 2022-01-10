import React from 'react'
import s from './Message.module.css'

type MessagePropsTypes = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message (props: MessagePropsTypes) {
    const {avatar, name, message, time} = props

    return (
        <div className={s.message_block}>
            <div className={s.avatar}>
                <img src={avatar} alt="img" />
            </div>

            <div className={s.message}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>

    )
}

export default Message
