'use client';

import { useState, useEffect, useRef } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

export function SolutionButton({ solution }) {
    const [showSolution, setShowSolution] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!showSolution || !containerRef.current) return;

        const processLatex = async () => {
            const katex = (await import('katex')).default;
            const codes = containerRef.current.querySelectorAll('code');

            codes.forEach((code) => {
                const text = code.textContent;
                
                // Check if it's LaTeX
                if (text.includes('$$')) {
                    const latex = text.replace(/`?\$\$(.+)\$\$`?/s, '$1').trim();
                    try {
                        const html = katex.renderToString(latex, {
                            displayMode: true,
                            throwOnError: false
                        });
                        const div = document.createElement('div');
                        div.innerHTML = html;
                        div.style.display = 'block';
                        div.className = 'my-4';
                        code.parentElement.replaceChild(div, code);
                    } catch (e) {
                        console.error('LaTeX render error:', e);
                    }
                } else if (text.startsWith('$') && text.endsWith('$')) {
                    const latex = text.slice(1, -1).trim();
                    try {
                        const html = katex.renderToString(latex, {
                            displayMode: false,
                            throwOnError: false
                        });
                        const span = document.createElement('span');
                        span.innerHTML = html;
                        code.replaceWith(span);
                    } catch (e) {
                        console.error('LaTeX render error:', e);
                    }
                }
            });
        };

        processLatex();
    }, [showSolution]);

    const escapeLatex = (text) => {
        return text.replace(/\$([^\$\n]+?)\$/g, '`$$$1$$`')
                   .replace(/\$\$([\s\S]*?)\$\$/g, '````$$\n$1\n$$````');
    };

    return (
        <>
            <button
                onClick={() => setShowSolution(!showSolution)}
                className="btn btn-lg w-full sm:w-auto"
            >
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && (
                <div className="p-6 bg-green-900/30 border border-green-400 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Solution</h2>
                    <div ref={containerRef} className="prose prose-invert max-w-none">
                        <MarkdownToJsx>{escapeLatex(solution)}</MarkdownToJsx>
                    </div>
                </div>
            )}
        </>
    );
}
