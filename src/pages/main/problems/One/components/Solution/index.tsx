import CodeHighlighter from '@/components/CodeHighlighter';
import { Div } from '@/designs/common/Div';
import { Description, Title } from './styles';

interface ISolution {
    title: string;
    description: string;
    solution: string;
}

function Solution({ title, description, solution }: ISolution) {
    return (
        <Div>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CodeHighlighter children={solution} />
        </Div>
    );
}

export default Solution;
