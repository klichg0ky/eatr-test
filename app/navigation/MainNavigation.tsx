/* =========================================================================
 * NAVIGATION
 * ========================================================================= */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* =========================================================================
* SCREENS
* ========================================================================= */
import { RegisterScreen } from '@screens/register';

/* =========================================================================
* CONSTANTS
* ========================================================================= */
import {NAVIGATION_NAMES} from './navigationNames';


const Stack = createStackNavigator();

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        component={RegisterScreen} 
        name={NAVIGATION_NAMES.RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
