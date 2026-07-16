'use client';

type SpaceProperty = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function Space({ size = 'md' }: SpaceProperty) {
  const spaceSize = size === 'sm' ? 'h-2' : size === 'lg' ? 'h-8' : size === 'xl' ? 'h-16' : 'h-4';
  return <div className={spaceSize} />;
}
