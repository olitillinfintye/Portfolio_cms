import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
    theme: 'dark' | 'light' | 'system'
}

const initialState: ThemeState = {
    theme: 'system',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = themeSlice.actions

export default themeSlice.reducer