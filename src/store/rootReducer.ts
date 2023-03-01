import { combineReducers } from '@reduxjs/toolkit';
import { NEWS_SLICE_NAME, newsSlice } from '../components/News';
import {AUTH_SLICE_NAME} from "../components/Auth/feature/models";
import {authSlice} from "../components/Auth";

export const rootReducer = combineReducers({
    [NEWS_SLICE_NAME]: newsSlice,
    [AUTH_SLICE_NAME]: authSlice,
});
