import React, {useCallback} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {
    StyledText,
    StyledTitle
} from './NewsCardStyles';
import { useTranslation } from 'react-i18next';

export interface INewsCard {
    id: number;
    title: string;
    body: string;
    handleDeleteNews: (id: number) => void;
}

const NewsCard = ({
    id,
    title,
    body,
    handleDeleteNews
}: INewsCard) => {
    const { t } = useTranslation();

    const deleteNews = useCallback(() => {
        handleDeleteNews(id);
    }, [handleDeleteNews, id]);

    return (
        <Card sx={{
            maxWidth: 345,
            height: '100%',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto'
        }}>
            <Link to={`/news/${id}`}>
                <CardMedia
                    sx={{height: 140}}
                    image='/images/mock-img.jpg'
                    title='picture'
                />
            </Link>
            <CardContent>
                <StyledTitle>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                </StyledTitle>
                <StyledText>
                    <Typography variant='body2' color='text.secondary'>
                        {body}
                    </Typography>
                </StyledText>
            </CardContent>
            <CardActions sx={{
                justifyContent: 'space-between'
            }}>
                <Link to={`/news/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Button size='small'>{t('learnMore')}</Button>
                </Link>
                <IconButton aria-label='delete' color='primary' onClick={deleteNews}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default NewsCard;