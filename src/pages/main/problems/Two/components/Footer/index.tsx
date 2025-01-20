import { DEFAULT_AMOUNT_FROM } from '@/models/constants';
import { formatNumber } from '@/utils/currency';
import { Flex, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { useConverter, useGetCurrenciesFromUrl } from '../../hooks';
import { ConverterFooterWrapper, ExchangeRate, Price, Time } from './styles';

const ConverterFooter = () => {
    const { calculate } = useConverter();
    const { codeFrom, codeTo } = useGetCurrenciesFromUrl();

    const defaultAmountTo = calculate(DEFAULT_AMOUNT_FROM, codeFrom, codeTo);

    const timeString = dayjs().format('MMMM D [at] h:mm A');

    return (
        <ConverterFooterWrapper>
            <ExchangeRate>
                {formatNumber(DEFAULT_AMOUNT_FROM)} {codeFrom} ={' '}
                <Price>{formatNumber(defaultAmountTo)}</Price> {codeTo}
            </ExchangeRate>
            <Flex gap={10} align="center">
                <Time>Updated: {timeString}</Time>
                <Tooltip
                    title={`Price and conversion rate data on this page last updated on ${timeString}`}
                >
                    <svg width="16" height="16" fill="currentColor">
                        <path d="M9 11a1 1 0 11-2 0 1 1 0 012 0zM10.443 4.8A2.3 2.3 0 007.3 3.96L5.136 5.21l.8 1.385L8.1 5.345a.7.7 0 01.7 1.212l-2.165 1.25.8 1.386L9.6 7.943a2.3 2.3 0 00.842-3.142z"></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
                        ></path>
                    </svg>
                </Tooltip>
            </Flex>
        </ConverterFooterWrapper>
    );
};

export default ConverterFooter;
