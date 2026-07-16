/** ローディング中のプレースホルダー */
export default function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-muted-bg ${className}`} aria-hidden="true" />;
}
