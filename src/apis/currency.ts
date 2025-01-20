import { listCurrencies } from '@/models/constants';
import { ICurrency } from '@/models/interfaces';

export const getCurrenciesAPI = async (): Promise<ICurrency[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(listCurrencies);
        }, 1000);
    });
};
