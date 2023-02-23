import {INews} from "../../../models/news.model";

export const NEWS_SLICE_NAME = 'news';

export interface NewsState {
  newsList: INews[] | null;
  newsById: INews | null;
}

export const initialState: NewsState = {
  newsList: null,
  newsById: null,
};
