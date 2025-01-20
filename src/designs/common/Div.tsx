import styled from '@emotion/styled';

export const Div = styled.div<{ fit?: boolean }>`
    width: 100%;
    max-width: ${({ fit }) => (fit ? 'fit-content' : '100%')};
`;
