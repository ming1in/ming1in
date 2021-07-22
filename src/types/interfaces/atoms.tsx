import React from 'react';
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
