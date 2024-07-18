/* eslint-disable react/react-in-jsx-scope */
import {Stack} from '../../../core-navigations/root.navigation';
import Login from '../screens/login.screen';

export default function LoginStack() {
  const loginRoutes = [
    {
      name: 'loginScreen',
      component: Login,
      screenID: 'LOG-IN',
    },
  ];
  return (
    <Stack.Navigator initialRouteName={'loginScreen'}>
      {loginRoutes?.map(route => {
        return (
          <Stack.Screen
            key={route?.screenID}
            name={route?.name}
            initialParams={{eventId: route?.screenID}}
            component={route?.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
