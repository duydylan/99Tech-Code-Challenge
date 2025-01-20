import CodeHighlighter from '@/components/CodeHighlighter';
import { List } from 'antd';
import { ReactNode } from 'react';
import { SectionWrapper, Title } from './styles';

interface ISection {
    title: ReactNode;
    data: ReactNode[];
    code: string;
}

const Section = ({ title, data, code }: ISection) => {
    return (
        <SectionWrapper>
            <List
                header={<Title>{title}</Title>}
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <CodeHighlighter children={code} />
        </SectionWrapper>
    );
};

export default Section;
