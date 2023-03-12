import { ButtonProps as MuiButtonProps } from '@mui/material';

type BaseButtonProps = Omit<MuiButtonProps, "children">;

export interface ButtonProps extends BaseButtonProps {
  /**
   * Button text to display.
   */
  label?: string;
}
