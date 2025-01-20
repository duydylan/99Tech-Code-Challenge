import { Div } from '@/designs/common/Div';
import { Typography } from 'antd';
import { Title } from '../../styles';
import Section from './components/Section';

const { Text } = Typography;

const Explanation = () => {
    return (
        <Div>
            <Title>Computational Inefficiencies and Anti-patterns</Title>
            {data.map(({ title, data, code }, index) => (
                <Section key={index} title={title} data={data} code={code} />
            ))}
        </Div>
    );
};

export default Explanation;

const data = [
    {
        title: <Div>1. Unused Interfaces</Div>,
        data: [
            <Div>
                The <Text code>FormattedWalletBalance</Text> interface is declared but not used
                meaningfully. The <Text code>WalletBalance</Text> interface should be declared in
                the <Text code>useWalletBalances</Text> hook.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> This increases code clutter and reduces maintainability.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Remove the unused interface or refactor the code to use it
                where applicable.
            </Div>,
        ],
        code: `
            interface WalletBalance {
                currency: string;
                amount: number;
            }
            interface FormattedWalletBalance {
                currency: string;
                amount: number;
                formatted: string;
            }
        `,
    },
    {
        title: <Div>2. Unnecessary Wrapping of Component Props</Div>,
        data: [
            <Div>
                <Text code> {`{children, ...rest}`}</Text> is extracted from <Text code>props</Text>
                , but <Text code>children</Text> is not used in the component.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> This adds unnecessary complexity and creates unused
                variables.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Remove the children destructuring.
            </Div>,
        ],
        code: `
            const { children, ...rest } = props;
        `,
    },
    {
        title: (
            <Div>
                3. Use type <Text code>any</Text> for <Text code>blockchain</Text> expression
            </Div>
        ),
        data: [
            <Div>
                In switch statement, the <Text code>blockchain</Text> has type <Text code>any</Text>
                , even through all values are of type <Text code>string</Text>.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> It can have significant impacts on the quality,
                maintainability, and reliability of code.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Use type <Text code>string</Text> instead of{' '}
                <Text code>any</Text>.
            </Div>,
        ],
        code: `
            const getPriority = (blockchain: any): number
        `,
    },
    {
        title: (
            <Div>
                4. Redundant <Text code>useMemo</Text> Dependencies
            </Div>
        ),
        data: [
            <Div>
                The <Text code>useMemo</Text> hook includes <Text code>prices</Text> in its
                dependency array, but <Text code>prices</Text> is not used in the computation of{' '}
                <Text code>sortedBalances</Text>.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> This causes unnecessary recalculations when{' '}
                <Text code>prices</Text>
                change, even though <Text code>prices</Text> are not involved in filtering or
                sorting balances.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Remove <Text code>prices</Text> from the dependency array.
            </Div>,
        ],
        code: `
            const sortedBalances = useMemo(() => {
                // ...
            }, [balances, prices]
        `,
    },
    {
        title: (
            <Div>
                5. Incorrect <Text code>lhsPriority</Text> Variable
            </Div>
        ),
        data: [
            <Div>
                The variable <Text code>lhsPriority</Text> is not declared in the{' '}
                <Text code>filter</Text> function within <Text code>useMemo</Text>.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> The code will throw a <Text code>ReferenceError</Text>,
                making it non-functional.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Replace <Text code>lhsPriority</Text> with{' '}
                <Text code>balancePriority</Text>, which is the correctly scoped variable.
            </Div>,
        ],
        code: `
            const sortedBalances = useMemo(() => {
                return balances.filter((balance: WalletBalance) => {
                    const balancePriority = getPriority(balance.blockchain);
                    if (lhsPriority > -99) { // ReferenceError: lhsPriority is not defined
                        if (balance.amount <= 0) {
                        return true;
                        }
                    }
                    return false;
                // ...
            }, [balances, prices]
        `,
    },
    {
        title: <Div>6. Inefficient Filtering and Sorting Logic</Div>,
        data: [
            <Div>
                The <Text code>filter</Text> and <Text code>sort</Text> operations are chained
                together, but the filtering condition is unclear and convoluted (e.g.,{' '}
                <Text code>{`balancePriority > -99`}</Text> is redundant because the default
                priority is <Text code>-99</Text>).
            </Div>,
            <Div>
                <Text strong>Impact:</Text> The logic is inefficient and difficult to read, leading
                to unnecessary iterations.
            </Div>,
            <Div>
                <Text strong>Fix:</Text>Simplify the logic by ensuring the filter condition is
                meaningful and avoiding redundant checks.
            </Div>,
        ],
        code: `
            const sortedBalances = useMemo(() => {
                return balances.filter((balance: WalletBalance) => {
                    const balancePriority = getPriority(balance.blockchain);
                    if (lhsPriority > -99) {
                        if (balance.amount <= 0) {
                        return true;
                        }
                    }
                    return false;
                // ...
            }, [balances, prices]
        `,
    },
    {
        title: (
            <Div>
                7. Mapping <Text code>sortedBalances</Text> Twice
            </Div>
        ),
        data: [
            <Div>
                <Text code>sortedBalances</Text> is mapped twice, first to create{' '}
                <Text code>formattedBalances</Text> and again to create <Text>rows</Text>.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> This results in redundant computations, as the same data
                structure is transformed multiple times.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Combine the mapping operations into one loop to reduce
                computation.
            </Div>,
        ],
        code: `
            const formattedBalances = sortedBalances.map
            const rows = sortedBalances.map
        `,
    },
    {
        title: (
            <Div>
                8. Index Used as <Text code>key</Text> in JSX
            </Div>
        ),
        data: [
            <Div>
                The <Text code>index</Text> is used as the <Text code>key</Text> for{' '}
                <Text code>WalletRow</Text>.
            </Div>,
            <Div>
                <Text strong>Impact:</Text> Using <Text code>index</Text> as a key can cause React
                to improperly re-render components when the order of items changes.
            </Div>,
            <Div>
                <Text strong>Fix:</Text> Use a unique property from <Text code>balance</Text> (e.g.,{' '}
                <Text code>currency</Text>) as the key.
            </Div>,
        ],
        code: `
            <WalletRow 
                key={index}
                // ...
            />
        `,
    },
];
