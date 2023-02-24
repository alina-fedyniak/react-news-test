import { createAsyncThunk } from '@reduxjs/toolkit';
import { NEWS_SLICE_NAME } from './models';

import {
    IGetNewsDTO,
    IGetNewsByIdDTO,
    IGetNewsResponse,
    IGetNewsByIdResponse,
} from '../../../models/news.model';
import NewsAPI from "../../../api/NewsAPI";

export const getNews = createAsyncThunk<IGetNewsResponse,
    IGetNewsDTO>(
    `${NEWS_SLICE_NAME}/getNews`,
    async (data: IGetNewsDTO) => {
        const response = await NewsAPI.getNews(data);

        return response.data;
    }
);

export const getNewsById = createAsyncThunk<IGetNewsByIdResponse,
    IGetNewsByIdDTO>(
    `${NEWS_SLICE_NAME}/getNewsById`,
    async (data: IGetNewsByIdDTO) => {
        const response = await NewsAPI.getNewsById(data);

        return response.data;
    },
);
