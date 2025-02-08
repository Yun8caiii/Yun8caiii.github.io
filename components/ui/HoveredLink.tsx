import React from 'react';

interface HoveredLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const HoveredLink: React.FC<HoveredLinkProps> = ({ href, target, rel, children, ...rest }) => {
  return (
    <a href={href} target={target} rel={rel} {...rest}>
      {children}
    </a>
  );
};

export default HoveredLink;
