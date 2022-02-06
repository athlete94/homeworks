import React, {ChangeEvent} from 'react'
import Message from './Message'
import s from './Message.module.css'



const HW1 = () => {
    const messageData = {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: "some text",
        time: '22:00',
    }

    return (
        <div className={s.HW1}>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
               avatar={messageData.avatar}
               name={messageData.name}
               message={messageData.message}
               time={messageData.time} />


            {/*для личного творчества, могу проверить*/}

        </div>
    )
}

export default HW1
