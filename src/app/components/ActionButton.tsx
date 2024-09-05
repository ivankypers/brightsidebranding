"use client"

import React from 'react';
import styles from '../styles/ActionButton.module.scss'

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const ActionButton :React.FC<ButtonProps> = ({text, onClick}) => {
    return (
    <button className={styles.actionButton} onClick={onClick}>
        {text}
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"
             fill="none">
            <path
                d="M14.5 0.999999C14.5 0.723858 14.2761 0.5 14 0.499999L9.5 0.5C9.22386 0.5 9 0.723857 9 1C9 1.27614 9.22386 1.5 9.5 1.5L13.5 1.5L13.5 5.5C13.5 5.77614 13.7239 6 14 6C14.2761 6 14.5 5.77614 14.5 5.5L14.5 0.999999ZM1.35355 14.3536L14.3536 1.35355L13.6464 0.646446L0.646447 13.6464L1.35355 14.3536Z"
                fill="white"/>
        </svg>
    </button>
)
}

export default ActionButton;