'use client';

type HeadingProperty = {
  warn?: boolean;
  title: string;
  subtitle?: string;
};

export default function Heading({ warn = false, title, subtitle }: HeadingProperty) {
  return (
    <div>
      <h1
        className={`text-h1 font-bold ${warn ? 'text-danger' : 'text-neutral-900 dark:text-neutral-50'}`}
      >
        {title}
      </h1>
      <h2 className="mt-4 text-body text-neutral-900 dark:text-neutral-50">{subtitle}</h2>
    </div>
  );
}
