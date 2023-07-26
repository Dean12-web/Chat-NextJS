/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchLoadChat, fetchAddChat } from './fetchApi'
import { selectChat } from './selectors'
import { chatSlice } from './chatSlice'
import type { ReduxThunkAction } from '@/lib/redux'

export const loadChatAsync = createAppAsyncThunk(
  'chat/fetchLoadChat',
  async () => {
    const response = await fetchLoadChat()

    // The value we return becomes the `fulfilled` action payload
    return response.data 
  }
)
export const addChatAsync = createAppAsyncThunk(
  'chat/fetchAddChat',
  async (message: Message) => {
    const response = await fetchAddChat(message)

    // The value we return becomes the `fulfilled` action payload
    return response.data 
  }
)

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementChatAsync =
  (message: Message): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectChat(getState())
      dispatch(chatSlice.actions.addChat(message))
  }
