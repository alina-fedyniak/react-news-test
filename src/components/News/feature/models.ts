import {INews} from "../../../models/news.model";

export const NEWS_SLICE_NAME = 'news';

export interface NewsState {
  newsList: INews[] | null;
  newsById: INews | null;
  pagination: {
    total: number;
    skip: number;
    limit: number;
  } | null;
}

export const initialState: NewsState = {
  newsList: null,
  newsById: null,
  pagination: {
    total: 0,
    skip: 0,
    limit: 6,
  }
};
