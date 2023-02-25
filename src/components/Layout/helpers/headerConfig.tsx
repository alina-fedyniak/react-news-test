export enum News {
    NEWS = '/news',
    PROFILE = '/profile',
    LOGOUT = '/',
    BLOG = '/',
}

export type THeaderLink = {
    title: string;
    route: string;
};

export const pagesLink: Array<THeaderLink> = [
    {
        title: 'News',
        route: News.NEWS
    },
    {
        title: 'Blog',
        route: News.BLOG
    }];

export const settings: Array<THeaderLink> = [
    {
        title: 'Profile',
        route: News.PROFILE
    },
    {
        title: 'Logout',
        route: News.LOGOUT
    }
   ];