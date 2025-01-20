import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import 'antd/dist/reset.css';

import AppGlobal from './components/Global';
import queryClient from './configs/query';
import Router from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <AppGlobal />
                    <Router />
                </HelmetProvider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
