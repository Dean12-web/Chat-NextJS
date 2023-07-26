/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { incrementAsync } from './thunks'

const initialState: ChatSliceState = {
  value: [],
  status: 'idle',
}

export const chatSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Message>) => {
      state.value.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        // state.value +=  action.payload
      })
  },
})



export interface ChatSliceState {
  value: Message[]
  status: 'idle' | 'loading' | 'failed'
}
