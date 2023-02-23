import { httpClient, ApiResponse } from '../utils';
import {
  IGetNewByIdDTO,
  IGetNewsDTO,
  IGetNewByIdResponse,
  IGetNewsResponse,
  staticNewsCardEndpoints, getNewsByIdEndpoints,
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
    }: IGetNewByIdDTO): ApiResponse<IGetNewByIdResponse> {
    const { GET_BY_ID } = getNewsByIdEndpoints({ id });

    return httpClient.get<IGetNewByIdResponse>(GET_BY_ID, { params });
  }
}
export default NewsAPI;
