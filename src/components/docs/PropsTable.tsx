import React from 'react';

type PropRow = { name: string; type: string; default?: string; desc: string };

export const PropsTable: React.FC<{ rows: PropRow[] }> = ({ rows }) => (
  <div className="w-full overflow-x-auto rounded-md border border-border">
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="bg-muted-bg">
          <th className="px-3 py-2 font-bold text-main-text">prop</th>
          <th className="px-3 py-2 font-bold text-main-text">型</th>
          <th className="px-3 py-2 font-bold text-main-text">デフォルト</th>
          <th className="px-3 py-2 font-bold text-main-text">説明</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-t border-border align-top">
            <td className="whitespace-nowrap px-3 py-2 font-mono text-accent">{r.name}</td>
            <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-fgfade">{r.type}</td>
            <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-fgfade">
              {r.default ?? '—'}
            </td>
            <td className="px-3 py-2">{r.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
