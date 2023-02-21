import { Route, Routes } from 'react-router-dom';

export type THeaderLink = {
    title: string;
    route: string;
};

export const pagesLink: Array<THeaderLink> = [
    {
        title: 'Posts',
        route: 'Routes'
    },
    {
        title: 'Blog',
        route: 'Routes'
    }];

export const settings: Array<string> = ['Profile', 'Logout'];