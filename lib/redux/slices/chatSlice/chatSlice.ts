/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { loadChatAsync, addChatAsync } from './thunks'

const initialState: ChatSliceState = {
  value: [],
  status: 'idle',
}

export const chatSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Message>) => {
      state.value.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadChatAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadChatAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value =  action.payload
      })
  },
})



export interface ChatSliceState {
  value: Message[]
  status: 'idle' | 'loading' | 'failed'
}
