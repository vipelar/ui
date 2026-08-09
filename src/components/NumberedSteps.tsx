import React from 'react';

const NumberedSteps: React.FC<{ steps: React.ReactNode[] }> = ({ steps }) => (
  <ol className="flex flex-col gap-3">
    {steps.map((step, i) => (
      <li key={i} className="flex items-center gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-badge bg-vipelar/10 text-sm font-bold text-vipelar">
          {i + 1}
        </span>
        <span className="text-neutral-900 dark:text-neutral-50">{step}</span>
      </li>
    ))}
  </ol>
);

export default NumberedSteps;
