import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  text-align: center;
`;

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <StyledWrapper>
            <h1>{t('myHomePage')}</h1>
        </StyledWrapper>
    )
}

export default HomePage;