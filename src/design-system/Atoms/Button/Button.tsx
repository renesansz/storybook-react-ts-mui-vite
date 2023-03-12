import { Button as MuiButton} from '@mui/material';

import { ButtonProps } from "./Button.types"

export const Button = ({ label, ...forwardedProps }: ButtonProps) => (<MuiButton {...forwardedProps}>{label}</MuiButton>);
