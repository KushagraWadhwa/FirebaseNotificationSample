/* eslint-disable react/react-in-jsx-scope */
import {Stack} from '../../../core-navigations/root.navigation';
import LoggedinDashboard from '../screens/loggedin-dashboard.screen';
import ImagePage from '../screens/image-page.screen';

export default function DashboardStack() {
  const dashboardRoutes = [
    {
      name: 'loggedinDashboard',
      component: LoggedinDashboard,
      screenID: 'LOGD-IN-DSBD',
    },
    {
      name: 'imagePageView',
      component: ImagePage,
      screenID: 'STOK-DTLS',
    },
  ];
  return (
    <Stack.Navigator initialRouteName={'loggedinDashboard'}>
      {dashboardRoutes?.map(route => {
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
