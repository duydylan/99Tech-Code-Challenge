import theme from '@/assets/styles/theme';
import { formatNumber, parseNumber } from '@/utils/currency';
import { ConfigProvider, InputNumberProps, ThemeConfig } from 'antd';
import { Label } from '../common/Label';
import { InputStyled, InputWrapper } from './styles';

interface IInput extends InputNumberProps {
    label?: string;
}

const Input = ({ label, ...rest }: IInput) => {
    const themeConfig: ThemeConfig = {
        components: {
            InputNumber: {
                activeBorderColor: theme.colorText,
                hoverBorderColor: theme.colorText,
                inputFontSize: 26,
                borderRadius: 10,
                paddingBlock: 10,
            },
        },
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Allow only numbers, backspace, delete, arrow keys, and tab
        const key = e.key;
        if (
            !/[0-9]/.test(key) &&
            key !== 'Backspace' &&
            key !== 'ArrowLeft' &&
            key !== 'ArrowRight' &&
            key !== 'Delete' &&
            key !== '.'
        ) {
            e.preventDefault(); // Prevent non-numeric key presses
        }
    };

    return (
        <InputWrapper>
            {label && <Label>{label}</Label>}
            <ConfigProvider theme={themeConfig}>
                <InputStyled
                    min={0}
                    max={1000000000}
                    onKeyDown={handleKeyDown}
                    formatter={value => formatNumber(value)}
                    parser={value => parseNumber(value)}
                    {...rest}
                />
            </ConfigProvider>
        </InputWrapper>
    );
};

export default Input;
