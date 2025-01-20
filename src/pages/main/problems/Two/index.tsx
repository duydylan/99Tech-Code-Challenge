import ErrorBoundary from '@/components/ErrorBoundary';
import Page from '@/components/Page';
import Converter from './components/Converter';
import ConverterFooter from './components/Footer';
import { useGetCurrencies, useGetCurrenciesFromUrl } from './hooks';
import { Box, ProblemTwoContainer, ProblemTwoWrapper, Title } from './styles';
import { FetchStatus } from '@/models/enums';
import Loading from '@/components/Loading';
import { Div } from '@/designs/common/Div';

const ProblemTwo = () => {
    const { codeFrom, codeTo } = useGetCurrenciesFromUrl();
    const { fetchStatus } = useGetCurrencies();

    return (
        <Page title={`Convert ${codeFrom} to ${codeTo}`}>
            <ProblemTwoWrapper>
                <ProblemTwoContainer>
                    <Title>CURRENCY CONVERTER</Title>
                    <Box>
                        {fetchStatus === FetchStatus.FETCHING ? (
                            <Loading />
                        ) : (
                            <Div>
                                <ErrorBoundary>
                                    <Converter />
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <ConverterFooter />
                                </ErrorBoundary>
                            </Div>
                        )}
                    </Box>
                </ProblemTwoContainer>
            </ProblemTwoWrapper>
        </Page>
    );
};

export default ProblemTwo;
