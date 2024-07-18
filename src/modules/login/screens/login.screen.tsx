import {Dimensions, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {TextInputField, Button} from '../../../core-components/atoms';
import {Styles} from '../styles/login.style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {showMessage} from 'react-native-flash-message';
import {Users} from '../models/users';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

interface LoginProps {
  navigation?: NavigationProp<ParamListBase>;
}

const Login = (props: LoginProps) => {
  const [loginCredential, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const onLogin = () => {
    const foundUser = Users.filter(
      item =>
        loginCredential?.username === item.username &&
        loginCredential?.password === item.password,
    );
    if (foundUser?.length > 0) {
      //on success
      props?.navigation?.navigate('dashboardStack', {
        screen: 'loggedinDashboard',
      });
      setLoginCredentials({
        username: '',
        password: '',
      });
    } else {
      //on failure
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: 'Wrong Credentials',
      });
    }
  };

  return (
    <View style={Styles.flex1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.mainContainer}>
        <View style={Styles.inputView}>
          <TextInputField
            title={'Username'}
            placeholderText={'Enter Username'}
            value={loginCredential?.username}
            onChangeText={text => {
              setLoginCredentials({...loginCredential, username: text});
            }}
          />
        </View>
        <View style={Styles.inputView}>
          <TextInputField
            isMasked
            title={'Password'}
            placeholderText={'Enter Password'}
            value={loginCredential?.password}
            onChangeText={text => {
              setLoginCredentials({...loginCredential, password: text});
            }}
          />
        </View>
        <View style={Styles.buttonView}>
          <Button
            title={'Login'}
            onPress={onLogin}
            disable={
              loginCredential?.username?.length === 0 ||
              loginCredential?.password?.length === 0
            }
          />
        </View>
      </ScrollView>
      <FlashMessage position={'top'} />
    </View>
  );
};

export default Login;
