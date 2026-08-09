export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-input bg-neutral-100 dark:bg-neutral-800 ${className}`}
      aria-hidden="true"
    />
  );
}
