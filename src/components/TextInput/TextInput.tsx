import {Box, HStack, Input, Pressable, Text} from 'native-base';
import {FC, useState} from 'react';
import {Controller, FieldError} from 'react-hook-form';
import User from '../../assets/icons/User';
import Lock from '../../assets/icons/Lock';
import Eye from '../../assets/icons/Eye';
import {ViewStyle} from 'react-native';
import Email from '../../assets/icons/Email';

interface TextInputProps {
  name: string;
  placeholder?: string;
  type: string;
  style?: ViewStyle;
  error?: FieldError;
}

const TextInput: FC<TextInputProps> = ({
  name,
  placeholder,
  type,
  style,
  error,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const types = {
    login: (
      <Box w={'24px'} alignItems={'center'}>
        <User />
      </Box>
    ),
    password: (
      <Box w={'24px'} alignItems={'center'}>
        <Lock />
      </Box>
    ),
    email: (
      <Box w={'24px'} alignItems={'center'}>
        <Email />
      </Box>
    ),
  };

  return (
    <Controller
      name={name}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <HStack
              style={style}
              bg={'##F3F3F3'}
              h={55}
              borderRadius={10}
              borderColor={error ? '#F83758' : '#A8A8A9'}
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
                leftElement={types[type]}
                type={show ? 'password' : 'text'}
                placeholderTextColor={'#676767'}
                borderWidth={0}
                _focus={{borderWidth: 0, bg: '#ffffff'}}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
              />
            </HStack>
            {/* {error && <Text>{error.message}</Text>} */}
          </>
        );
      }}
    />
  );
};

export default TextInput;
