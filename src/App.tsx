// import React from 'react';
// import styled from 'styled-components';
// import MainLayout from "./components/Layout/MainLayout/MainLayout";
// import NewsCard from "./components/NewsCard/NewsCard";
//
// const StyledWrapper = styled.div`
//   text-align: center;
// `;
//
// const App = () => {
//
//     return (
//         <StyledWrapper>
//             <MainLayout>
//                 <h1>My App</h1>
//                 <NewsCard/>
//             </MainLayout>
//         </StyledWrapper>
//     );
// }
//
// export default App;
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import NewsCard from "./components/NewsCard/NewsCard";

const StyledWrapper = styled.div`
  text-align: center;
`;

const AppRoot = () => {

    return (
        <>
            <Provider store={store}>
                <StyledWrapper>
                    <MainLayout>
                        <h1>My App</h1>
                        <NewsCard/>
                    </MainLayout>
                </StyledWrapper>
            </Provider>
        </>
    );
};

export default (AppRoot);


