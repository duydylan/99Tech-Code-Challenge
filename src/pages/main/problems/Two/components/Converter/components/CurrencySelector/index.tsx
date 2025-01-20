import { Image } from '@/designs/common/Image';
import Select from '@/designs/Select';
import { TokenIcon } from '@/models/constants';
import { ICurrency } from '@/models/interfaces';
import { Flex } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { useCallback, useEffect, useState } from 'react';

// Filter `option.value` match the user type `input`
const filterOption = (input: string, option?: DefaultOptionType) => {
    return (option?.value ? String(option?.value) : '').toLowerCase().includes(input.toLowerCase());
};

interface ICurrencySelector {
    data: ICurrency[];
    defaultValue?: string;
    onChange: (value: string) => void;
}

const CurrencySelector = ({ data, defaultValue, onChange }: ICurrencySelector) => {
    const [options, setOptions] = useState<DefaultOptionType[]>([]);
    const [currencySelected, setCurrencySelected] = useState<string>();

    const handleChange = useCallback(
        (value?: string) => {
            setCurrencySelected(value);
            value && onChange(value);
        },
        [onChange]
    );

    useEffect(() => {
        const options: DefaultOptionType[] = [];

        for (const currency of data) {
            options.push({
                label: (
                    <Flex gap={10}>
                        <Image
                            src={currency.icon || TokenIcon}
                            alt={currency.currency}
                            width={24}
                        />
                        {currency.currency}
                    </Flex>
                ),
                value: currency.currency,
            });
        }

        setOptions(options);

        if (defaultValue) {
            setCurrencySelected(defaultValue);
        } else {
            handleChange(options[0].value as string);
        }
    }, [defaultValue, handleChange, data]);

    return (
        <Select
            showSearch
            options={options}
            value={currencySelected}
            onChange={value => handleChange(value)}
            optionFilterProp="children"
            filterOption={filterOption}
            getPopupContainer={triggerNode => triggerNode}
            minWidth={150}
        />
    );
};

export default CurrencySelector;
