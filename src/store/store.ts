import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
        reducer: rootReducer,
        devTools: true,
})

type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

setupListeners(store.dispatch);
