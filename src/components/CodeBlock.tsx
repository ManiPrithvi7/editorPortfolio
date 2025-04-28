import React from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/github-dark.css'; // Use just one style for testing

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  fileName,
  className = ''
}) => {
  // Register language
  hljs.registerLanguage('javascript', javascript);

  // Highlight code using highlight.js
  const highlightedCode = hljs.highlight(code, { language }).value;

  return (
    <div className={`rounded-md overflow-hidden ${className}`}>
      {fileName && (
        <div className="bg-vscode-sidebar-active px-4 py-2 text-xs font-mono">
          {fileName}
        </div>
      )}
      <div className="bg-vscode-bg p-4 font-mono text-sm overflow-x-auto">
        <pre>
          <code className="language-javascript" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
