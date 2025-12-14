import MarkdownToJsx from 'markdown-to-jsx';
import { CodeBlock } from './code-block';
import { ClientLatexRenderer } from './client-latex-renderer';

export function Markdown({ content, className }) {
    const HighlightedCodeBlock = ({ children }) => {
        const { props } = children;
        const matchLanguage = /lang-(\w+)/.exec(props?.className || '');
        return (
            <CodeBlock
                code={props?.children}
                lang={matchLanguage ? matchLanguage[1] : undefined}
                title={props?.title}
            />
        );
    };

    // Escape LaTeX so it's not processed as markdown
    const escapeLatex = (text) => {
        // Replace $ with a placeholder that markdown-to-jsx won't process
        return text.replace(/\$([^\$\n]+?)\$/g, '`$$$1$$`')
                   .replace(/\$\$([\s\S]*?)\$\$/g, '````$$\n$1\n$$````');
    };

    const escapedContent = escapeLatex(content);

    return (
        <ClientLatexRenderer>
            <div className={['markdown', className].filter(Boolean).join(' ')}>
                <MarkdownToJsx
                    options={{
                        overrides: {
                            pre: HighlightedCodeBlock
                        }
                    }}
                >
                    {escapedContent}
                </MarkdownToJsx>
            </div>
        </ClientLatexRenderer>
    );
}
