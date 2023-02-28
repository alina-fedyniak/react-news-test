export enum News {
    NEWS = '/news',
    PROFILE = '/profile',
    LOGOUT = '/logout',
    BLOG = '/',
    LOGIN = '/login',
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
        title: 'Login',
        route: News.LOGIN
    },
    {
        title: 'Logout',
        route: News.LOGOUT
    }
   ];