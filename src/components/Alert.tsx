import { Info, AlertTriangle, XCircle } from 'lucide-react';

type AlertProps = {
  type: 'info' | 'warn' | 'caution';
  children?: React.ReactNode;
};

export default function Alert({ children, type }: AlertProps) {
  let borderColor = 'border-info';
  let bgColor = 'bg-info-bg';
  let textColor = 'text-info-text';
  let size = 'h-6 w-6';
  let Icon = Info;

  if (type === 'warn') {
    borderColor = 'border-danger';
    bgColor = 'bg-danger-bg';
    textColor = 'text-danger-text';
    size = 'h-9 w-9';
    Icon = XCircle;
  } else if (type === 'caution') {
    borderColor = 'border-warning';
    bgColor = 'bg-warning-bg';
    textColor = 'text-warning-text';
    Icon = AlertTriangle;
  }

  return (
    <div
      className={`flex items-center gap-3 border ${borderColor} ${bgColor} ${textColor} my-4 rounded-card p-4 shadow-sm`}
    >
      <Icon className={`mt-1 shrink-0 ${size} ${textColor}`} />
      <div className="font-medium">{children}</div>
    </div>
  );
}
