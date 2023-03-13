import { type ButtonProps as MuiButtonProps } from '@mui/material';

type BaseButtonProps = Pick<
  MuiButtonProps,
  | 'ref'
  | 'variant'
  | 'color'
  | 'disabled'
  | 'disableRipple'
  | 'endIcon'
  | 'startIcon'
  | 'href'
  | 'size'
  | 'tabIndex'
  | 'fullWidth'
  | 'onClick'
>;

export interface ButtonProps extends BaseButtonProps {
  /**
   * Button text to display.
   */
  label?: string;
}
