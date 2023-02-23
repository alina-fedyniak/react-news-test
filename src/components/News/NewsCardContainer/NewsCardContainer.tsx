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

const NewsCardContainer = () => {
    const { t } = useTranslation(['common']);
    const dispatch = useAppDispatch();
    const news = useAppState(selectNews);
    console.log(news)

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
        </StyledWrap>
    );
};

export default NewsCardContainer;
