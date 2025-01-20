import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICodeHighlighter {
    children: string | string[];
}

const CodeHighlighter = ({ children }: ICodeHighlighter) => {
    return (
        <SyntaxHighlighter PreTag="div" children={children} language="typescript" style={dark} />
    );
};

export default CodeHighlighter;
