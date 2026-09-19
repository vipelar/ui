'use client';

import { useId, type InputHTMLAttributes } from 'react';

type FieldProperty = {
  label: string;
  error?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Field({ label, error, hint, className = '', id, ...rest }: FieldProperty) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;

  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ');
  const borderColor = error ? 'border-danger' : 'border-neutral-200 dark:border-neutral-800';

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-caption font-bold text-neutral-900 dark:text-neutral-50"
      >
        {label}
      </label>

      {hint && (
        <p id={hintId} className="mb-2 text-caption text-neutral-500 dark:text-neutral-400">
          {hint}
        </p>
      )}

      <input
        {...rest}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`w-full rounded-input border ${borderColor} bg-white px-4 py-3 text-body text-neutral-900 transition-colors placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus-visible:outline-primary-400 ${className}`}
      />

      {error && (
        <p id={errorId} className="mt-2 text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
