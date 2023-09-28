import {Box, HStack, Pressable, Text} from 'native-base';
import Slide3 from '../../assets/icons/Slide3';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigation/MainNavigator';

const Slider3 = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  return (
    <Box safeAreaTop flex={1} alignItems={'center'} bg={'#ffffff'} p={18}>
      <HStack justifyContent={'space-between'} width={'100%'}>
        <HStack>
          <Text fontSize={18} fontWeight={600}>
            3
          </Text>
          <Text fontSize={18} fontWeight={600} color={'#A0A0A1'}>
            /
          </Text>
          <Text fontSize={18} fontWeight={600} color={'#A0A0A1'}>
            3
          </Text>
        </HStack>
        <Pressable onPress={() => navigation.navigate('SignIn')}>
          <Text fontSize={18} fontWeight={600}>
            Skip
          </Text>
        </Pressable>
      </HStack>
      <Slide3 />
      <Text fontSize={24} fontWeight={800} mb={'10px'}>
        Get Your Order
      </Text>
      <Text textAlign={'center'} color={'#A8A8A9'} fontSize={14}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Text>
      <Pressable position={'absolute'} bottom={'60px'} right={5}>
        <Text
          fontSize={18}
          fontWeight={600}
          color={'#F83758'}
          onPress={() => navigation.navigate('SignIn')}>
          Get Started
        </Text>
      </Pressable>
    </Box>
  );
};

export default Slider3;
