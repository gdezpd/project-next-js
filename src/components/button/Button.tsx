import {FC, ReactNode, MouseEvent} from 'react'
import clsx from 'clsx'

import s from './button.module.css'

interface ButtonProps {
    children: ReactNode
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    variant?: 'primary' | 'outline' | 'loading'
}

export const Button: FC<ButtonProps> = ({
                                            children,
                                            className,
                                            onClick,
                                            disabled,
                                            variant = 'primary',
                                        }) => {
    return (
        <button
            className={clsx(s.button, className, s[variant])}
            onClick={onClick}
            disabled={disabled}
            variant={variant}
        >
            {children}
        </button>
    )
}
