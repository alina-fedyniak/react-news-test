import React, {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useAppDispatch, useAppState} from "../../../store/hooks";
import {selectNewsById} from "../feature/selectors";
import {getNewsById} from "../feature/actionCreators";
import { useParams } from 'react-router-dom';

const NewsContent = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const newsById = useAppState(selectNewsById);

    useEffect(() => {
        dispatch(getNewsById({id: Number(id)}));
    }, []);


    return (
        <Card
            sx={{
                marginTop: 5,
                marginBottom: 20

        }}>
            <CardMedia
                sx={{height: 300}}
                image="/images/mock-img.jpg"
                title="picture"
            />
            <CardContent sx={{height: '100vh'}}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{textAlign: 'center'}}
                >
                    {newsById?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {newsById?.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NewsContent;