import ErrorBoundary from '@/components/ErrorBoundary';
import Page from '@/components/Page';
import { Divider } from 'antd';
import Explanation from './components/Explanation';
import RefactoredCode from './components/RefactoredCode';
import { ProblemThreeWrapper } from './styles';

const ProblemThree = () => {
    return (
        <Page title="Messy React">
            <ProblemThreeWrapper>
                <ErrorBoundary>
                    <Explanation />
                </ErrorBoundary>
                <Divider />
                <ErrorBoundary>
                    <RefactoredCode />
                </ErrorBoundary>
            </ProblemThreeWrapper>
        </Page>
    );
};

export default ProblemThree;
