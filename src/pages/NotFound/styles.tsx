import theme from '@/assets/styles/theme';
import { Image } from '@/designs/common/Image';
import styled from '@emotion/styled';

export const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colorBg};
    min-height: 100vh;
`;
export const ImageNotFound = styled(Image)`
    width: 400px;
`;
export const ContentWrapper = styled.div`
    text-align: center;
    margin-top: 30px;
`;
export const LargeText = styled.div`
    font-size: 60px;
    font-weight: 900;
`;
export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
`;
export const Content = styled.div`
    margin: 30px 0;
`;
