import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../styles/loggedin-dashboard.styles';
// import actions from '../../../../redux/actions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {colors} from '../../../core-constants/colors';
import Video from 'react-native-video';

interface DashboardProps {
  navigation?: NavigationProp<ParamListBase>;
}

const LoggedinDashboard = (props: DashboardProps) => {
  const [buttonSelected, setButtonSelected] = useState(0);
  const buttonWidth = Dimensions.get('screen').width / 2.5;
  return (
    <ScrollView style={Styles.mainContainer}>
      <View style={Styles.box}>
        <Text style={Styles.statusText}>{'SYSTEM STATUS'}</Text>
        <Text style={Styles.contact}>{'C'}</Text>
      </View>
      <View>
        <Text style={Styles.network}>{'Network: '}</Text>
        <Text style={Styles.server}>{'Server: '}</Text>
        <Text style={Styles.cameras}>{'Cameras: '}</Text>
      </View>
      <View style={Styles.buttonView}>
        <View style={Styles.buttonRow1}>
          <TouchableOpacity
            style={{
              borderColor: buttonSelected === 1 ? colors.green : colors.red,
              width: buttonWidth,
              backgroundColor:
                buttonSelected === 1 ? 'rgb(60, 169, 108)' : 'rgb(255, 96, 77)',
              padding: 10,
            }}
            onPress={() => {
              setButtonSelected(1);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Camera 1'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: buttonSelected === 2 ? colors.green : colors.red,
              width: buttonWidth,
              backgroundColor:
                buttonSelected === 2 ? 'rgb(60, 169, 108)' : 'rgb(255, 96, 77)',
              padding: 10,
            }}
            onPress={() => {
              setButtonSelected(2);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Camera 2'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonRow2}>
          <TouchableOpacity
            style={{
              borderColor: buttonSelected === 3 ? colors.green : colors.red,
              width: buttonWidth,
              backgroundColor:
                buttonSelected === 3 ? 'rgb(60, 169, 108)' : 'rgb(255, 96, 77)',
              padding: 10,
            }}
            onPress={() => {
              setButtonSelected(3);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Camera 3'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: buttonSelected === 4 ? colors.green : colors.red,
              width: buttonWidth,
              backgroundColor:
                buttonSelected === 4 ? 'rgb(60, 169, 108)' : 'rgb(255, 96, 77)',
              padding: 10,
            }}
            onPress={() => {
              setButtonSelected(4);
              props?.navigation?.navigate('imagePageView');
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Camera 4'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {buttonSelected !== 0 && (
        <View
          style={{
            height: Dimensions.get('screen').height / 3.5,
            borderColor: colors.white,
            borderWidth: buttonSelected === 1 ? 1 : 0,
            marginTop: 30,
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          {buttonSelected === 1 ? (
            <Text
              style={{
                color: colors.white,
                textAlign: 'center',
                width: '50%',
                marginTop: 30,
              }}>
              {'SYSTEM STATUS IS REMOTLY MONITORED'}
            </Text>
          ) : buttonSelected === 2 ? (
            <Image
              height={Dimensions.get('screen').height / 4}
              width={Dimensions.get('screen').width}
              source={{
                uri: 'https://www.shutterstock.com/shutterstock/photos/2447239511/display_1500/stock-vector-realistic-white-cloud-or-fire-smoke-in-the-sky-and-vector-weather-element-on-transparent-background-2447239511.jpg',
              }}
              style={{paddingHorizontal: 10}}
            />
          ) : buttonSelected === 3 ? (
            <Video
              source={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              controls
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            />
          ) : null}
        </View>
      )}
    </ScrollView>
  );
};

export default LoggedinDashboard;
