import {IPaginationDTO} from "./pagination.model";

export enum NewsByIdEndpoints {
  ROOT = '/posts',
}
export const getNewsByIdEndpoints = ({ id }: { id: number }) => ({
  GET_BY_ID: `${NewsByIdEndpoints.ROOT}/${id}`,
});

export enum NewsEndpoints {
  ROOT = '/posts',
}

export const staticNewsCardEndpoints = {
  GET_NEWS: `${NewsEndpoints.ROOT}`,
};

export interface INews {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: [];
  reactions: number;
}

export interface IGetNewsDTO extends IPaginationDTO{
  limit?: number
  skip?: number;
}

export interface IGetNewsByIdDTO{
  id: number;
}

export interface IGetNewsResponse {
  posts: INews[];
  total: number;
  skip: number;
  limit: number;
}

export interface IGetNewsByIdResponse {
  post: INews;
}
