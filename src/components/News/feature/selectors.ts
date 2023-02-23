import { createSelector } from '@reduxjs/toolkit';
import { NewsState, NEWS_SLICE_NAME } from './models';
import { RootState } from '../../../store/store';

const NewsSelector = (state: RootState): NewsState => state[NEWS_SLICE_NAME];

export const selectNews = createSelector(
    NewsSelector,
  (newsList: NewsState) => newsList.newsList,
);

export const selectNewsById = createSelector(
    NewsSelector,
  (newsById: NewsState) => newsById.newsById,
);
