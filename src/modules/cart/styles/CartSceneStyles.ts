import {ViewStyle} from 'react-native';

interface SelectedStyles {
  container: ViewStyle;
}

interface CartSceneStyles {
  dark: SelectedStyles;
  light: SelectedStyles;
}

const cartSceneStyles: CartSceneStyles = {
  dark: {
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
      backgroundColor: '#9e7009'
    }
  },
  light: {
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: '5%',
      backgroundColor: '#f6f6f6'
    }
  }
};

export default cartSceneStyles;
