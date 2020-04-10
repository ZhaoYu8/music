/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'bofang1' | 'bofang';
  size?: number;
  color?: string | string[];
}

export declare const RNIcon: FunctionComponent<Props>;

export default RNIcon;