import React from 'react';

interface NavLinkProps {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, isScrolled, children, onClick }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`
        transition-all duration-200
        ${isScrolled 
          ? 'text-gray-700 hover:text-primary-600' 
          : 'text-white hover:text-primary-200'
        }
        relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
        after:bg-primary-600 after:scale-x-0 hover:after:scale-x-100
        after:transition-transform after:duration-200
      `}
    >
      {children}
    </a>
  );
};