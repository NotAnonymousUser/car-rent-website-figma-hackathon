import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-btn transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
        secondary: 'bg-white text-secondary-900 border border-secondary-300 hover:bg-secondary-100 active:bg-secondary-200',
        minimal: 'bg-transparent text-secondary-900 hover:bg-secondary-100 active:bg-secondary-200',
      },
      size: {
        sm: 'p-btn-sm text-sm',
        md: 'p-btn-md text-md',
        lg: 'p-btn-lg text-lg',
      },
      iconPosition: {
        none: '',
        left: 'flex-row gap-2',
        right: 'flex-row-reverse gap-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      iconPosition: 'none',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({
  className,
  variant,
  size,
  icon,
  iconPosition = icon ? 'left' : 'none',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, iconPosition }), className)}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
} 