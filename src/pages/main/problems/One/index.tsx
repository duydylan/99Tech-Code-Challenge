import Page from '@/components/Page';
import Solution from './components/Solution';
import { ProblemOneWrapper, Title } from './styles';

const ProblemOne = () => {
    return (
        <Page title="Three ways to sum to n">
            <ProblemOneWrapper>
                <Title>Three unique implementations of the sum_to_n function in JavaScript</Title>
                {data.map(({ title, description, solution }) => (
                    <Solution
                        key={title}
                        title={title}
                        description={description}
                        solution={solution}
                    />
                ))}
            </ProblemOneWrapper>
        </Page>
    );
};

export default ProblemOne;

const data = [
    {
        title: '1. Iterative Approach',
        description: 'This approach uses a simple for loop to calculate the sum.',
        solution: `
                var sum_to_n_a = (n) => {
                    let sum = 0;

                    for (let i = 1; i <= n; i++) {
                        sum += i;
                    }

                    return sum;
                };
        `,
    },
    {
        title: '2. Mathematical Formula',
        description: 'This implementation uses the arithmetic progression formula.',
        solution: `
                var sum_to_n_b = (n) => {
                    return (n * (n + 1)) / 2;
                };
        `,
    },
    {
        title: '3. Recursive Approach',
        description: 'This uses recursion to compute the summation.',
        solution: `
                var sum_to_n_c = (n) => {
                    if (n === 1) return 1;
                    return n + sum_to_n(n - 1);
                };
        `,
    },
];
