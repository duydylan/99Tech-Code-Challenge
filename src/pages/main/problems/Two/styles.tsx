import theme from '@/assets/styles/theme';
import { Container } from '@/designs/common/Container';
import styled from '@emotion/styled';

export const ProblemTwoWrapper = styled.div`
    padding: 20px 15px;
    background-color: ${theme.colorBgConverter};
    min-height: calc(100vh - 46px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ProblemTwoContainer = styled(Container)``;
export const Title = styled.h1`
    font-size: 57px;
    font-weight: 900;
    color: ${theme.colorPrimary};
    text-align: center;

    @media (max-width: ${theme.medium}) {
        font-size: 40px;
    }
`;
export const Box = styled.div`
    border-radius: ${theme.radiusDefault};
    margin: auto;
    padding: 32px;
    width: 100%;
    background-color: ${theme.colorWhite};
    display: flex;
    justify-content: center;
`;
