import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Styles} from '../styles/image-page.styles';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import Video from 'react-native-video';

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
  const refVideo1 = useRef();
  const refVideo2 = useRef();

  const buttonWidth = Dimensions.get('screen').width / 2.5;
  return (
    <ScrollView style={Styles.viewStyle}>
      <Text
        onPress={() => {
          props?.navigation?.goBack();
        }}
        style={Styles.backText}>
        {'GO BACK'}
      </Text>
      <View>
        <Text style={Styles.title}>{'LIVE Alert'}</Text>
        {!showVideo1 ? (
          <Image
            height={Dimensions.get('screen').height / 4}
            width={Dimensions.get('screen').width}
            source={{
              uri: 'https://www.shutterstock.com/shutterstock/photos/2336393339/display_1500/stock-vector-realistic-isolated-cloud-on-transparent-background-vector-set-of-realistic-isolated-fluffy-cloud-2336393339.jpg',
            }}
            style={Styles.imageStyle}
          />
        ) : (
          <Video
            ref={refVideo1}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            }}
            style={Styles.videoStyle}
            resizeMode="contain"
            controls={true}
          />
        )}
        <View style={Styles.attend}>
          <TouchableOpacity
            style={[Styles.btnPress, {width: buttonWidth}]}
            onPress={() => {
              setShowVideo1(false);
            }}>
            <Text style={Styles.attendText}>{'Attend'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.VideoBtn, {width: buttonWidth}]}
            onPress={() => {
              setShowVideo1(true);
            }}>
            <Text style={Styles.videoText}>{'Video'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={Styles.actionText}>{'Actioned Alert'}</Text>
        {!showVideo2 ? (
          <Image
            height={Dimensions.get('screen').height / 4}
            width={Dimensions.get('screen').width}
            source={{
              uri: 'https://www.shutterstock.com/shutterstock/photos/1724356075/display_1500/stock-vector-vector-cloud-on-a-transparent-background-realistic-vector-drawing-gradient-mesh-eps-1724356075.jpg',
            }}
            style={Styles.imageStyle}
          />
        ) : (
          <Video
            ref={refVideo2}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            }}
            style={Styles.videoStyle}
            resizeMode="contain"
            controls={true}
          />
        )}
        <View style={Styles.attend}>
          <TouchableOpacity
            style={[Styles.btnPress, {width: buttonWidth}]}
            onPress={() => {
              setShowVideo2(false);
            }}>
            <Text style={Styles.attendText}>{'Attend'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.VideoBtn, {width: buttonWidth}]}
            onPress={() => {
              setShowVideo2(true);
            }}>
            <Text style={Styles.attendText}>{'Video'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ImagePage;
