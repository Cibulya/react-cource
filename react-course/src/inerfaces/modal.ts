import { ReactNode } from 'react';

export interface ModalWindow {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    id: number;
}
