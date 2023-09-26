import {Box, Pressable, Text} from 'native-base';
import LoginTitle from '../../components/common/LoginTitle';
import TextInput from '../../components/TextInput/TextInput';
import {FormProvider, useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigation/MainNavigator';

const SignIn = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  const methods = useForm({
    defaultValues: {
      phoneNumber: '',
    },
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: {isValid, errors},
    getValues,
  } = methods;

  return (
    <FormProvider {...methods}>
      <Box safeAreaTop pl={29} pr={29} mt={19}>
        <LoginTitle text="Welcome Back!" style={{marginBottom: 36}} />
        <TextInput
          name="email"
          placeholder="Username or Email"
          style={{marginBottom: 31}}
        />
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          style={{marginBottom: 9}}
        />
        <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
          <Text alignSelf={'flex-end'} fontSize={12} color={'#F83758'} mb={52}>
            {' '}
            Forgot Password?
          </Text>
        </Pressable>
        <CustomButton name="Login" />
      </Box>
    </FormProvider>
  );
};

export default SignIn;
