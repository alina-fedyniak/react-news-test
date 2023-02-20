import React from 'react';
import styled from 'styled-components';
import MainLayout from "./components/Layout/MainLayout/MainLayout";

const StyledWrapper = styled.div`
  text-align: center;
`;

const App = () => {

    return (
        <StyledWrapper>
            <MainLayout>
                <h1>My App</h1>
            </MainLayout>
        </StyledWrapper>
    );
}

export default App;
