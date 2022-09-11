import {Dimensions, PixelRatio} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const widthResolution = PixelRatio.getPixelSizeForLayoutSize(
  Dimensions.get('window').width,
);

const theme = {
  fonts: {
    bold: 'Roboto-Bold',
    light: 'Roboto-Light',
    thin: 'Roboto-Thin',
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1BCA75',
    secondary: '#242424',
    placeHolderColor: '#ABABAB',
  },
  fontSize: [
    moderateScale(10, 0.57),
    moderateScale(12, 0.49),
    moderateScale(14, 0.42),
    moderateScale(16, 0.33),
    moderateScale(18, 0.33),
    moderateScale(20, 0.31),
    moderateScale(24, 0.2),
    moderateScale(26, 0.2),
    moderateScale(28, 0.2),
    moderateScale(30, 0.2),
    moderateScale(32, 0.2),
    moderateScale(44, 0.2),
    moderateScale(50, 0.2),
    moderateScale(60, 0.2),
    moderateScale(75, 0.2),
  ],
  spacer:
    widthResolution > 640 // Custom handling for devices below than 640 width resolution
      ? [4, 8, 12, 16, 24, 32, 64, 80, 90]
      : [4, 8, 10, 14, 20, 34, 32, 60, 80],
};

export {theme};
