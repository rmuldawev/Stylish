import {Box, HStack, Input, Pressable} from 'native-base';
import {FC, useState} from 'react';
import {Controller} from 'react-hook-form';
import User from '../../assets/icons/User';
import Lock from '../../assets/icons/Lock';
import Eye from '../../assets/icons/Eye';
import {ViewStyle} from 'react-native';

interface TextInputProps {
  name: string;
  placeholder?: string;
  type?: string;
  style?: ViewStyle;
}

const TextInput: FC<TextInputProps> = ({name, placeholder, type, style}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Controller
      name={name}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <HStack
              style={style}
              bg={'#ffffff'}
              h={55}
              borderRadius={10}
              borderColor={'#A8A8A9'}
              borderWidth={1}
              alignItems={'center'}
              pl={11}
              pr={11}>
              <Input
                rightElement={
                  type === 'password' ? (
                    <Pressable onPress={() => setShow(prev => !prev)}>
                      <Eye />
                    </Pressable>
                  ) : undefined
                }
                leftElement={
                  type !== 'password' ? (
                    <Box w={'24px'} alignItems={'center'}>
                      <User />
                    </Box>
                  ) : (
                    <Box w={'24px'} alignItems={'center'}>
                      <Lock />
                    </Box>
                  )
                }
                type={show ? 'password' : 'text'}
                placeholderTextColor={'#676767'}
                borderWidth={0}
                _focus={{borderWidth: 0, bg: '#ffffff'}}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
              />
            </HStack>
          </>
        );
      }}
    />
  );
};

export default TextInput;
