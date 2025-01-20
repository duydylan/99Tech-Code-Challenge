import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';
import { MainLayoutWrapper } from './styles';

const MainLayout = () => {
    return (
        <MainLayoutWrapper>
            <Header />
            <Outlet />
            <Footer />
        </MainLayoutWrapper>
    );
};

export default MainLayout;
