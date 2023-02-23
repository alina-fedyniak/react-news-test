import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {RouteNav} from "./routing/routing";
import Header from "./components/Layout/Header/Header";

const StyledWrapper = styled.div`
  text-align: center;
`;

const AppRoot = () => {

    return (
        <>
            <Provider store={store}>
                <StyledWrapper>
                    <Header/>
                    <RouteNav/>
                </StyledWrapper>
            </Provider>
        </>
    );
};

export default (AppRoot);


