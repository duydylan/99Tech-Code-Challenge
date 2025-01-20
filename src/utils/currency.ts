export const formatNumber = (value: string | number | undefined): string => {
    if (value == null) return '';
    const [integer, decimal] = value.toString().split('.');
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas
    return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
};

export const parseNumber = (value: string | undefined): string => {
    if (!value) return '';
    return value.replace(/,/g, ''); // Remove commas
};
