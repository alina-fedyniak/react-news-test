import { httpClient, ApiResponse } from '../utils';
import {
  IGetNewsByIdDTO,
  IGetNewsDTO,
  IGetNewsByIdResponse,
  IGetNewsResponse,
  staticNewsCardEndpoints, getNewsByIdEndpoints, IDeleteNewsDTO,
} from '../models/news.model';

class NewsAPI {
  static getNews(
      data: IGetNewsDTO,
  ): ApiResponse<IGetNewsResponse> {
    const { GET_NEWS } = staticNewsCardEndpoints;

    return httpClient.get<IGetNewsResponse>(GET_NEWS, {params: data});
  }

  static getNewsById({
      id,
      ...params
    }: IGetNewsByIdDTO): ApiResponse<IGetNewsByIdResponse> {
    const { GET_BY_ID } = getNewsByIdEndpoints({ id });

    return httpClient.get<IGetNewsByIdResponse>(GET_BY_ID, { params });
  }

  static deleteNews({
    id,
    ...params
    }:IDeleteNewsDTO): ApiResponse<unknown> {
    const { DELETE } = getNewsByIdEndpoints({id});

    return httpClient.delete<unknown>(DELETE, {params});
  }
}
export default NewsAPI;
