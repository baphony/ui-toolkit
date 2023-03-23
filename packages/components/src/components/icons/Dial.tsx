import * as React from 'react';
import { SVGProps } from 'react';
const SvgDial = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="ICON_DIAL"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M4.002 1.5A1.5 1.5 0 1 1 1 1.5a1.5 1.5 0 0 1 3 0ZM9.005 1.5a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0ZM12.507 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4.002 6.5A1.5 1.5 0 1 1 1 6.5a1.5 1.5 0 0 1 3 0ZM12.507 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4.002 11.5A1.5 1.5 0 1 1 1 11.5a1.5 1.5 0 0 1 3 0ZM6.503 6a1 1 0 0 1 2.001 0v3.093c3.031.291 4.856 1.189 5.606 1.641.26.157.4.444.39.747a12.836 12.836 0 0 1-.755 3.95c-.132.354-.477.569-.856.569H8.005a1.24 1.24 0 0 1-.88-.364L5.367 13.88a1.242 1.242 0 0 1 0-1.758l1.136-1.136V6Z" />
  </svg>
);
export default SvgDial;
