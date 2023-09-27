import {Box, HStack, Pressable, Text} from 'native-base';
import LoginTitle from '../../components/common/LoginTitle';
import TextInput from '../../components/TextInput/TextInput';
import {FormProvider, useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {AppStackScreenProps} from '../../navigation/MainNavigator';
import GoogleFacebookContinue from '../../components/Goggle&FacebookContinue/GoogleFacebookContinue';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().min(8, 'Введите пароль').required(),
});

const SignIn = () => {
  const navigation = useNavigation<AppStackScreenProps['navigation']>();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: {isValid, errors},
    getValues,
  } = methods;

  return (
    <FormProvider {...methods}>
      <Box safeAreaTop pl={29} pr={29} bg={'#ffffff'} flex={1}>
        <LoginTitle
          text="Welcome Back!"
          style={{marginBottom: 36, paddingTop: 19}}
        />
        <TextInput
          error={errors.name}
          name="email"
          type="login"
          placeholder="Username or Email"
          style={{marginBottom: 31}}
        />
        <TextInput
          error={errors.password}
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
        <GoogleFacebookContinue style={{marginTop: 75}} />
        <HStack justifyContent={'center'} mt={'29px'}>
          <Text>Create An Account</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text
              ml={'5px'}
              color={'#F83758'}
              textDecorationLine={'underline'}
              fontSize={'14px'}
              fontWeight={'600'}>
              Sign Up
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </FormProvider>
  );
};

export default SignIn;
