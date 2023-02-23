import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

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

    return (
        <Card sx={{maxWidth: 345}}>
            <NavLink to={`/new/${id}`}>
                <CardMedia
                    sx={{height: 140}}
                    image="/images/mock-img.jpg"
                    title="picture"
                />
            </NavLink>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default NewsCard;