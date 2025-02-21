import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container Component
 * 
 * A responsive container that maintains consistent spacing and max-width across breakpoints.
 * Implements a fluid padding system:
 * - Mobile: 16px padding (px-4)
 * - Tablet: 24px padding (sm:px-6)
 * - Desktop: 32px padding (lg:px-8)
 * 
 * @param children - Content to be wrapped by the container
 * @param className - Additional CSS classes for customization
 */
export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`
    container mx-auto px-4 sm:px-6 lg:px-8
    ${className || ''}
  `}>
    {children}
  </div>
); 