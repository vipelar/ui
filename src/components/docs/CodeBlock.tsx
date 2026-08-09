import React from 'react';

export const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <pre className="w-full overflow-x-auto rounded-card border border-neutral-200 bg-neutral-100 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-800">
    <code className="whitespace-pre font-mono text-neutral-900 dark:text-neutral-50">
      {children}
    </code>
  </pre>
);
