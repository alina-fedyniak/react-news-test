import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {
    StyledText,
    StyledTitle
} from './NewsCardStyles';
import { useTranslation } from 'react-i18next';

export interface INewsCard {
    id: number;
    title: string;
    body: string;
}

const NewsCard = ({
    id,
    title,
    body
}: INewsCard) => {
    const { t } = useTranslation(['common']);

    return (
        <Card sx={{maxWidth: 345}}>
            <Link to={`/news/${id}`}>
                <CardMedia
                    sx={{height: 140}}
                    image="/images/mock-img.jpg"
                    title="picture"
                />
            </Link>
            <CardContent>
                <StyledTitle>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {title}
                    </Typography>
                </StyledTitle>
                <StyledText>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </StyledText>
            </CardContent>
            <CardActions>
                <Link to={`/news/${id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <Button size="small">{t('learnMore')}</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default NewsCard;