import theme from '@/assets/styles/theme';
import { ConfigProvider, Select as SelectAntd, SelectProps, ThemeConfig } from 'antd';
import { Label } from '../common/Label';
import { SelectWrapper } from './styles';

interface ISelect<T> extends SelectProps {
    options: SelectProps['options'];
    onChange: (value: T) => void;
    defaultValue?: T;
    value: T;
    minWidth?: string | number;
    label?: string;
}

const Select = <T,>({
    options,
    onChange,
    defaultValue,
    value,
    minWidth,
    label,
    ...rest
}: ISelect<T>) => {
    const themeConfig: ThemeConfig = {
        components: {
            Select: {
                controlOutline: theme.colorPrimary,
                controlItemBgActive: theme.colorPrimary,
                colorBorder: 'transparent',
                borderRadius: 10,
                borderRadiusLG: 10,
                paddingXXS: 0,
                controlOutlineWidth: 0,
                controlHeight: 35,
                fontSize: 18,
                optionPadding: '10px',
                optionActiveBg: theme.colorTertiary,
            },
        },
    };

    return (
        <SelectWrapper>
            {label && <Label>{label}</Label>}
            <ConfigProvider theme={themeConfig}>
                <SelectAntd
                    value={value}
                    defaultValue={defaultValue}
                    options={options}
                    onChange={onChange}
                    getPopupContainer={triggerNode => triggerNode}
                    style={{ minWidth: minWidth ? minWidth : undefined }}
                    {...rest}
                />
            </ConfigProvider>
        </SelectWrapper>
    );
};

export default Select;
