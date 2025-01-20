import theme from '@/assets/styles/theme';
import styled from '@emotion/styled';

export const ConverterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 15px;

    @media (max-width: ${theme.medium}) {
        flex-direction: column;
        gap: 0;
    }
`;
