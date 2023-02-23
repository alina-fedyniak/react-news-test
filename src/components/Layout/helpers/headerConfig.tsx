export enum News {
    NEWS = '/news',
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
        route: News.NEWS
    }];

export const settings: Array<string> = ['Profile', 'Logout'];