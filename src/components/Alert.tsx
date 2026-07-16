import { Info, AlertTriangle, XCircle } from 'lucide-react';

type AlertProps = {
  type: 'info' | 'warn' | 'caution';
  children?: React.ReactNode;
};

export default function Alert({ children, type }: AlertProps) {
  // ダークモードでも常にライトモードの色（高コントラスト）を使用するようにクラスを固定
  let borderColor = 'border-[#60a5fa]';
  let bgColor = 'bg-[#93c5fd]';
  let textColor = 'text-[#1e40af]';
  let size = 'h-6 w-6';
  let Icon = Info;

  if (type === 'warn') {
    borderColor = 'border-[#f87171]';
    bgColor = 'bg-[#fca5a5]';
    textColor = 'text-[#991b1b]';
    size = 'h-9 w-9';
    Icon = XCircle;
  } else if (type === 'caution') {
    borderColor = 'border-[#fde047]';
    bgColor = 'bg-[#fef08a]';
    textColor = 'text-[#92400e]';
    Icon = AlertTriangle;
  }

  return (
    <div
      className={`flex items-center gap-3 border ${borderColor} ${bgColor} ${textColor} p-4 my-4 rounded shadow-sm`}
    >
      <Icon className={`mt-1 shrink-0 ${size} ${textColor}`} />
      <div className="font-medium">{children}</div>
    </div>
  );
}
