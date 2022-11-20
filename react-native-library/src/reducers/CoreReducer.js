import { createSlice } from '@reduxjs/toolkit';

const CoreReducer = createSlice({
    name: 'CoreReducer',

    initialState: {
        loaders: {},
        is_dark_theme: false,
    },
  
    reducers: {
        loaderActivate: (state, action) => {
            let activate_loaders = state.loaders || {}
            activate_loaders = {
                ...activate_loaders,
                [action.payload]: true
            };
            state.loaders = activate_loaders
        },
        loaderDeactivate: (state, action) => {
            let deactivate_loaders = state.loaders || {}
            deactivate_loaders = {
                ...deactivate_loaders,
                [action.payload]: false
            };
            state.loaders = deactivate_loaders
        },
        switchTheme: (state, action) => {
            let toggle = !state.is_dark_theme
            state.is_dark_theme = toggle
        }
    }
})

export const CoreActions = CoreReducer.actions

export default CoreReducer.reducer