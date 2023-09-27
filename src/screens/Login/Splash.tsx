import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';

import Swiper from 'react-native-swiper';
import Slide1 from '../../assets/icons/Slide1';
import {Box, Button, Pressable, Text} from 'native-base';
import Slide2 from '../../assets/icons/Slide2';
import Slide3 from '../../assets/icons/Slide3';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigation/MainNavigator';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const SwiperComponent = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  return (
    <Swiper
      style={{alignItems: 'center'}}
      loop={false}
      showsButtons={true}
      prevButton={
        <Text fontSize={18} fontWeight={600} color={'#C4C4C4'}>
          Prev
        </Text>
      }
      nextButton={
        <Text fontSize={18} fontWeight={600} color={'#F83758'}>
          Next
        </Text>
      }
      buttonWrapperStyle={{
        flexDirection: 'row',
        position: 'absolute',
        top: 380,
        // justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'#ffffff'}
        p={18}>
        <Slide1 />
        <Text fontSize={24} fontWeight={800} mb={'10px'}>
          Choose Products
        </Text>
        <Text textAlign={'center'} color={'#A8A8A9'} fontSize={14}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </Box>
      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'#ffffff'}
        p={18}>
        <Slide2 />
        <Text fontSize={24} fontWeight={800} mb={'10px'}>
          Make Payment
        </Text>
        <Text textAlign={'center'} color={'#A8A8A9'} fontSize={14}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </Box>
      <Box
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'#ffffff'}
        p={18}>
        <Slide3 />
        <Text fontSize={24} fontWeight={800} mb={'10px'}>
          Get Your Order
        </Text>
        <Text textAlign={'center'} color={'#A8A8A9'} fontSize={14}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
        <Pressable position={'absolute'} bottom={8} right={5}>
          <Text
            fontSize={18}
            fontWeight={600}
            color={'#F83758'}
            onPress={() => navigation.navigate('SignIn')}>
            Get Started
          </Text>
        </Pressable>
      </Box>
    </Swiper>
  );
};

export default SwiperComponent;
