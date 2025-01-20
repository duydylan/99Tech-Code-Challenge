import theme from '@/assets/styles/theme';
import styled from '@emotion/styled';
import { InputNumber } from 'antd';

export const InputWrapper = styled.div`
    @media (max-width: ${theme.medium}) {
        width: 100%;
    }
`;
export const InputStyled = styled(InputNumber)`
    width: 100%;
    &::placeholder {
        color: ${theme.colorGray};
    }
`;
