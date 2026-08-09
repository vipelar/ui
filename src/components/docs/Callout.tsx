import React from 'react';

export const Callout: React.FC<{
  tone?: 'info' | 'caution' | 'warn';
  children: React.ReactNode;
}> = ({ tone = 'info', children }) => {
  const toneClass =
    tone === 'warn'
      ? 'border-danger bg-danger-bg text-danger-text'
      : tone === 'caution'
        ? 'border-warning bg-warning-bg text-warning-text'
        : 'border-info bg-info-bg text-info-text';

  return (
    <div className={`rounded-card border px-4 py-3 text-sm leading-relaxed ${toneClass}`}>
      {children}
    </div>
  );
};
