'use client'

/* Core */
import { useCallback, useState } from 'react'

/* Instruments */
import {
    useDispatch, 
    addChat
} from '@/lib/redux'
import styles from './chat.module.css'

export const ChatForm = () => {
    const dispatch = useDispatch()
    const [chat, setChat] = useState("")
    const sendChat = useCallback((e: any) => {
        e.preventDefault()
        dispatch(addChat(chat))
        setChat("")
    }, [chat])
    return ( 
        <form onSubmit={sendChat}>
            <input type="text" name="chat" onChange={e => setChat(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    )
}
