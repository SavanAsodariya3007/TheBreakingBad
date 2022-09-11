import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {FavouriteHeader, HomeHeader} from '@components';
import {Home} from '@feature/home';
import {Search} from '@feature/search';
import {Favourites} from '@feature/favourites';

export type RootStackParamsList = {
  home: undefined;
  search: undefined;
  favourites: undefined;
};
export type RootNavigationType = NativeStackNavigationProp<RootStackParamsList>;

const rootStack = createNativeStackNavigator<RootStackParamsList>();
const {Navigator, Screen} = rootStack;

export function Routes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="home">
        <Screen
          name="home"
          component={Home}
          options={{
            header: HomeHeader,
          }}
        />
        <Screen name="search" component={Search} />
        <Screen
          name="favourites"
          component={Favourites}
          options={{
            header: FavouriteHeader,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
