export enum NewEndpoints {
  ROOT = '/posts',
}
export const getNewEndpoints = ({ id }: { id: number }) => ({
  GET_BY_ID: `${NewEndpoints.ROOT}/${id}`,
});

export enum NewsEndpoints {
  ROOT = '/posts',
}

export const staticNewsCardEndpoints = {
  GET_NEWS: `${NewsEndpoints.ROOT}`,
};

export interface INew {
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

export interface IGetNewDTO{
  id: number;
}

export interface IGetNewsResponse {
  posts: INew[];
}

export interface IGetNewResponse {
  post: INew;
}
