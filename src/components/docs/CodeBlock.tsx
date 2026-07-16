import React from 'react';

export const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <pre className="w-full overflow-x-auto rounded-md border border-border bg-muted-bg p-4 text-sm">
    <code className="whitespace-pre font-mono text-main-text">{children}</code>
  </pre>
);
