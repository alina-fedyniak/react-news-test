import React, { ReactNode } from 'react';
import { StyledContent } from '../Styles/LayoutStyles';
import Header from '../Header/Header';

interface IMainLayout {
  children: ReactNode;
}

const MainLayoutContent = ({ children }: IMainLayout): JSX.Element => (
  <>
    <Header/>
    <StyledContent>{children}</StyledContent>
  </>
);

export default MainLayoutContent;
