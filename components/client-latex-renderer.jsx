'use client';

import { useEffect, useRef } from 'react';

export function ClientLatexRenderer({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const processLatex = async () => {
            if (!containerRef.current) return;
            
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
    }, []);

    return <div ref={containerRef}>{children}</div>;
}
