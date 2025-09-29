import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
  base: 'inline-flex items-center max-w-[500px] hover:cursor-pointer',
  variants: {
    size: {
      large: 'h-[44px] text-base py-[12px] px-[16px] gap-1 rounded-lg',
      medium: 'h-[32px] text-sm py-[6px] px-[12px] gap-1 rounded-lg',
      small: 'h-[28px] text-xs py-[6px] px-[12px] gap-1 rounded-lg',
    },
    design: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    {
      design: ['filled_dark', 'filled_pink'],
      disabled: true,
      class: 'bg- text-',
    },
  ],
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps
  extends ButtonVariants,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string;
  icon?: React.ReactNode;
}

export const Button = ({
  label,
  size = 'medium',
  design = 'default',
  disabled = false,
  icon = undefined,
  ...props
}: ButtonProps): ReactNode => {
  return (
    <button
      data-testid={`button-${label}`}
      className={button({ size: size, design: design, disabled: disabled })}
      {...props}
    >
      {/* optional icon */}
      {icon && <>{icon}</>}

      {/* label */}
      <span>{label}</span>
    </button>
  );
};

Button.displayName = 'Button';
