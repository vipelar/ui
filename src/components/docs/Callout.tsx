import React from 'react';

export const Callout: React.FC<{
  tone?: 'info' | 'caution' | 'warn';
  children: React.ReactNode;
}> = ({ tone = 'info', children }) => {
  const toneClass =
    tone === 'warn'
      ? 'border-bdwarn bg-bgwarn text-txwarn'
      : tone === 'caution'
        ? 'border-bdcaution bg-bgcaution text-txcaution'
        : 'border-bdinfo bg-bginfo text-txinfo';

  return (
    <div className={`rounded-md border px-4 py-3 text-sm leading-relaxed ${toneClass}`}>
      {children}
    </div>
  );
};
