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

export interface IGetNewsDTO{
  limit?: number;
}

export interface IGetNewByIdDTO{
  id: number;
}

export interface IGetNewsResponse {
  posts: INews[];
}

export interface IGetNewByIdResponse {
  post: INews;
}
