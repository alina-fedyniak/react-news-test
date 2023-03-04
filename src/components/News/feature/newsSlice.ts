import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  createAction,
} from '@reduxjs/toolkit';
import { initialState, NEWS_SLICE_NAME, NewsState } from './models';
import {
    deleteNews,
    getNews,
    getNewsById,
} from './actionCreators';

const resetAction = createAction<{
  [NEWS_SLICE_NAME]: NewsState;
}>('');

export const newsSlice = createSlice({
  name: NEWS_SLICE_NAME,
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetAction, (state: NewsState, action) => ({
                ...state,
                ...action.payload[NEWS_SLICE_NAME],
            }))
            .addMatcher(isFulfilled(getNews), (state: NewsState, action) => {
                const {payload, meta} = action;
                state.newsList =
                    state.newsList && meta.arg.skip
                        ? [...state.newsList, ...payload.posts]
                        : payload.posts;
                state.pagination.skip += state.pagination.limit;
            })
            .addMatcher(isFulfilled(deleteNews), (state: NewsState, action) => {
                const {meta} = action;
                state.newsList = (state.newsList || []).filter(
                    (item) => item.id !== meta.arg.id);
            })
            .addMatcher(isFulfilled(getNewsById), (state: NewsState, action) => {
                const {payload} = action;
                // @ts-ignore
                state.newsById = payload;
            })
            .addMatcher(
                isPending(
                    getNews,
                    getNewsById,
                    deleteNews
                ),
                (state: NewsState) => {},
            )
            .addMatcher(
                isRejected(
                    getNews,
                    getNewsById,
                    deleteNews
                ),
                (state: NewsState) => {},
            );
    },
});

export default newsSlice.reducer;
