import { PATH_MAIN } from '@/routes/paths';
import { Button } from 'antd';
import { Content, ContentWrapper, NotFoundWrapper } from './styles';

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <ContentWrapper>
                <Content>This feature is under maintenance, we will comeback soon!</Content>
            </ContentWrapper>
            <Button href={PATH_MAIN.HOME}>Back to Homepage</Button>
        </NotFoundWrapper>
    );
};

export default NotFound;
