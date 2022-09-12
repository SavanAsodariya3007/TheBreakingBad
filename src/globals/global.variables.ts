import {Dimensions, StyleProp, ViewStyle} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export {screenHeight, screenWidth};

export const columnWrapperStyle: StyleProp<ViewStyle> = {
  marginVertical: 10,
};

export const flex1 = {
  flex: 1,
};
