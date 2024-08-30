import React from 'react';

interface IconProps {
    className?: string;
    'aria-label'?: string;
}

// Individual icon components
export const FairPricingIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-label={ariaLabel}
    >
        {/* Scales Icon - representing balance */}
        <path d="M12 2L2 8L12 14L22 8L12 2Z" />
        <path d="M12 22V14" />
        <path d="M8 10L12 12L16 10" />
        {/* Check Mark - representing fairness */}
        <path d="M9 18L11 20L15 16" />
        {/* Dollar sign - representing pricing */}
        <path d="M10 6C10 4.895 10.895 4 12 4C13.105 4 14 4.895 14 6C14 7.105 13.105 8 12 8C10.895 8 10 7.105 10 6Z" />
        <path d="M10 10V12" />
        <path d="M14 10V12" />
    </svg>
);


export const QualityProductsIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
        aria-label={ariaLabel}
    >
        <path d="M12 2C11.448 2 11.059 2.382 10.684 2.757L8.292 5.149C8.117 5.324 7.876 5.429 7.616 5.429H4.428C3.623 5.429 3.12 6.26 3.484 7L5.219 10.485C5.343 10.743 5.343 11.011 5.219 11.269L3.484 14.754C3.12 15.494 3.623 16.325 4.428 16.325H7.616C7.876 16.325 8.117 16.431 8.292 16.606L10.684 19C11.059 19.373 11.448 19.757 12 19.757C12.552 19.757 12.941 19.373 13.316 19L15.708 16.606C15.883 16.431 16.124 16.325 16.384 16.325H19.572C20.377 16.325 20.88 15.494 20.516 14.754L18.781 11.269C18.657 11.011 18.657 10.743 18.781 10.485L20.516 7C20.88 6.26 20.377 5.429 19.572 5.429H16.384C16.124 5.429 15.883 5.324 15.708 5.149L13.316 2.757C12.941 2.382 12.552 2 12 2Z" />
    </svg>
);

export const MadeWithLoveIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
        aria-label={ariaLabel}
    >
        <path d="M12 4.248C8.852-0.826 0-0.384 0 5.754 0 8.244 2.544 11.554 6 14.936 8.08 16.842 9.836 18.354 12 20.624 14.164 18.354 15.92 16.842 18 14.936 21.456 11.554 24 8.244 24 5.754 24-0.384 15.148-0.826 12 4.248Z" />
    </svg>
);

export const ReturnsIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
        aria-label={ariaLabel}
    >
        <path d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C8.042 22 4.651 19.307 3.346 15.622L4.748 14.878C5.879 18.18 8.694 20 12 20C16.411 20 20 16.411 20 12C20 7.589 16.411 4 12 4C9.268 4 6.835 5.635 5.74 8.063L8 8.063V10.063H2V4.063H4V5.375C5.506 2.446 8.512 1 12 1 17.514 1 22 5.486 22 11S17.514 21 12 21C6.486 21 2 16.514 2 11C2 10.449 2.449 10 3 10S4 10.449 4 11C4 15.065 7.336 18 11 18C14.864 18 18 14.865 18 11S14.864 4 11 4C7.139 4 4 7.135 4 11C4 11.551 4.448 12 5 12C5.552 12 6 11.551 6 11C6 8.24 8.239 6 11 6C13.761 6 16 8.24 16 11C16 13.761 13.761 16 11 16C8.24 16 6 13.761 6 11H8C8 13.209 9.791 15 12 15C14.209 15 16 13.209 16 11C16 8.791 14.209 7 12 7 9.791 7 8 8.791 8 11 8 11.551 7.552 12 7 12C6.448 12 6 11.551 6 11C6 7.687 8.687 5 12 5S18 7.687 18 11 15.313 17 12 17C8.686 17 6 14.313 6 11C6 9.673 6.446 8.45 7.189 7.523C7.46 7.201 7.48 6.748 7.201 6.477C6.922 6.206 6.469 6.186 6.199 6.467 5.268 7.455 5 8.696 5 10C5 13.957 8.042 17 12 17C15.957 17 19 13.957 19 11S15.957 4 12 4Z" />
    </svg>
);

export const FastDeliveriesIcon: React.FC<IconProps> = ({ className, 'aria-label': ariaLabel }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={className}
        aria-label={ariaLabel}
    >
        <path d="M3 2C2.447 2 2 2.447 2 3V17C2 17.553 2.447 18 3 18H7C7.553 18 8 17.553 8 17V14H16V17C16 17.553 16.447 18 17 18H21C21.553 18 22 17.553 22 17V11C22 10.866 21.969 10.735 21.909 10.618L18.455 3.618C18.225 3.138 17.731 2.828 17.179 2.828H8.821C8.269 2.828 7.775 3.138 7.545 3.618L4.091 10.618C4.031 10.735 4 10.866 4 11V14C4 14.553 4.447 15 5 15C5.553 15 6 14.553 6 14V11H6.828L9 6.382L11.172 11H12V14H12C12 14.553 12.447 15 13 15C13.553 15 14 14.553 14 14H14.002V11H19V14H16C16 14.553 16.447 15 17 15C17.553 15 18 14.553 18 14V11H12.001C12 11 12.001 11 12.002 11H12V8.828L10.828 11H10V14C10 14.553 9.553 15 9 15C8.447 15 8 14.553 8 14H8.002V11.828L6 6.382 3.828 11H3V17C3 17.553 2.447 18 2 18C1.447 18 1 17.553 1 17V3C1 2.447 1.447 2 2 2H3ZM15 7V5H17V7H15ZM19 7H21V9H19V7ZM5 17C5.553 17 6 16.553 6 16C6 15.447 5.553 15 5 15C4.447 15 4 15.447 4 16C4 16.553 4.447 17 5 17ZM19 17C19.553 17 20 16.553 20 16C20 15.447 19.553 15 19 15C18.447 15 18 15.447 18 16C18 16.553 18.447 17 19 17Z" />
    </svg>
);

// Export all icons together
export const Icons = {
    FairPricingIcon,
    QualityProductsIcon,
    MadeWithLoveIcon,
    ReturnsIcon,
    FastDeliveriesIcon,
};
