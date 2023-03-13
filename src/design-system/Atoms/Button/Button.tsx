import { Button as MuiButton } from '@mui/material';

import { type ButtonProps } from './Button.types';

export const Button = ({ label, ...forwardedProps }: ButtonProps) => (
  <MuiButton {...forwardedProps}>{label}</MuiButton>
);
