import React from 'react';
import Swiper from 'react-native-swiper';
import Slider1 from '../../components/common/Slider1';
import Slider2 from '../../components/common/Slider2';
import Slider3 from '../../components/common/Slider3';
import CustomPrevButton from '../../components/common/CustomPrevButton';
import CustomNextButton from '../../components/common/CustomNextButton';
import CustomDot from '../../components/common/CustomDot';
import CustomActiveDot from '../../components/common/CustomActiveDot';
import {Box, HStack} from 'native-base';

const SwiperComponent = () => {
  return (
    <Swiper
      paginationStyle={{marginBottom: 43}}
      style={{alignItems: 'center'}}
      loop={false}
      showsButtons={true}
      prevButton={CustomPrevButton()}
      nextButton={CustomNextButton()}
      buttonWrapperStyle={{
        flexDirection: 'row',
        position: 'absolute',
        top: 350,
        paddingHorizontal: 18,
        alignItems: 'center',
      }}
      dot={CustomDot()}
      activeDot={CustomActiveDot()}>
      <Slider1 />
      <Slider2 />
      <Slider3 />
    </Swiper>
  );
};

export default SwiperComponent;
