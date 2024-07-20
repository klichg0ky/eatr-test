import {NavigationProp} from '@react-navigation/native';
import {NAVIGATION_NAMES} from './navigationNames';

export type AppStackParamsList = {
  [NAVIGATION_NAMES.CommentsScreen]: undefined;
  [NAVIGATION_NAMES.RegisterScreen]: undefined;
};

export type AppStackNavigation = NavigationProp<AppStackParamsList>;
