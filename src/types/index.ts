import { ReactElement, ReactNode } from 'react';

type TCommonLayoutProps = { isMobileFromServer: boolean };

export type PageWithLayout = {
  getLayout?: (page: ReactElement, props?: TCommonLayoutProps) => ReactNode;
};
