'use client'

import styles from './chat.module.css'

export const ChatItem = ({ message: Message = {} }) => {

    return (
        <div>
            <p>{Message.chat}</p>
        </div>
    )
}
