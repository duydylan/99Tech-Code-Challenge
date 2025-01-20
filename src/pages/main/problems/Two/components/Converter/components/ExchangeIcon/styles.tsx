import theme from '@/assets/styles/theme';
import styled from '@emotion/styled';

export const ExchangeIconWrapper = styled.div`
    margin-top: 25px;
    cursor: pointer;

    @media (max-width: ${theme.medium}) {
        transform: rotate(90deg);
    }
`;
