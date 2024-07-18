/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from '../modules/login/navigation/login.navigation';
import DashboardStack from '../modules/dashboard/navigation/dashboard.navigation';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

export const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
const routes = [
  {
    name: 'loginStack',
    component: LoginStack,
  },
  {
    name: 'dashboardStack',
    component: DashboardStack,
  },
];

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'loginStack'}>
        {routes?.map(route => {
          return (
            <Stack.Screen
              key={route?.name}
              name={route?.name}
              component={route?.component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
