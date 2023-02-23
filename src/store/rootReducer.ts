import { combineReducers } from '@reduxjs/toolkit';
import { NEWS_SLICE_NAME, newsSlice } from '../components/News';

export const rootReducer = combineReducers({
    [NEWS_SLICE_NAME]: newsSlice,
});
