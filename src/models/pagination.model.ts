export enum PaginationFields {
  PAGE = 'skip',
  SKIP = 'skip',
}

export interface IPagination {
  total: number;
  skip: number;
  limit: number;
}

export type TPaginationFields = keyof IPagination;
export const paginationFields = [
  'total',
  'skip',
  'limit',
] as TPaginationFields[];

export interface IPaginationDTO {
  [PaginationFields.PAGE]?: number;
  [PaginationFields.SKIP]?: number;
}
