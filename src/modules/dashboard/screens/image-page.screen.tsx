import {
  Dimensions,
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
  const buttonWidth = Dimensions.get('screen').width / 2.5;
  return (
    <ScrollView style={{backgroundColor: colors.black}}>
      <View>
        <Text style={{color: colors.red, marginHorizontal: 10, fontSize: 20}}>
          {'LIVE Alert'}
        </Text>
        <View
          style={{
            height: Dimensions.get('screen').height / 3.5,
            borderColor: colors.white,
            borderWidth: 1,
            marginTop: 30,
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              width: '50%',
              marginTop: 30,
            }}>
            {'SYSTEM STATUS IS REMOTLY MONITORED'}
          </Text>
        </View>
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
        <View
          style={{
            height: Dimensions.get('screen').height / 3.5,
            borderColor: colors.white,
            borderWidth: 1,
            marginTop: 30,
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              textAlign: 'center',
              width: '50%',
              marginTop: 30,
            }}>
            {'SYSTEM STATUS IS REMOTLY MONITORED'}
          </Text>
        </View>
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
