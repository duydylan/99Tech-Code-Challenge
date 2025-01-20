import { APP_TITLE } from '@/models/constants/common';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from './styles';

interface IPage {
    title?: string | null;
    children: ReactNode;
}

const Page = ({ title, children }: IPage) => {
    const defaultTitle = title
        ? APP_TITLE.replace('$title', title)
        : APP_TITLE.replace('$title | ', '');

    return (
        <PageWrapper>
            <Helmet>
                <title>{defaultTitle}</title>
            </Helmet>
            {children}
        </PageWrapper>
    );
};

export default Page;
