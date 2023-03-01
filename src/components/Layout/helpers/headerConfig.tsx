export enum Routes {
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
        route: Routes.NEWS
    },
    {
        title: 'Blog',
        route: Routes.BLOG
    }];

export const settings: Array<THeaderLink> = [
    {
        title: 'Profile',
        route: Routes.PROFILE
    },
    {
        title: 'Login',
        route: Routes.LOGIN
    },
    {
        title: 'Logout',
        route: Routes.LOGOUT
    }
   ];