import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {useAppDispatch, useAppState} from '../../../store/hooks';
import {
    StyledWrap,
    StyledBodyContainer,
} from './NewsCardContainerStyled';
import NewsCard from "../NewsCard/NewsCard";
import {selectNews} from "../feature/selectors";
import {getNews} from "../feature/actionCreators";
import Button from '@mui/material/Button';

const NewsCardContainer = () => {
    const { t } = useTranslation(['common']);
    const dispatch = useAppDispatch();
    const news = useAppState(selectNews);

    useEffect(() => {
        dispatch(getNews({}));
    }, []);

    return (
        <StyledWrap>
            <StyledBodyContainer>
                {news?.map(item => {
                    return(
                        <NewsCard
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            body={item.body}
                        />
                    )
                })}
            </StyledBodyContainer>
            <Button
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
