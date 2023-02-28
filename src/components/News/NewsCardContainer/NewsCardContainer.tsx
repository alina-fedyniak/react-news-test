import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {useAppDispatch, useAppState} from '../../../store/hooks';
import {
    StyledWrap,
    StyledBodyContainer,
} from './NewsCardContainerStyled';
import NewsCard from "../NewsCard/NewsCard";
import {selectNews, selectNewsPagination} from "../feature/selectors";
import {getNews} from "../feature/actionCreators";
import Button from '@mui/material/Button';
import {PaginationFields} from "../../../models/pagination.model";

const NewsCardContainer = () => {
    const { t } = useTranslation(['common']);
    const dispatch = useAppDispatch();
    const news = useAppState(selectNews);
    const pagination = useAppState(selectNewsPagination);

    useEffect(() => {
        dispatch(getNews({limit: pagination?.limit}));
    }, []);

    const handleShowMore = () => {
        if (pagination) {
            const nextNews = pagination.skip;
            dispatch(getNews({ limit: pagination?.limit,[PaginationFields.PAGE]: nextNews}));
        }
    };

    return (
        <StyledWrap>
            <StyledBodyContainer>
                {news && (
                    news?.map(item => {
                        return(
                            <NewsCard
                                id={item.id}
                                key={item.id}
                                title={item.title}
                                body={item.body}
                            />
                        )
                    })
                )}
            </StyledBodyContainer>
            <Button
                onClick={handleShowMore}
                variant="contained"
                sx={{
                    background: '#72c0b5',
                }}
            >
                {t('showMore')}
            </Button>
        </StyledWrap>
    );
};

export default NewsCardContainer;
