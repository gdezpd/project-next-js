import s from './Badge.module.css';
import {FC, MouseEvent, ReactNode} from "react";

interface BadgeProps {
    children: ReactNode
}

export const Badge: FC<BadgeProps> =({
    children}) => {
    return <span className={s.badge}>{children}</span>;
}

export default Badge;
