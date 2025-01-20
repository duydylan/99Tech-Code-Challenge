import { PATH_MAIN } from '@/routes/paths';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(PATH_MAIN.PROBLEM.ONE);
    }, [navigate]);

    return <></>;
};

export default HomePage;
