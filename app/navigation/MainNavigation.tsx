/* =========================================================================
 * NAVIGATION
 * ========================================================================= */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* =========================================================================
* SCREENS
* ========================================================================= */
import { RegisterScreen } from '@screens/register';
import { CommentsScreen } from '@screens/comments';

/* =========================================================================
* TYPES
* ========================================================================= */
import { AppStackParamsList } from './types';

/* =========================================================================
* CONSTANTS
* ========================================================================= */
import {NAVIGATION_NAMES} from './navigationNames';

const Stack = createStackNavigator<AppStackParamsList>();

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={RegisterScreen} 
          name={NAVIGATION_NAMES.RegisterScreen}
        />
        <Stack.Screen 
          component={CommentsScreen}
          name={NAVIGATION_NAMES.CommentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
