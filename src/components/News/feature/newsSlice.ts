import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  createAction
} from '@reduxjs/toolkit';
import { initialState, NEWS_SLICE_NAME, NewsState } from './models';
import {
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
        const { payload } = action;
        state.newsList = payload.posts;
      })
      .addMatcher(isFulfilled(getNewsById), (state: NewsState, action) => {
        const {payload} = action;
        console.log(payload)
        // @ts-ignore
        state.newsById = payload;
      })
      .addMatcher(
        isPending(
            getNews,
            getNewsById
        ),
        (state: NewsState) => {},
      )
      .addMatcher(
        isRejected(
            getNews,
            getNewsById
        ),
        (state: NewsState, action) => {
          const { error } = action;
        },
      );
  },
});

export default newsSlice.reducer;
