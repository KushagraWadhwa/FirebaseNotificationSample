import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from '../styles/image-page.styles';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {colors} from '../../../core-constants/colors';

interface ImagePageProps {
  navigation?: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      title: string;
      subtext: string;
      stockPrice: number;
      changePercent: number;
      increased: boolean;
    };
  }>;
}

const ImagePage = (props: ImagePageProps) => {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const buttonWidth = Dimensions.get('screen').width / 2.5;
  return (
    <ScrollView style={{backgroundColor: colors.black}}>
      <View>
        <Text style={{color: colors.red, marginHorizontal: 10, fontSize: 20}}>
          {'LIVE Alert'}
        </Text>
        {!showVideo1 ? (
          <Image
            height={Dimensions.get('screen').height / 4}
            width={Dimensions.get('screen').width}
            source={{
              uri: 'https://www.shutterstock.com/shutterstock/photos/2336393339/display_1500/stock-vector-realistic-isolated-cloud-on-transparent-background-vector-set-of-realistic-isolated-fluffy-cloud-2336393339.jpg',
            }}
            style={{paddingHorizontal: 10}}
          />
        ) : (
          <View />
        )}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderColor: colors.green,
              width: buttonWidth,
              backgroundColor: 'rgb(60, 169, 108)',
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              setShowVideo1(false);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Attend'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: colors.red,
              width: buttonWidth,
              backgroundColor: 'rgb(255, 96, 77)',
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              setShowVideo1(true);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Video'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: colors.red,
            marginHorizontal: 10,
            fontSize: 20,
            marginTop: 30,
          }}>
          {'Actioned Alert'}
        </Text>
        {!showVideo2 ? (
          <Image
            height={Dimensions.get('screen').height / 4}
            width={Dimensions.get('screen').width}
            source={{
              uri: 'https://www.shutterstock.com/shutterstock/photos/1724356075/display_1500/stock-vector-vector-cloud-on-a-transparent-background-realistic-vector-drawing-gradient-mesh-eps-1724356075.jpg',
            }}
            style={{paddingHorizontal: 10}}
          />
        ) : (
          <View />
        )}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderColor: colors.green,
              width: buttonWidth,
              backgroundColor: 'rgb(60, 169, 108)',
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              setShowVideo2(false);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Attend'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: colors.red,
              width: buttonWidth,
              backgroundColor: 'rgb(255, 96, 77)',
              padding: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              setShowVideo2(true);
            }}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>
              {'Video'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ImagePage;
