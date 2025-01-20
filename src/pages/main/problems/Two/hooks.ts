import { getCurrenciesAPI } from '@/apis/currency';
import { DEFAULT_CURRENCY_CODE } from '@/models/constants';
import { useQuery } from '@tanstack/react-query';
import { sortBy } from 'lodash';
import { useLocation } from 'react-router-dom';

export const useGetCurrencies = () => {
    return useQuery({
        queryKey: ['GET_CURRENCIES'],
        queryFn: async () => {
            const response = await getCurrenciesAPI();

            return sortBy(response, 'currency');
        },
    });
};

export const useConverter = () => {
    const { data: currencies } = useGetCurrencies();

    const calculate = (value: number, codeFrom: string, codeTo: string) => {
        if (!currencies) {
            return 0;
        }

        const priceFrom = currencies.find(currency => currency.currency === codeFrom)?.price;
        const priceTo = currencies.find(currency => currency.currency === codeTo)?.price;

        if (!priceFrom || !priceTo) {
            return 0;
        }

        return parseFloat((value * (priceFrom / priceTo)).toFixed(2));
    };

    const handleInputChange = (
        value: string | number | undefined | null,
        setSource: (amount: number) => void,
        setTarget: (amount: number) => void,
        sourceCode: string,
        targetCode: string
    ) => {
        const final = value ? Number(value) : 0;
        setSource(final);

        const targetValue = calculate(final, sourceCode, targetCode);
        setTarget(targetValue);
    };

    return {
        calculate,
        handleInputChange,
    };
};

export const useGetCurrenciesFromUrl = () => {
    const { pathname } = useLocation();

    const { data: currencies } = useGetCurrencies();

    const codeFromUrl = pathname.split('/')[2] || DEFAULT_CURRENCY_CODE;
    const codeToUrl = pathname.split('/')[3] || DEFAULT_CURRENCY_CODE;

    const codeFrom =
        currencies?.find(currency => currency.currency.toLowerCase() === codeFromUrl)?.currency ||
        DEFAULT_CURRENCY_CODE;
    const codeTo =
        currencies?.find(currency => currency.currency.toLowerCase() === codeToUrl)?.currency ||
        DEFAULT_CURRENCY_CODE;

    return {
        codeFrom,
        codeTo,
    };
};
