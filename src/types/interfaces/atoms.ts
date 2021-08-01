import React from 'react';
import { EButtonSize, EButtonVariants } from '../enums/atoms';
import { IconTypeEnum } from '../enums/IconType';

export interface IImageProps
  extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  tooltip?: string;
  subtext?: string;
}

export interface IIconProps extends IImageProps {
  iconType: IconTypeEnum;
  tooltip?: string;
}

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'outlined' | 'filled' | EButtonVariants;
  size?: 'small' | 'medium' | 'large' | EButtonSize;
  icon?: IconTypeEnum;
}
