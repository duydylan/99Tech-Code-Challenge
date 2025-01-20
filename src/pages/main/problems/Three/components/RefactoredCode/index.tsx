import { Div } from '@/designs/common/Div';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Title } from '../../styles';

const RefactoredCode = () => {
    return (
        <Div>
            <Title>Refactored Code</Title>
            <SyntaxHighlighter PreTag="div" children={data} language="javascript" style={dark} />
        </Div>
    );
};

export default RefactoredCode;

const data = `
interface Props extends BoxProps {}

const WalletPage = (props: Props) => {
  const { ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      case "Zilliqa":
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  const sortedBalances = useMemo(() => {
    return balances
      .filter((balance) => getPriority(balance.blockchain) > -99 && balance.amount > 0)
      .sort((lhs, rhs) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
  }, [balances]);

  const rows = useMemo(() => {
    return sortedBalances.map((balance) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
          <WalletRow
            className={classes.row}
            key={balance.currency} 
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.amount.toFixed(2)}
          />
        );
      });
  }, [balances, prices]);

  return <div {...rest}>{rows}</div>;
};

`;
