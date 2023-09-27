import {Box, HStack, Pressable, Text} from 'native-base';
import Google from '../../assets/icons/Google';
import Apple from '../../assets/icons/Apple';
import Facebook from '../../assets/icons/Facebook';
import {ViewStyle} from 'react-native';
import {FC} from 'react';

interface GoogleFacebookContinueProps {
  style?: ViewStyle;
}

const GoogleFacebookContinue: FC<GoogleFacebookContinueProps> = ({style}) => {
  return (
    <Box alignItems={'center'} style={style}>
      <Text fontSize={12} fontWeight={'500'} marginBottom={'20px'}>
        - OR Continue with -
      </Text>
      <HStack>
        <Pressable
          onPress={() => console.log('Google')}
          p={15}
          borderWidth={1}
          borderRadius={50}
          borderColor={'#F83758'}>
          <Google />
        </Pressable>
        <Pressable
          onPress={() => console.log('Apple')}
          marginLeft={'10px'}
          marginRight={'10px'}
          p={15}
          borderWidth={1}
          borderRadius={50}
          borderColor={'#F83758'}>
          <Apple />
        </Pressable>

        <Pressable
          onPress={() => console.log('Facebook')}
          p={14}
          borderWidth={1}
          borderRadius={50}
          borderColor={'#F83758'}>
          <Facebook />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default GoogleFacebookContinue;
