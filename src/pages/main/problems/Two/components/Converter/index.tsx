import Input from '@/designs/Input';
import { DEFAULT_AMOUNT_FROM, DEFAULT_CURRENCY_CODE } from '@/models/constants';
import {
    useConverter,
    useGetCurrencies,
    useGetCurrenciesFromUrl,
} from '@/pages/main/problems/Two/hooks';
import { PATH_MAIN } from '@/routes/paths';
import { InputNumberProps, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrencySelector from './components/CurrencySelector';
import ExchangeIcon from './components/ExchangeIcon';
import { ConverterWrapper } from './styles';

const Converter = () => {
    const [amountFrom, setAmountFrom] = useState(DEFAULT_AMOUNT_FROM);
    const [amountTo, setAmountTo] = useState(0);
    const [isInputChange, setIsInputChange] = useState(false);

    const navigate = useNavigate();

    const { data: currencies } = useGetCurrencies();
    const { calculate, handleInputChange } = useConverter();
    const { codeFrom, codeTo } = useGetCurrenciesFromUrl();

    const onChangeInputFrom: InputNumberProps['onChange'] = value => {
        setIsInputChange(true);
        handleInputChange(value, setAmountFrom, setAmountTo, codeFrom, codeTo);
    };

    const onChangeInputTo: InputNumberProps['onChange'] = value => {
        setIsInputChange(true);
        handleInputChange(value, setAmountTo, setAmountFrom, codeTo, codeFrom);
    };

    const setCodeFrom = (code: string) => {
        setIsInputChange(false);
        navigate(`${PATH_MAIN.PROBLEM.TWO}/${code.toLowerCase()}/${codeTo.toLowerCase()}`);
    };

    const setCodeTo = (code: string) => {
        setIsInputChange(false);
        navigate(`${PATH_MAIN.PROBLEM.TWO}/${codeFrom.toLowerCase()}/${code.toLowerCase()}`);
    };

    const handleSwap = () => {
        navigate(`${PATH_MAIN.PROBLEM.TWO}/${codeTo.toLowerCase()}/${codeFrom.toLowerCase()}`);
    };

    useEffect(() => {
        if (!isInputChange) {
            const amountTo = calculate(amountFrom, codeFrom, codeTo);

            setAmountTo(amountTo);
        }
    }, [isInputChange, amountFrom, codeFrom, codeTo, calculate]);

    return (
        <ConverterWrapper>
            {currencies && (
                <>
                    <Input
                        label="Amount"
                        autoFocus
                        value={amountFrom}
                        onChange={onChangeInputFrom}
                        addonAfter={
                            <CurrencySelector
                                data={currencies}
                                defaultValue={codeFrom || DEFAULT_CURRENCY_CODE}
                                onChange={setCodeFrom}
                            />
                        }
                    />
                    <Tooltip title="Swap">
                        <ExchangeIcon onClick={handleSwap} />
                    </Tooltip>
                    <Input
                        label="Converted to"
                        value={amountTo}
                        onChange={onChangeInputTo}
                        addonAfter={
                            <CurrencySelector
                                data={currencies}
                                defaultValue={codeTo || DEFAULT_CURRENCY_CODE}
                                onChange={setCodeTo}
                            />
                        }
                    />
                </>
            )}
        </ConverterWrapper>
    );
};

export default Converter;
