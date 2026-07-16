'use client';

type HeadingProperty = {
  warn?: boolean;
  title: string;
  subtitle?: string;
};

export default function Heading({ warn = false, title, subtitle }: HeadingProperty) {
  return (
    <div>
      <h1 className={`text-5xl font-bold ${warn ? 'text-red-500' : 'text-foreground'}`}>{title}</h1>
      <h2 className="mt-4 text-lg text-foreground">{subtitle}</h2>
    </div>
  );
}
