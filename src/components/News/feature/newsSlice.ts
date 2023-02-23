import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { initialState, NEWS_SLICE_NAME, NewsState } from './models';
import {
  getNews,
  getNewsById,
} from './actionCreators';

export const newsSlice = createSlice({
  name: NEWS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled(getNews), (state: NewsState, action) => {
        const { payload } = action;
        state.newsList = payload.posts;
      })
      .addMatcher(isFulfilled(getNewsById), (state: NewsState, action) => {
        const {payload} = action;
        // state.ById = payload;
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
