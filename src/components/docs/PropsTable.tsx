import React from 'react';

type PropRow = { name: string; type: string; default?: string; desc: string };

export const PropsTable: React.FC<{ rows: PropRow[] }> = ({ rows }) => (
  <div className="w-full overflow-x-auto rounded-card border border-neutral-200 dark:border-neutral-800">
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="bg-neutral-100 dark:bg-neutral-800">
          <th className="px-3 py-2 font-bold text-neutral-900 dark:text-neutral-50">prop</th>
          <th className="px-3 py-2 font-bold text-neutral-900 dark:text-neutral-50">型</th>
          <th className="px-3 py-2 font-bold text-neutral-900 dark:text-neutral-50">デフォルト</th>
          <th className="px-3 py-2 font-bold text-neutral-900 dark:text-neutral-50">説明</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr
            key={r.name}
            className="border-t border-neutral-200 align-top dark:border-neutral-800"
          >
            <td className="whitespace-nowrap px-3 py-2 font-mono text-primary dark:text-primary-400">
              {r.name}
            </td>
            <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {r.type}
            </td>
            <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {r.default ?? '—'}
            </td>
            <td className="px-3 py-2">{r.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
