'use client';

type TextProperty = {
  children?: React.ReactNode;
  size?: 'normal' | 'sm' | 'xl' | 'lg';
  color?: 'gray' | 'blue' | 'red' | 'fade' | 'base' | string;
  className?: string;
  bold?: boolean;
};

export default function Text({
  children,
  size = 'normal',
  color = 'base',
  className = '',
  bold = false,
}: TextProperty) {
  const textSize =
    size === 'sm'
      ? 'text-caption'
      : size === 'xl'
        ? 'text-h2'
        : size === 'lg'
          ? 'text-h4'
          : 'text-body';

  const textColor =
    color === 'gray'
      ? 'text-neutral-600 dark:text-neutral-400'
      : color === 'blue'
        ? 'text-info'
        : color === 'red'
          ? 'text-danger'
          : color === 'fade'
            ? 'text-neutral-500 dark:text-neutral-400'
            : color === 'yellow'
              ? 'text-warning'
              : 'text-neutral-900 dark:text-neutral-50';
  const boldClass = bold ? 'font-bold' : '';

  return <p className={`${textSize} ${textColor} ${boldClass} ${className}`}>{children}</p>;
}
