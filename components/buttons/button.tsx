import React from 'react'
import cn from '@/utils/cn'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light'
  icon?: React.ReactNode
}

const Button: React.FC<Props> = ({
  children,
  className,
  icon,
  variant = 'light',
  ...props
}) => {
  return (
    <button
      className={cn(
        'group flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 sm:text-base',
        variant === 'light' && 'bg-white text-color-dark-blue',
        className,
      )}
      {...props}
    >
      <div className="parent relative h-6 overflow-hidden transition-all duration-300">
        <span className="opacity-0">{children}</span>
        <span className="absolute left-0 translate-y-0 transition-all duration-300 group-hover:-translate-y-10">
          {children}
        </span>
        <span className="absolute left-0 translate-y-10 transition-all duration-300 group-hover:translate-y-0">
          {children}
        </span>
      </div>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  )
}

export default Button
