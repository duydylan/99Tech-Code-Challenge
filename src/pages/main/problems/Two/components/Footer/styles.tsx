import theme from '@/assets/styles/theme';
import styled from '@emotion/styled';

export const ConverterFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
export const ExchangeRate = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
`;
export const Time = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${theme.colorTab};
    line-height: 1;
`;
export const Price = styled.span`
    color: ${theme.colorSecondary};
`;
