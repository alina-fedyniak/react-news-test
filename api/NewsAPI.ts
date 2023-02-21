import { httpClient, ApiResponse } from '../src/utils';
import {
  IGetNewDTO,
  IGetNewsDTO,
  IGetNewResponse,
  IGetNewsResponse,
  staticNewsCardEndpoints, getNewEndpoints,
} from '../models/news.model';

class NewsAPI {
  static getNews(
      data: IGetNewsDTO,
  ): ApiResponse<IGetNewsResponse> {
    const { GET_NEWS } = staticNewsCardEndpoints;

    return httpClient.get<IGetNewsResponse>(GET_NEWS, {params: data});
  }

  static getNew({
      id,
      ...params
    }: IGetNewDTO): ApiResponse<IGetNewResponse> {
    const { GET_BY_ID } = getNewEndpoints({ id });

    return httpClient.get<IGetNewResponse>(GET_BY_ID, { params });
  }
}
export default NewsAPI;
