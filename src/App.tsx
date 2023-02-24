import { Provider } from 'react-redux';
import { store } from './store/store';
import {RouteNav} from "./routing/routing";
import MainLayout from "./components/Layout/MainLayout/MainLayout";

const AppRoot = () => {

    return (
        <>
            <Provider store={store}>
                <MainLayout>
                    <RouteNav/>
                </MainLayout>
            </Provider>
        </>
    );
};

export default (AppRoot);


