import React, { SVGProps } from 'react';

export const StartIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  children,
  ...rest
}) => (
  <svg
    className="govuk-button__start-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="17.5"
    height="19"
    viewBox="0 0 33 40"
    role="presentation"
    focusable="false"
    {...rest}
  >
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    {children}
  </svg>
);